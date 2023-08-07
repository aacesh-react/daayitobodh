
const DeleteModal = ({ closeModal, okButtonHandler, message, btnText }) => {
  return (
    <div className="flex flex-col bg-white md:w-[400px] py-[1rem]">
      <span
        className="self-end pr-[1rem] cursor-pointer text-[1.125rem] "
        onClick={closeModal}
      >
        ✕
      </span>
      <span className="self-center pb-[2rem] text-black">
        {message ? message : "Are you sure?"}{" "}
      </span>
      <div className="flex justify-between px-[1rem] w-full">
        <button className="btn rounded" onClick={closeModal}>
          Cancel
        </button>
        <button className="btn bg-red-700 rounded" onClick={okButtonHandler}>
          {btnText ? btnText : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
