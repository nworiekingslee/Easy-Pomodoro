import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";

function Profile({ projectCount }) {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  );

  const { user } = useAuth0();
  if (user) console.log(user);
  return (
    <div className=" px-4 flex justify-center items-center h-56">
      {user ? (
        <div className="flex flex-col items-center ">
          <img
            className="object-cover h-12 w-12 rounded-full"
            src={user.picture}
            alt={user.name}
          />
          <p className="pt-2 text-base text-lg">{user.name}</p>
          <p className="text-sm text-slate-500 font-light">
            {projectCount} Projects
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center ">
          <img
            className="object-cover h-12 w-12 rounded-full"
            src={image}
            alt="no user"
          />
          <p className="pt-2 text-base text-lg">Hi Kingslee</p>
          <p className="text-sm text-slate-500 font-light">
            {projectCount} Projects
          </p>
        </div>
      )}
    </div>
  );
}

export default Profile;
