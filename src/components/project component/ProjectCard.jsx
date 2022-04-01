import { useState } from "react";
import { Link } from "react-router-dom";

function ProjectCard({ tasks, item, profile_img }) {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  );

  const doneTask = tasks.filter((task) => task.fields.isDone === true).length;
  const allTask = tasks.length;

  //This function is used to render the project progress bar
  function checkPercentage() {
    return (doneTask / allTask) * 100;
  }

  return (
    <>
      {/* Render a different card for when the project is completed for a different hover effect */}
      {checkPercentage() === 100 ? (
        <Link to={`/${item.id}`}>
          <div className="project-done bg-white border  border-grey-100 hover:border-done-outline hover:shadow hover:shadow-done-outline w-fill p-4 rounded-lg cursor-pointer">
            <p className="project-title text-xl md:text-lg font-semibold hover:text-done ">
              {item.fields.projectTitle}
            </p>

            <div className="flex items-center justify-between mt-3">
              <p className="text-sm text-slate-500">{item.fields.date}</p>
              <img
                className="object-cover h-6 w-6 rounded-full"
                src={image}
                // src={profile_img}
                alt="something"
              />
            </div>
            <div className="mt-6">
              <div className="w-full bg-grey-100 rounded-full h-1 dark:bg-slate-200">
                {/* Render a different progressbar with a different color for when the project is completed */}
                {checkPercentage() === 100 ? (
                  <div
                    className="bg-done h-1 rounded-full"
                    style={{ width: `${checkPercentage()}%` }}
                  ></div>
                ) : (
                  <div
                    className="bg-brand h-1 rounded-full"
                    style={{ width: `${checkPercentage()}%` }}
                  ></div>
                )}
              </div>
              <p className="text-xs mt-1 text-slate-500">
                Task done{" "}
                <span className="text-slate-500">
                  {doneTask} / {allTask}
                </span>
              </p>
            </div>
          </div>
        </Link>
      ) : (
        <Link to={`/${item.id}`}>
          {/* Render a different card for when the project is completed for a different hover effect */}
          <div className="project-ongoing bg-white border  border-grey-100 hover:border-outline hover:shadow hover:shadow-outline w-fill p-4 rounded-lg cursor-pointer">
            <p className="project-title text-xl md:text-lg font-semibold hover:text-brand ">
              {item.fields.projectTitle}
            </p>

            <div className="flex items-center justify-between mt-3">
              <p className="text-sm text-slate-500">{item.fields.date}</p>
              <img
                className="object-cover h-6 w-6 rounded-full"
                src={image}
                // src={profile_img}
                alt="something"
              />
            </div>
            <div className="mt-6">
              <div className="w-full bg-grey-100 rounded-full h-1 dark:bg-slate-200">
                {/* Render a different progressbar with a different color for when the project is completed */}
                {checkPercentage() === 100 ? (
                  <div
                    className="bg-done h-1 rounded-full"
                    style={{ width: `${checkPercentage()}%` }}
                  ></div>
                ) : (
                  <div
                    className="bg-brand h-1 rounded-full"
                    style={{ width: `${checkPercentage()}%` }}
                  ></div>
                )}
              </div>
              <p className="text-xs mt-1 text-slate-500">
                Task done{" "}
                <span className="text-slate-500">
                  {doneTask} / {allTask}
                </span>
              </p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default ProjectCard;
