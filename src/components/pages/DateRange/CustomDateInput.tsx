import CalendarIcon from "../../../assets/img/svg/calender.svg";
const CustomDateInput = ({ value, onClick, placeholder, inputClass }: any) => {
  return (
    <button
      className={`form-control  d-flex justify-content-between align-items-center ms-1 min-w-lg-200px ${
        value ? "text-black fw-bold" : ""
      } ${inputClass ? inputClass : "fs-12"}  `}
      onClick={onClick}
    >
      {value || placeholder}
      <img className="ms-4" src={CalendarIcon} height={20} width={20} />
    </button>
  );
};
export default CustomDateInput;
