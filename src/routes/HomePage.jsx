import ProjectCardContainer from "../components/ProjectCardContainer";
import HomeLoader from "../components/Loader screen/HomeLoader";
import { Route, Switch } from "react-router-dom";
import ProjectPage from "./ProjectPage";
import Clock from "./Clock";
import AddNewTask from "./AddNewTask";
import AddNewProject from "./AddNewProject";

const HomePage = ({
  projects,
  tasks,
  handleCreateTask,
  handleCreateProject,
  handleDeleteProject,
  handleUpdateTask,
  updateProjects,
}) => {
  return (
    <>
      {!projects ? (
        <HomeLoader />
      ) : (
        <Switch>
          <Route
            exact
            path="/new-project"
            render={(props) => (
              <AddNewProject
                handleCreateProject={handleCreateProject}
                history={props.history}
                projects={projects}
                tasks={tasks}
                {...props}
              />
            )}
          />
          <Route
            path="/:projectId/new-task"
            render={(props) => (
              <AddNewTask
                handleCreateTask={handleCreateTask}
                handleUpdateTask={handleUpdateTask}
                projectId={props.match.params.projectId}
                history={props.history}
                projects={projects}
                tasks={tasks}
                {...props}
              />
            )}
          />

          <Route
            path="/:projectId/:taskId"
            render={(props) => (
              <Clock
                handleUpdateTask={handleUpdateTask}
                projectId={props.match.params.projectId}
                taskId={props.match.params.taskId}
                history={props.history}
                tasks={tasks}
                {...props}
              />
            )}
          />
          <Route
            path="/:projectId"
            render={(props) => (
              <ProjectPage
                projectId={props.match.params.projectId}
                history={props.history}
                projects={projects}
                tasks={tasks}
                {...props}
              />
            )}
          />

          <Route
            path="/"
            render={() => (
              <ProjectCardContainer
                projects={projects}
                tasks={tasks}
                handleDeleteProject={handleDeleteProject}
                updateProjects={updateProjects}
              />
            )}
          />
        </Switch>
      )}
    </>
  );
};

export default HomePage;
