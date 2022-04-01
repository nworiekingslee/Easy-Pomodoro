import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
import ProjectCardContainer from "../components/ProjectCardContainer";
import HomeLoader from "../components/Loader screen/HomeLoader";
import { Link, Route, Switch } from "react-router-dom";
import ProjectPage from "./ProjectPage";
import Clock from "./Clock";
import AddNewTask from "./AddNewTask";
import AddNewProject from "./AddNewProject";

function HomePage({
  projects,
  tasks,
  handleCreateTask,
  handleCreateProject,
  handleUpdateTask,
}) {
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
                <ProjectCardContainer projects={projects} tasks={tasks} />
              )}
            />
            {/* <Route path="/project/:id" component={ProjectPage} /> */}
          </Switch>
        </>
      )}
    </>
  );
}

export default HomePage;
