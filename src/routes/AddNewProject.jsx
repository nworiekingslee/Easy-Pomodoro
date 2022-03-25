import { useState } from "react";

const AddNewProject = (props) => {
  console.log("props", props);
  const [newProject, setNewProject] = useState("");

  const handleChange = ({ target }) => {
    // console.log(newTask);
    setNewProject(target.value);
  };

  const handleCreateProject = () => {
    var today = new Date();

    var dateNow =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    props.history.goBack();
    props.handleCreateProject({
      projectTitle: newProject,
      date: dateNow,
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
          <div className="h-3 w-12 bg-grey-100 animate-pulse"></div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 ">
            Create new Project
          </h3>

          <input
            className="appearance-none bg-background border-b-2 border-grey-100 focus:border-grey-200 w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            id="new-project"
            type="text"
            autoFocus
            onChange={handleChange}
            placeholder="type here"
          />

          <button
            className="mt-4 bg-brand opacity-90 hover:opacity-100 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => handleCreateProject()}
          >
            Add Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewProject;
