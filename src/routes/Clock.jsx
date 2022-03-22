import { useState, useEffect } from "react";

const Clock = ({ projectId, taskId, history, projects, tasks }) => {
  const thisTask = tasks.filter((task) => task.id === taskId);
  const activeTime = {
    minutes: "0",
    seconds: "10",
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
      stop();
      setPomodoroTime(passiveTime);
    } else {
      stop();
      setPomodoroTime(activeTime);
    }
  }, [isActive]);

  const start = () => {
    setStatus(1);
    run();
    setInterv(setInterval(run, 10));
  };

  const stop = () => {
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
      // stop();
    }

    if (updatedMs === -1) {
      updatedS--;
      updatedMs = 100;
    }
    updatedMs--;
    console.log("active", isActive);

    setPomodoroTime({
      minutes: updatedM,
      seconds: updatedS,
      milliseconds: updatedMs,
    });
  };
  const taskComplete = () => {};
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
        <div className="flex flex-col items-center justify-center h-48">
          <p className="text-2xl font-light text-center px-8 z-40">
            {thisTask[0].fields.task}
          </p>
          {isActive ? (
            <div className="soft-glow rounded bg-brand blur-3xl opacity-50 h-24 w-24 absolute top-0"></div>
          ) : (
            <div className="soft-glow rounded bg-done blur-3xl opacity-50 h-24 w-24 absolute top-0"></div>
          )}
        </div>

        <div className="clock font-thin text-7xl sm:text-9xl flex items-center justify-center">
          <span className="minute">{pomodoroTime.minutes}</span>:{" "}
          <span className="sec">{pomodoroTime.seconds}</span>
        </div>
        <div className="flex w-full mt-8">
          <p className="text-sm text-light mx-auto">
            {isActive ? "Active mode" : "Take a rest"}
          </p>
        </div>

        <div className="flex  absolute bottom-24 w-full">
          {status === 2 ? (
            <button
              onClick={() => start()}
              className="rounded-full bg-done font-bold text-white py-2 px-4 align-middle mx-auto hover:opacity-90"
            >
              {isActive ? "Begin active mode" : "Begin break"}
            </button>
          ) : (
            ""
          )}
          {status === 1 ? (
            <button
              onClick={() => stop()}
              className="rounded-full bg-brand font-bold text-white py-2 px-4 align-middle mx-auto hover:opacity-90"
            >
              Pause
            </button>
          ) : (
            " "
          )}
          <button
            // onClick={}
            className="rounded-full bg-grey-200 font-bold text-white py-2 px-4 align-middle mx-auto hover:opacity-90"
          >
            Take a break
          </button>
        </div>
      </div>
    </>
  );
};

export default Clock;
