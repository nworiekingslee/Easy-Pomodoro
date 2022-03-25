import { Link } from "react-router-dom";

function Task({ task, projectId }) {
  const contextmenu = () => {
    console.log("Hello word");
  };
  return (
    <>
      {task.fields.isDone ? (
        <Link
          to={`/${projectId}/${task.id}`}
          onContextMenu={() => contextmenu()}
        >
          <div className="p-4 w-100 bg-background mx-4 relative mb-2 rounded-lg border hover:shadow  border-grey-100 cursor-pointer">
            <p className="mr-8 text-grey-200 line-through">
              {task.fields.task}
            </p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-5 right-4"
            >
              <path
                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM11.984 20H12C16.4167 19.9956 19.9942 16.4127 19.992 11.996C19.9898 7.57929 16.4087 4 11.992 4C7.57528 4 3.99421 7.57929 3.992 11.996C3.98979 16.4127 7.56729 19.9956 11.984 20ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"
                className="fill-grey-200"
              />
            </svg>
          </div>
        </Link>
      ) : (
        <Link to={`/${projectId}/${task.id}`}>
          <div className="p-4 w-100 bg-white mx-4 relative mb-2 rounded-lg border hover:shadow border-grey-100 cursor-pointer">
            <p className="mr-8">{task.fields.task}</p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-5 right-4"
            >
              <path
                d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C19.9939 15.5203 15.5203 19.9939 10 20ZM9.984 18H10C14.4167 17.9956 17.9942 14.4127 17.992 9.996C17.9898 5.57929 14.4087 2 9.992 2C5.57528 2 1.99421 5.57929 1.992 9.996C1.98979 14.4127 5.56729 17.9956 9.984 18Z"
                className="fill-grey-200"
              />
            </svg>
          </div>
        </Link>
      )}
    </>
  );
}

export default Task;
