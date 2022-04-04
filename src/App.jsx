import "./App.css";
import Airtable from "airtable";
import HomePage from "./routes/HomePage";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth0Provider";

const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base(process.env.REACT_APP_AIRTABLE_BASE);

function App() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  const createProject = async (newProject) => {
    const createdProject = await base("projects").create({ ...newProject });

    base("projects")
      .select({ view: "Grid view" })
      .eachPage(
        (records, fetchNextPage) => {
          setProjects(records);
          console.log("projects", records);
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
    console.log(createdProject);
  };

  const createTask = async (newTask) => {
    const createdTask = await base("tasks").create(newTask);
    setTasks([...tasks, createdTask]);
  };

  const updateTask = async (id, field) => {
    const updatedTask = await base("tasks").update(id, field);
    console.log(id, field);

    base("tasks")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setTasks(records);
        // console.log("tasks", records);
        fetchNextPage();
      });
  };

  useEffect(async () => {
    base("projects")
      .select({ view: "Grid view" })
      .eachPage(
        (records, fetchNextPage) => {
          setProjects(records);
          console.log("projects", records);
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );

    await base("tasks")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setTasks(records);
        // console.log("tasks", records);
        fetchNextPage();
      });
  }, []);

  return (
    <Router>
      <Auth0ProviderWithHistory>
        <div className="app container max-w-xl md:max-w-2xl mx-auto bg-background text-slate-700 my-0 z-100">
          <div className="fixed top-0 left-0 bg-background h-screen w-screen body"></div>
          <HomePage
            projects={projects}
            tasks={tasks}
            handleUpdateTask={updateTask}
            handleCreateTask={createTask}
            handleCreateProject={createProject}
          />
        </div>
      </Auth0ProviderWithHistory>
    </Router>
  );
}

export default App;
