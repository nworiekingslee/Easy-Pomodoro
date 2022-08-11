const Footer = () => {
  return (
    <div className="z-50 fixed bottom-0 left-0 flex items-center justify-center w-full b-[#151515] bg-grey-100 px-3 py-4 text-grey-200">
      {" "}
      <a
        className="b-[#202022] bg-white p-2 rounded-full flex items-center justify-center"
        href="https://www.kingslee.me"
        rel="noreferrer"
        target="_blank"
      >
        <div className="border h-4 w-4 rounded-full">
          <img
            src="https://avatars.githubusercontent.com/u/55883854?s=400&u=4423d9b8b8c51fc7cb969330c5bb00cd9cac8bc8&v=4"
            className="h-4 w-4 rounded-full"
            alt=""
            style={{ objectFit: "cover" }}
          />
        </div>
        <span className="mx-2 text-xs">Created by Kingslee</span>
      </a>
    </div>
  );
};

export default Footer;
