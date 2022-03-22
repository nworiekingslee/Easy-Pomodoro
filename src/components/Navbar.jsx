import { Link } from "react-router-dom";

function Navbar(props) {
  const createProject = () => {
    props.exit();
  };
  return (
    <div className="flex justify-between items-center p-4 sticky top-0 bg-background">
      {/* <div className="my-1.5 input-group relative flex w-48 sm:w-1/2 items-stretch mb-4 border border-solid border-gray-500 rounded-full">
        <input
          type="search"
          className="flex-auto min-w-0 block px-4 py-2 text-base font-normal text-slate-700 bg-transparent bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className=" inline-block px-6 py-1.5 bg-transparent text-white font-medium text-xs leading-tight flex items-center"
          type="button"
          id="button-addon2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.04 17.28C7.58399 17.28 4.79999 14.496 4.79999 11.04C4.79999 7.584 7.58399 4.8 11.04 4.8C14.496 4.8 17.28 7.584 17.28 11.04C17.28 14.496 14.496 17.28 11.04 17.28ZM11.04 5.76C8.11199 5.76 5.75999 8.112 5.75999 11.04C5.75999 13.968 8.11199 16.32 11.04 16.32C13.968 16.32 16.32 13.968 16.32 11.04C16.32 8.112 13.968 5.76 11.04 5.76Z"
              className="fill-slate-700 stroke-slate-700"
              stroke-width="0.5"
            />
            <path
              d="M15.6874 15.0082L19.9978 19.3186L19.3191 19.9973L15.0087 15.6869L15.6874 15.0082Z"
              className="fill-slate-600 stroke-slate-600"
            />
          </svg>
        </button>
      </div> */}
      <div className="cursor-pointer">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.04 17.28C7.58399 17.28 4.79999 14.496 4.79999 11.04C4.79999 7.584 7.58399 4.8 11.04 4.8C14.496 4.8 17.28 7.584 17.28 11.04C17.28 14.496 14.496 17.28 11.04 17.28ZM11.04 5.76C8.11199 5.76 5.75999 8.112 5.75999 11.04C5.75999 13.968 8.11199 16.32 11.04 16.32C13.968 16.32 16.32 13.968 16.32 11.04C16.32 8.112 13.968 5.76 11.04 5.76Z"
            className="fill-slate-700 stroke-slate-700"
            strokeWidth="0.5"
          />
          <path
            d="M15.6874 15.0082L19.9978 19.3186L19.3191 19.9973L15.0087 15.6869L15.6874 15.0082Z"
            className="fill-slate-600 stroke-slate-600"
          />
        </svg>
      </div>

      {/* navlinks */}
      <div className="flex flex-wrap">
        {/* Add project icon */}
        <Link to="/new-project">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" mr-2  cursor-pointer"
          >
            <path
              d="M15.875 14.125V8H14.125V14.125H8V15.875H14.125V22H15.875V15.875H22V14.125H15.875Z"
              className="fill-slate-600"
            />
          </svg>
        </Link>

        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
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
      </div>
    </div>
  );
}

export default Navbar;
