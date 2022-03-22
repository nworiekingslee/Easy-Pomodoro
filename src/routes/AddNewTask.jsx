import { useState } from "react";

const AddNewTask = (props) => {
  const projectId = [];
  projectId.push(props.projectId);
  console.log(projectId);

  const [newTask, setNewTask] = useState("");

  const handleChange = ({ target }) => {
    console.log(newTask);
    setNewTask(target.value);
  };

  const handleCreateTask = () => {
    props.history.goBack();
    props.handleCreateTask({
      task: newTask,
      projectId: projectId,
    });
  };

  return (
    <div className=" flex justify-center items-center  ">
      <div
        className="fixed top-0 h-full w-full container max-w-xl md:max-w-2xl bg-background"
        onClick={() => props.history.goBack()}
      ></div>
      <div className="bg-white px-4 md:px-6 py-6 mb-4 w-full mx-8 md:w-auto rounded-lg border border-grey-100 z-10">
        <p className="text-xl md:text-lg font-semibold mb-4 ">
          Create a new task
        </p>
        <div className="mb-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="new-project"
            type="text"
            autoFocus
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between ">
          <button
            className="bg-brand opacity-90 hover:opacity-100 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => handleCreateTask()}
          >
            Add task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewTask;
