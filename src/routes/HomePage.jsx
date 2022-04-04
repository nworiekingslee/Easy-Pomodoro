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
  handleUpdateTask,
}) => {
  return (
    <>
      {!projects.length ? (
        <HomeLoader />
      ) : (
        <>
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

            {/* This route is protected check module */}
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
            {/* This route is protected */}
            <Route
              path="/"
              render={() => (
                <ProjectCardContainer projects={projects} tasks={tasks} />
              )}
            />
          </Switch>
        </>
      )}
    </>
  );
};

export default HomePage;
