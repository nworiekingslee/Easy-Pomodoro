import "./App.css";
import Airtable from "airtable";
import HomePage from "./routes/HomePage";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base(process.env.REACT_APP_AIRTABLE_BASE);

function App() {
  const [projects, setProjects] = useState();
  const [tasks, setTasks] = useState([]);

  const updateProjects = (newProjects) => {
    setProjects(newProjects);
  };

  const fetchData = async () => {
    base("projects")
      .select({ view: "Grid view" })
      .eachPage(
        (records, fetchNextPage) => {
          setProjects(records);
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );

    base("tasks")
      .select({ view: "Grid view" })
      .eachPage(
        (records, fetchNextPage) => {
          setTasks(records);
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  };

  const createProject = async (newProject) => {
    const oldProject = [...projects];
    const fakeEntry = {
      fields: { ...newProject },
      id: "recqSGxnM1TRh9zb9",
      disable: true,
    };
    setProjects([...projects, fakeEntry]);

    try {
      await base("projects").create({ ...newProject });
      toast.success("Project created");
      fetchData();
    } catch (e) {
      console.warn(e);
      setProjects(oldProject);
    }
  };

  const deleteProject = async (id) => {
    const oldProjects = [...projects];
    const remainingProjects = projects.filter((project) => project.id !== id);
    setProjects(remainingProjects);

    const taskToDelete = tasks.filter(
      (task) => task.fields.projectId[0] === id
    );

    const taskId = [];
    taskToDelete.map((task) => taskId.push(task.id));
    console.log("taskId", taskId);

    if (taskId.length) {
      base("tasks").destroy(taskId, function (err, deletedRecords) {
        if (err) {
          // console.error(err.message);
          setProjects(oldProjects);
          return;
        }
      });
    }

    base("projects").destroy(id, function (err, deletedRecords) {
      toast("Project destroyed", {
        icon: "🔥",
      });

      if (err) {
        setProjects(oldProjects);
        toast.error("Couldn't destroyed project");
        return;
      }
    });
  };

  const createTask = async (newTask) => {
    try {
      const createdTask = await base("tasks").create(newTask);
      setTasks([...tasks, createdTask]);
    } catch (e) {
      console.warn(e);
    }
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Toaster />
      <Router>
        <div className="app container max-w-xl md:max-w-2xl mx-auto bg-background text-slate-700 my-0 z-100">
          <div className="fixed top-0 left-0 bg-background h-screen w-screen body"></div>
          <HomePage
            projects={projects}
            tasks={tasks}
            handleUpdateTask={updateTask}
            handleCreateTask={createTask}
            handleCreateProject={createProject}
            handleDeleteProject={deleteProject}
            updateProjects={updateProjects}
          />
        </div>
      </Router>
    </>
  );
}

export default App;
