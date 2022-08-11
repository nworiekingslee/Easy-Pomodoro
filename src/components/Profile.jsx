function Profile({ projectCount, name, picture }) {
  return (
    <div className=" px-4 flex justify-center items-center h-56">
      <div className="flex flex-col items-center ">
        <img
          className="object-cover h-12 w-12 rounded-full"
          src={picture}
          alt={name}
        />
        <p className="pt-2 text-base font-semibold">{name}</p>
        <p className="text-sm text-slate-500 font-light">
          {projectCount} Projects
        </p>
      </div>
    </div>
  );
}

export default Profile;
