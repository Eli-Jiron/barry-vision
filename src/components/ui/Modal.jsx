const Modal = ({ children, Open, Close, title }) => {
  if (!Open) {
    return null;
  } else {
    return (
      <>
        <div className="fixed inset-0 z-10 overflow-hidden bg-black opacity-60"></div>
        <div
          onClick={Close}
          className="fixed inset-0 z-20 overflow-hidden flex items-center justify-center"
        >
          <div className="bg-white rounded-md shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50">
            <div className="bg-light-green text-white px-4 py-2 flex justify-between">
              <h2 className="text-lg font-semibold">{title}</h2>
            </div>
            <div className="p-4 flex flex-col gap-3">
              {children}
              <button
                className="ring-2 ring-red rounded-sm text-red font-semibold py-1 w-full"
                onClick={Close}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Modal;
