import { IMAGES } from "../../utils/staticJSON";
import "./e-book.css";
import APICallService from "../../api/apiCallService";
import { APIS } from "../../api/apiEndPoints";
import { error } from "./toast";
import { trimInput, validateField } from "../../utils/validations";
import {
  errorMessages,
  validationMessages,
} from "../../utils/validationMessages";
import { useState } from 'react';
import PhoneInput, {
  parsePhoneNumber,
  getCountryCallingCode,
} from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Form } from 'react-bootstrap';

interface FormData {
  name: string;
  email: string;
  phone: string;
  phoneCountry: string
}
interface Errors {
  name: boolean;
  email: boolean;
  phone: boolean;
}
interface ValidationErrors {
  name: boolean;
  email: boolean;
  phone: boolean;
}

interface EBookModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const EBookModal = ({ isModalOpen, closeModal }: EBookModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    phoneCountry: "+91",
  });
  const [errors, setErrors] = useState<Errors>({
    name: false,
    email: false,
    phone: false,
  });
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
    name: false,
    email: false,
    phone: false,
  });
  const [loading, setLoading] = useState(false);
  const [selectedCountry,setSelectedCountry] = useState<any>('IN')

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const newValue = trimInput(name, value);
    const newFormData = { ...formData, [name]: newValue };
    const errorData = { ...validationErrors, [name]: validateField(name, value) };

    setFormData(newFormData);
    setErrors({ ...errors, [name]: false });
    setValidationErrors(errorData);
  };

  const handlePhoneChange = (value: any) => {
    if (!value) {
      setFormData((prevData: any) => ({
        ...prevData,
        phone: '',
      }));
      return;
    }
    try {
      const phoneNumber = parsePhoneNumber(value);
      setFormData((prevData: any) => ({
        ...prevData,
        phoneCountry: phoneNumber
          ? `+${phoneNumber.countryCallingCode}`
          : prevData.phoneCountry,
        phone: phoneNumber ? phoneNumber.nationalNumber : '',
      }));
      let errorData2 = { ...errors };
      errorData2.phone = false;
      setErrors(errorData2)
    } catch (error) {
      console.error('Error parsing phone number:', error);
    }
  };
  const handleCountryChange = (country: any) => {
    setSelectedCountry(country);
    if (country) {
      const newCountryCode = `+${getCountryCallingCode(country)}`;
      setFormData((prevData: any) => ({
        ...prevData,
        phoneCountry: newCountryCode,
        phone: prevData.phone,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Errors = { name: false, email: false, phone: false };
    let isValid = true;

    // Validate required fields
    if (!formData.name.trim()) {
      newErrors.name = true;
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = true;
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = true;
      isValid = false;
    }

    // Check for validation errors
    if (validationErrors.name || validationErrors.email || validationErrors.phone) {
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setLoading(true);
      try {
        const apiService = new APICallService(APIS.EBOOK, formData);
        const response = await apiService.callAPI();
        if (response) {
          setFormData({ name: "", email: "", phone: "" ,phoneCountry: "+91",});
          setSelectedCountry("IN")
          setErrors({ name: false, email: false, phone: false });

          // Trigger download
          const link = document.createElement("a");
          link.href = "/imperoit_com.pdf";
          link.download = "my-ebook.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          closeModal();
        }
      } catch (err: any) {
        error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay custom-blog-cursor">
          <div className="modal-content">
            <button
              className="close-modal-button custom-blog-cursor"
              onClick={closeModal}
            >
              &times;
            </button>
            <span className="fs-20 main-title text-gradient-style3 text-center mb-3">
              Unlock Our <br />
              Exclusive Ebook
            </span>
            <span className="text-center mb-3">
            Want to future-proof your business? Our comprehensive eBook is packed with actionable insights, industry best practices, and expert recommendations to help you harness the power of technology. Get your copy now!
            </span>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Full name"
                  onChange={handleInputChange}
                  value={formData.name}
                />
                {errors.name && (
                  <p className="text-danger fs-6 mb-0">{errorMessages.name}</p>
                )}
                {validationErrors.name && (
                  <p className="text-danger fs-6 mb-0">
                    {validationMessages.name}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  onChange={handleInputChange}
                  value={formData.email}
                />
                {errors.email && (
                  <p className="text-danger fs-6 mb-0">{errorMessages.email}</p>
                )}
                {validationErrors.email && (
                  <p className="text-danger fs-6 mb-0">
                    {validationMessages.email}
                  </p>
                )}
              </div>
              <div className="mb-3">
                {/* <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="+91 9876543210"
                  onChange={handleInputChange}
                  value={formData.phone}
                /> */}
                  <Form.Group
                            className="mb-1"
                            controlId="phoneInput"
                          >
                            <PhoneInput
                              id="phoneInput"
                              className='form-control'
                              international
                              countryCallingCodeEditable={false}
                              defaultCountry={selectedCountry}
                              value={`${formData.phoneCountry}${formData.phone}`}
                              onChange={handlePhoneChange}
                              onCountryChange={handleCountryChange}
                            />
                          </Form.Group>
                {errors.phone && (
                  <p className="text-danger fs-6 mb-0">{errorMessages.phone}</p>
                )}
                {validationErrors.phone && (
                  <p className="text-danger fs-6 mb-0">
                    {validationMessages.phone}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="fs-16 fw-500 btn btn-primary text-white custom-cursor w-100"
                disabled={loading}
              >
                {loading ? "Downloading..." : "Download e-book"}
              </button>
            </form>

            <div className="py-1 text-center mt-3">
              <img
                className="img-fluid"
                width="230"
                height="53"
                src={IMAGES.logoBlack}
                alt="logo"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EBookModal;