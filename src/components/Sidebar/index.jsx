const Sidebar = () => {
  return (
    <div className="relative bg-white">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="h-screen w-72">
          <nav className="mt-10 px-6 ">
            <a
              className="hover:bg-ice-blue flex items-center p-2 my-6 transition-colors rounded-lg"
              href="#"
            >
              <span className="mx-4 text-lg font-normal">Hola</span>
              <span className="flex-grow text-right"></span>
            </a>
            <a
              className="hover:bg-ice-blue flex items-center p-2 my-6 transition-colors rounded-lg"
              href="#"
            >
              <span className="mx-4 text-lg font-normal">Element</span>
              <span className="flex-grow text-right"></span>
            </a>
            <a
              className="hover:bg-ice-blue flex items-center p-2 my-6 transition-colors rounded-lg"
              href="#"
            >
              <span className="mx-4 text-lg font-normal">Mundo</span>
              <span className="flex-grow text-right"></span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
