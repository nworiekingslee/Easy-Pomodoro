import AddTaskComponent from "../components/project component/AddTaskComponent";
import Task from "../components/project component/Task";
import { Link } from "react-router-dom";

function ProjectPage({ history, projectId, projects, tasks }) {
  const thisProject = projects.filter((project) => project.id === projectId);
  const thisTasks = tasks.filter(
    (task) => task.fields.projectId[0] === projectId
  );

  return (
    <div className="bg-background w-full h-full container max-w-xl md:max-w-2xl mx-auto">
      <header className="sticky top-0 z-20">
        <nav className="bg-background p-4 flex items-center ">
          <Link to={"/"}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
              onClick={() => history.goBack()}
            >
              <path
                d="M15.535 3.51501L7.04999 12L15.535 20.485L16.95 19.071L9.87799 12L16.95 4.92901L15.535 3.51501Z"
                className="fill-slate-600"
              />
            </svg>
          </Link>
        </nav>

        <div className=" px-4 flex justify-center items-center h-48 bg-background z-40">
          <div className="flex flex-col items-center ">
            <p className="text-2xl text-center px-4 z-40">
              {thisProject[0].fields.projectTitle}
            </p>
            <p className="text-sm text-slate-500 font-light mt-1 z-40">
              {thisProject[0].fields.date}
            </p>
          </div>
        </div>

        <div className="h-20 w-100 bg-background blur-lg relative bottom-16"></div>
      </header>
      {thisTasks.map((task) => (
        <Task key={task.id} task={task} projectId={thisProject[0].id} />
      ))}
      <AddTaskComponent projectId={thisProject[0].id} />

      <div className="h-48 w-100"></div>
    </div>
  );
}

export default ProjectPage;
