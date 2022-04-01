import ProjectCard from "./project component/ProjectCard";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Profile from "./Profile";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import HomeLoader from "./Loader screen/HomeLoader";

function ProjectCardContainer({ tasks, projects }) {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <>
      <Profile
        projectCount={projects.length}
        name={name}
        picture={picture}
        email={email}
      />
      <Navbar />

      <div className="mx-4 grid gap-3 md:grid-cols-2 md:grid-rows-2 h-100 ">
        {projects.map((item) => (
          <ProjectCard
            key={item.id}
            item={item}
            tasks={tasks.filter((task) => task.fields.projectId[0] === item.id)}
            profile_img={picture}
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
    </>
  );
}

export default withAuthenticationRequired(ProjectCardContainer, {
  onRedirecting: () => <HomeLoader />,
});
