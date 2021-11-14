import React from 'react';
import DatePicker from "react-datepicker";
import { Input, Button } from 'reactstrap';
import { FaCalendarAlt, FaSave } from 'react-icons/fa';

import "react-datepicker/dist/react-datepicker.css";

export const TodoForm = function ({ startDate, onChangeDate, onTodoFormChange }) {

  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div className="btn text-primary" onClick={onClick} ref={ref}>
      <FaCalendarAlt/> <span className="align-middle">{value}</span>
    </div>
  ));

  return (
      <div className="d-flex p-2 border border-light shadow-sm">
        <div className="flex-grow-1">
        <Input
          id="addNewTxt"
          name="addNewTxt"
          placeholder="Add new ..."
          type="text"
          className="border-0"
          onChange={onTodoFormChange} />
        </div>
        <div>
        <DatePicker
          selected={startDate}
          onChange={onChangeDate}
          minDate={new Date()}
          customInput={<ExampleCustomInput />} 
          showDisabledMonthNavigation />
        </div>
        <Button color="primary"><FaSave /> <span className="align-middle">ADD</span></Button>
      </div>
  )
}