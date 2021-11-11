import { Input, Button } from 'reactstrap';
import { FaRegListAlt, FaCalendarAlt } from 'react-icons/fa';

import './App.scss';

function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="todo-container border border-light shadow-sm p-4">
        <div className="d-flex flex-row justify-content-center">
          <h1 className="mt-3 mb-5"><FaRegListAlt /> <div style={{ padding: 0, margin: 0, display: "inline-block", textTransform: "uppercase" }}>todo</div></h1>
        </div>
        <div className="d-flex flex-row p-2 border border-light shadow-sm">
          <Input
            id="addNewTxt"
            name="addNewTxt"
            placeholder="Add new ..."
            type="text"
            className="border-0" />
          <div className="d-inline-block btn text-primary"><FaCalendarAlt /></div>
          <Button color="primary">ADD</Button>
        </div>
        <div className="my-4 border-bottom"></div>
        <div className="d-flex flex-row justify-content-end">
          <div className="input-group mx-2">
            <label className="input-group-text text-secondary">Filter</label>
            <select className="form-select">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="active">Active</option>
              <option value="has-due-date">Has due date</option>
            </select>
          </div>
          <div className="input-group mx-2">
            <label className="input-group-text text-secondary">Sort</label>
            <select className="form-select">
              <option value="added-date-asc">Added date</option>
              <option value="due-date-desc">Due date</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
