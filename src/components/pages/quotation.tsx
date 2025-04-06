import { useNavigate } from 'react-router-dom';
import "./quotation.css"; // Include custom styles for the button

const GETQuotation = () => {
    const navigate = useNavigate();

    if (location.pathname === '/budget-calculator') {
        return null;  // Don't render the button if on /budget-calculator page
      }    

  return (
    <div>
        <div className="floating-btn custom-cursor" onClick={()=> navigate('/budget-calculator')}>
            <span className='fs-18 text-center'>
            Get a<br></br>Proposal
            </span>
        </div>
    </div>
  );
};

export default GETQuotation;
