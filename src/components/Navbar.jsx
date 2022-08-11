import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ projects, updateUserProjects }) => {
  const [menu, setMenu] = useState(false);
  const [isLogout, setLogout] = useState(false);
  const [userProjects, setUserProjects] = useState(projects);
  const { logout } = useAuth0();

  const handleLogout = () => {
    setMenu(!menu);
    logout({ returnTo: window.location.origin });
  };

  const onChange = (e) => {
    updateUserProjects(
      userProjects.filter((p) =>
        p.fields.projectTitle
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="sticky top-0 bg-red-100 z-50">
      <div className="flex justify-between items-center p-4 bg-background">
        <div className="cursor-pointer pr-3">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
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
            </span>
            <input
              className="placeholder:italic w-full placeholder:text-slate-400 block bg-white border border-grey-100 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-grey-200 sm:text-sm"
              placeholder="Search projects..."
              type="text"
              name="search"
              onChange={onChange}
            />
          </label>
        </div>
        {/* navlinks */}
        <div className="flex">
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
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            onClick={() => setMenu((menu) => !menu)}
          >
            <path
              d="M21 18H12V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z"
              className="fill-slate-600"
            />
          </svg>
        </div>
      </div>
      {menu ? (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000088] flex items-start justify-center shadow-2xl border">
          <div className="w-full z-40 sm:w-40 pb-4 mt-40 mx-5 bg-background rounded-xl ">
            <div
              className="p-3 float-right mx-2 my-2 rounded-md cursor-pointer"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              {" "}
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
            {!isLogout ? (
              <button
                onClick={() => setLogout(!isLogout)}
                className="text-left w-full py-3 px-4 hover:bg-grey-100 border border-1 border-grey-100"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="text-left text-red-600 w-full py-3 px-4 hover:bg-red-50 border border-1 border-grey-100"
              >
                Are you sure you want to logout?
              </button>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
