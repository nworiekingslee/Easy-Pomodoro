import { useState } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import HomeLoader from "../components/Loader screen/HomeLoader";

const AddNewTask = (props) => {
  const projectId = [];
  projectId.push(props.projectId);

  const [newTask, setNewTask] = useState("");

  const handleChange = ({ target }) => {
    // console.log(newTask);
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
      <div className="fixed top-0 h-full w-full container max-w-xl md:max-w-2xl bg-background">
        <nav className=" z-300 p-4 flex items-center ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            onClick={() => props.history.goBack()}
          >
            <path
              d="M15.535 3.51501L7.04999 12L15.535 20.485L16.95 19.071L9.87799 12L16.95 4.92901L15.535 3.51501Z"
              className="fill-slate-600"
            />
          </svg>
        </nav>

        <div className="px-4 md:px-6 py-6">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-4"
          >
            <path
              d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM11.984 20H12C16.4167 19.9956 19.9942 16.4127 19.992 11.996C19.9898 7.57929 16.4087 4 11.992 4C7.57528 4 3.99421 7.57929 3.992 11.996C3.98979 16.4127 7.56729 19.9956 11.984 20ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"
              className="fill-slate-700"
            />
          </svg>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 ">
            Add a new task
          </h3>

          <input
            className="appearance-none bg-background border-b-2 border-grey-200 w-full py-3 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            id="new-project"
            type="text"
            autoFocus
            onChange={handleChange}
            placeholder="type here"
          />

          <button
            className="mt-4 bg-brand opacity-90 hover:opacity-100 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => handleCreateTask()}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default withAuthenticationRequired(AddNewTask, {
  onRedirecting: () => <HomeLoader />,
});
