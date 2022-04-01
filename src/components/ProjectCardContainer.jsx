import ProjectCard from "./project component/ProjectCard";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function ProjectCardContainer(props) {
  const { tasks, projects } = props;
  // const { user } = useAuth0();
  return (
    <>
      <Profile projectCount={projects.length} />
      <Navbar />

      <div className="mx-4 grid gap-3 md:grid-cols-2 md:grid-rows-2 h-100 ">
        {projects.map((item) => (
          <ProjectCard
            key={item.id}
            item={item}
            tasks={tasks.filter((task) => task.fields.projectId[0] === item.id)}
            // profile_img = {user.picture}
          />
        ))}
        <Link to="/new-project">
          <div className="p-4 w-100 bg-background relative mb-2 rounded-lg border border-dashed hover:shadow  border-grey-200 cursor-pointer flex flex-col justify-center items-center text-grey-200">
            <p className="text-lg text-center font-semibold">
              What do you want to work on today?
            </p>
            <p className="text-center text-sm mt-4">
              Click to add a project and keep track of task
            </p>
          </div>
        </Link>
      </div>

      {/* <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rounded-full bg-brand h-12 w-12 cursor-pointer fixed bottom-12 right-12 "
      >
        <path
          d="M15.875 14.125V8H14.125V14.125H8V15.875H14.125V22H15.875V15.875H22V14.125H15.875Z"
          className="fill-white bg-done"
        />
      </svg> */}
    </>
  );
}

export default ProjectCardContainer;
