const Alert = ({ message }) => {
  return (
    <div className="bg-green-500 text-white mt-4 p-4 rounded shadow-lg transition-opacity duration-500 ease-in-out fixed top-0 left-0 w-full z-50 ">
      {message}
    </div>
  );
};

export default Alert;
