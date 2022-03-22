import { Link } from "react-router-dom";

const AddTaskComponent = ({ projectId }) => {
  return (
    <Link to={`/${projectId}/new-task`}>
      <div className="p-4 w-100 bg-background mx-4 relative mb-2 rounded-lg border border-dashed hover:shadow  border-grey-200 cursor-pointer flex ">
        <p className="text-grey-200 mx-auto">Add task</p>
      </div>
    </Link>
  );
};

export default AddTaskComponent;
