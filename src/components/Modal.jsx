const Modal = ({ isOpen, close, children }) => {
  return (
    <div
      className={`${
        isOpen ? "-translate-y-0" : "-translate-y-full"
      } transition-all duration-500 ease-in-out fixed w-screen h-screen top-0 left-0 z-10 flex justify-center items-center backdrop-blur-[2px] `}
    >
      <div className="bg-white rounded-md flex flex-col justify-center items-center p-10 relative shadow-lg">
        <div
          className="absolute right-3 top-3 text-black cursor-pointer font-bold"
          onClick={close}
        >
          X
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
