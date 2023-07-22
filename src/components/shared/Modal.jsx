const Modal = ({ showModal, children }) => {
  console.log("showModal:", showModal);
  return (
    <div
      className={`fixed top-0 left-0   h-screen w-full flex justify-center items-center
        ${showModal ? "z-10 bg-[rgba(0,0,0,0.6)]" : "-z-20"} 
      `}
    >
      {/* content */}
      <div> {children} </div>
    </div>
  );
};

export default Modal;
