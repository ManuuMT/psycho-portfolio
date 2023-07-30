const Modal = ({ close, children }) => {
  return (
    <div className="fixed w-screen h-screen top-0 left-0 z-10 flex justify-center items-center backdrop-blur-[2px]">
      <div className="bg-white rounded-md flex flex-col justify-center items-center p-10 relative">
        <div
          className="absolute right-3 top-3 text-black cursor-pointer"
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
