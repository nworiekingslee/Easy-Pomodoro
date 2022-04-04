import { useState } from "react";
import { Link } from "react-router-dom";

function ProjectCard({ tasks, item, profile_img, handleDeleteProject }) {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  );

  const [del, setDel] = useState(false);

  const doneTask = tasks.filter((task) => task.fields.isDone === true).length;
  const allTask = tasks.length;

  //This function is used to render the project progress bar
  function checkPercentage() {
    return (doneTask / allTask) * 100;
  }

  const delStyling = del
    ? "z-20 absolute text-red-500 top-4 right-8  py-2 px-4 bg-white hover:bg-red-100 shadow-sm w-24 border border-1 border-grey-100 rounded-xl"
    : "hidden bg-blue-600";

  return (
    <div className="bg-grey-100 relative">
      <div
        onClick={() => {
          // setDel((del) => !del);
          handleDeleteProject(`${item.id}`);
          console.log("deleted");
        }}
        className={delStyling}
      >
        Delete
      </div>

      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer absolute top-2 right-2"
        onClick={() => setDel((del) => !del)}
      >
        <path
          d="M15.6 11.2C16.4837 11.2 17.2 10.4837 17.2 9.6C17.2 8.71634 16.4837 8 15.6 8C14.7163 8 14 8.71634 14 9.6C14 10.4837 14.7163 11.2 15.6 11.2Z"
          className="fill-slate-600"
          // fill="#9296A5"
        />
        <path
          d="M15.6 17.6C16.4837 17.6 17.2 16.8836 17.2 16C17.2 15.1163 16.4837 14.4 15.6 14.4C14.7163 14.4 14 15.1163 14 16C14 16.8836 14.7163 17.6 15.6 17.6Z"
          className="fill-slate-600"
          // fill="#9296A5"
        />
        <path
          d="M15.6 24C16.4837 24 17.2 23.2836 17.2 22.4C17.2 21.5163 16.4837 20.8 15.6 20.8C14.7163 20.8 14 21.5163 14 22.4C14 23.2836 14.7163 24 15.6 24Z"
          className="fill-slate-600"
          // fill="#9296A5"
        />
      </svg>
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
    </div>
  );
}

export default ProjectCard;
