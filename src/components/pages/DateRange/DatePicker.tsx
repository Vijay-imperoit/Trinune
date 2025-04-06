import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "./dateRange.css";
const CustomDatePicker = (props: any) => {
  return (
    <>
      <DatePicker
        className={`${props.className} form-control border border-r5px`}
        selected={props.selected}
        onChange={props.onChange}
        startDate={props.startDate}
        endDate={props.endDate}
        dateFormat={props.dateFormat}
        selectsRange={props.selectsRange}
        showFullMonthYearPicker={props.showFullMonthYearPicker}
        maxDate={props.maxDate}
        minDate={props.minDate}
        isClearable={props.isClearable}
        disabled={props.disabled}
        showMonthYearPicker={props.showMonthYearPicker}
        showWeekNumbers={props.showWeekNumbers}
        showWeekPicker={props.showWeekPicker}
        showYearPicker={props.showYearPicker}
        placeholderText={props.placeholder}
        customInput={props.customInput}
        showYearDropdown={true}
        dropdownMode="select"
      />
    </>
  );
};
export default CustomDatePicker;
