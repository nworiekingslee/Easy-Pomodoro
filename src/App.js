import "./App.css";
import Airtable from "airtable";
import HomePage from "./routes/HomePage";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base(process.env.REACT_APP_AIRTABLE_BASE);

function App() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);


  // const createProject = async (newProject) => {
  //   var today = new Date();

  //   var dateNow =
  //     today.getFullYear() +
  //     "-" +
  //     (today.getMonth() + 1) +
  //     "-" +
  //     today.getDate();

  //   const createdProject = await base("projects").create({
  //     ...newProject,
  //     date: dateNow,
  //   });
  //   // console.log(createdProject.id);
  //   console.log([...projects, createdProject]);
  //   setProjects([...projects, createdProject]);
  //   return createdProject.id;
  // };

  const createTask = async (newTask) => {
    const createdTask = await base("tasks").create(newTask);
    setTasks([...tasks, createdTask]);
    console.log(newTask);
  };

  useEffect(async () => {
    await base("projects")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setProjects(records);
        // console.log("projects", records);
        fetchNextPage();
      });

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
      <div className="container max-w-xl md:max-w-2xl mx-auto bg-background text-slate-700 h-full">
        <HomePage
          projects={projects}
          tasks={tasks}
          handleCreateTask={createTask}
        />
      </div>
    </Router>
  );
}

export default App;
