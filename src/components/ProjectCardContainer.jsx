import ProjectCard from "./project component/ProjectCard";

function ProjectCardContainer(props) {
  const { tasks, projects } = props;
  return (
    <>
      <div className="m-4 grid gap-3 md:grid-cols-2 md:grid-rows-2">
        {projects.map((item) => (
          <ProjectCard
            key={item.id}
            item={item}
            tasks={tasks.filter((task) => task.fields.projectId[0] === item.id)}
          />
        ))}
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
