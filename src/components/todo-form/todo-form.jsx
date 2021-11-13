import { Input, Button } from 'reactstrap';
import { FaCalendarAlt } from 'react-icons/fa';

export const TodoForm = function (props) {
  return (
    <div className="d-flex flex-row p-2 border border-light shadow-sm">
      <Input
        id="addNewTxt"
        name="addNewTxt"
        placeholder="Add new ..."
        type="text"
        className="border-0" 
        onChange={props.onTodoFormChange}/>
      <div className="d-inline-block btn text-primary"><FaCalendarAlt /></div>
      <Button color="primary">ADD</Button>
    </div>
  )
}