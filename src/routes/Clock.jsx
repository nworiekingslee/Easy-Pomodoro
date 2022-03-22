import { useState, useEffect } from "react";

const Clock = ({ taskId, projectId, history, tasks }) => {
  const thisTask = tasks.filter((task) => task.id === taskId);
  // console.log("history", history);
  const activeTime = {
    minutes: "0",
    seconds: "25",
    milliseconds: "100",
  };
  const passiveTime = {
    minutes: "0",
    seconds: "5",
    milliseconds: "100",
  };

  const [isActive, setActive] = useState(true);
  const [pomodoroTime, setPomodoroTime] = useState(activeTime);
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(1);

  //  status 1 means running
  //  status 2 means paused

  useEffect(() => {
    console.log("isActive-useEffect", isActive);
    if (!isActive) {
      pause();
      setPomodoroTime(passiveTime);
    } else {
      pause();
      setPomodoroTime(activeTime);
    }
  }, [isActive]);

  const start = () => {
    setStatus(1);
    run();
    setInterv(setInterval(run, 10));
  };

  const pause = () => {
    clearInterval(interv);
    setStatus(2);
  };

  var updatedM = pomodoroTime.minutes;
  var updatedS = pomodoroTime.seconds;
  var updatedMs = pomodoroTime.milliseconds;

  const run = () => {
    if (updatedS === -1) {
      updatedM--;
      updatedS = 59;
    }

    if (updatedM === -1) {
      setActive((isActive) => !isActive);
      return setPomodoroTime({
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      });
      // pause();
    }

    if (updatedMs === -1) {
      updatedS--;
      updatedMs = 100;
    }
    updatedMs--;

    setPomodoroTime({
      minutes: updatedM,
      seconds: updatedS,
      milliseconds: updatedMs,
    });
  };
  const taskComplete = () => {
    thisTask[0].fields.isDone = true;
    history.replace(`/${projectId}`);
  };

  return (
    <>
      <div className="bg-background absolute top-0 h-screen w-full container max-w-xl md:max-w-2xl mx-auto">
        <nav className="bg-background p-4 flex items-center ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            onClick={() => history.goBack()}
          >
            <path
              d="M15.535 3.51501L7.04999 12L15.535 20.485L16.95 19.071L9.87799 12L16.95 4.92901L15.535 3.51501Z"
              className="fill-slate-600"
            />
          </svg>
        </nav>

        {/* the Clock */}
        <div className="flex flex-col items-center justify-center py-8 h-48">
          <p className="text-2xl font-light text-center px-8 z-40">
            {thisTask[0].fields.task}
          </p>{" "}
        </div>

        <div className="flex flex-col items-center justify-center ">
          {isActive ? (
            <div className="soft-glow rounded bg-brand blur-3xl opacity-50 h-24 w-24 absolute top-0"></div>
          ) : (
            <div className="soft-glow rounded bg-done blur-3xl opacity-50 h-24 w-24 absolute top-0"></div>
          )}
          <div className="mt-16 clock font-thin text-7xl sm:text-9xl flex items-center justify-center">
            <span className="minute">{pomodoroTime.minutes}</span>:{" "}
            <span className="sec">{pomodoroTime.seconds}</span>
          </div>
        </div>

        {/* The message */}
        <div className="flex w-full mt-8 bg-grey-100 p-4">
          <p className="text-sm text-light mx-auto ">
            {isActive ? "Time to grind" : "Take a break"}
          </p>
        </div>
        <div className="flex w-full mt-8 p-4 ">
          {status === 2 ? (
            <div
              onClick={() => start()}
              className="play-btn h-16 w-16 bg-white mx-auto border border-2 border-done-outline rounded-full flex justify-center items-center"
            >
              <svg
                width="57"
                height="57"
                viewBox="0 0 57 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5 38.775V17.625L37.6 28.2L23.5 38.775Z"
                  fill="#030B21"
                />
              </svg>
            </div>
          ) : (
            ""
          )}
          {status === 1 ? (
            <div
              onClick={() => pause()}
              className="pause-btn h-16 w-16 bg-white mx-auto border border-2 border-outline rounded-full flex justify-center items-center"
            >
              <svg
                width="15"
                height="20"
                viewBox="0 0 15 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.25 19.6H9.54999V0.800049H14.25V19.6ZM4.84999 19.6H0.149994V0.800049H4.84999V19.6Z"
                  fill="#030B21"
                />
              </svg>
            </div>
          ) : (
            " "
          )}
        </div>

        {/* Begin button */}
        <div className="flex flex-col  absolute bottom-24 w-full">
          <button
            onClick={() => taskComplete()}
            className="bg-done opacity-90 hover:opacity-100 text-white  py-2 px-6 rounded-full focus:outline-none focus:shadow-outline mx-auto"
          >
            Mark task as complete
          </button>
        </div>
      </div>
    </>
  );
};

export default Clock;
