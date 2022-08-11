import { useState } from "react";
import { Link } from "react-router-dom";

function ProjectCard({ tasks, item, profile_img, handleDeleteProject }) {
  const [del, setDel] = useState(false);
  const [confirmDel, setConfirmDel] = useState(false);

  const doneTask = tasks.filter((task) => task.fields.isDone === true).length;
  const allTask = tasks.length;

  //This function is used to render the project progress bar
  function checkPercentage() {
    return (doneTask / allTask) * 100;
  }

  return (
    <div className="bg-grey-100 relative cursor-pointer">
      {del ? (
        <div className="z-50 fixed top-0 left-0 w-screen h-screen bg-[#00000088] flex items-start justify-center shadow-2xl border">
          <div className="w-full z-40 sm:w-40 pb-4 mt-40 mx-5 bg-background rounded-xl ">
            <div
              className="p-3 float-right mx-2 my-2 rounded-md cursor-pointer"
              onClick={() => {
                setDel(!del);
                setConfirmDel(!confirmDel);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                  fill="#2E3A59"
                ></path>
              </svg>
            </div>
            {!confirmDel ? (
              <button
                onClick={() => setConfirmDel(!confirmDel)}
                className="text-left w-full py-3 px-4 hover:bg-grey-100 border border-1 border-grey-100"
              >
                Delete project
              </button>
            ) : (
              <button
                onClick={() => {
                  handleDeleteProject(`${item.id}`);
                  setDel(!del);
                }}
                className="text-left text-red-600 w-full py-3 px-4 hover:bg-red-50 border border-1 border-grey-100"
              >
                Confirm delete
              </button>
            )}
          </div>
        </div>
      ) : (
        ""
      )}

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
        />
        <path
          d="M15.6 17.6C16.4837 17.6 17.2 16.8836 17.2 16C17.2 15.1163 16.4837 14.4 15.6 14.4C14.7163 14.4 14 15.1163 14 16C14 16.8836 14.7163 17.6 15.6 17.6Z"
          className="fill-slate-600"
        />
        <path
          d="M15.6 24C16.4837 24 17.2 23.2836 17.2 22.4C17.2 21.5163 16.4837 20.8 15.6 20.8C14.7163 20.8 14 21.5163 14 22.4C14 23.2836 14.7163 24 15.6 24Z"
          className="fill-slate-600"
        />
      </svg>

      {checkPercentage() === 100 ? (
        <Link to={`/${item.id}`}>
          <div className=" project-done bg-white border  border-grey-100 hover:border-done-outline hover:shadow hover:shadow-done-outline w-fill p-4 rounded-lg cursor-pointer">
            <p className="project-title text-xl md:text-lg font-semibold hover:text-done ">
              {item.fields.projectTitle}
            </p>

            <div className="flex items-center justify-between mt-3">
              <p className="text-sm text-slate-500">{item.fields.date}</p>
              <img
                className="object-cover h-6 w-6 rounded-full"
                src={profile_img}
                alt="something"
              />
            </div>
            <div className="mt-6">
              <div className="w-full bg-grey-100 rounded-full h-1 dark:bg-slate-200">
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
          <div className="project-ongoing bg-white border  border-grey-100 hover:border-outline hover:shadow hover:shadow-outline w-fill p-4 rounded-lg cursor-pointer">
            <p className="project-title text-xl md:text-lg font-semibold hover:text-brand ">
              {item.fields.projectTitle}
            </p>

            <div className="flex items-center justify-between mt-3">
              <p className="text-sm text-slate-500">{item.fields.date}</p>
              <img
                className="object-cover h-6 w-6 rounded-full"
                src={profile_img}
                alt="something"
              />
            </div>
            <div className="mt-6">
              <div className="w-full bg-grey-100 rounded-full h-1 dark:bg-slate-200">
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
