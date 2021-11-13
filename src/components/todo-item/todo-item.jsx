import { FaRegSquare, FaRegCheckSquare, FaEdit, FaTrashAlt } from 'react-icons/fa';

export const TodoItem = ({ todo }) => {
  return (
    <div className="d-flex flex-row border border-light p-2 fs-4">
      <div className={"d-flex align-items-center p-2 " + (todo.isDone ? "text-success" : "text-secondary")}>{todo.isDone ? <FaRegCheckSquare /> : <FaRegSquare />}</div>
      <div className="d-inline-block p-2 flex-grow-1">
        <div className="ms-2 me-auto">
          <div className={"fw-bold " + (todo.isDone ? "text-decoration-line-through" : "")}>{todo.task}</div>
          <div className="fs-6 text-secondary">12/12/2001</div>
        </div>
      </div>
      <div className="d-flex align-items-center flex-row">
        <div className="d-inline-block p-2 text-secondary"><FaEdit /></div>
        <div className="d-inline-block p-2 text-danger"><FaTrashAlt /></div>
      </div>
    </div>
  );
}