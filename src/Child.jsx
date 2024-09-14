/* eslint-disable react/prop-types */
const ChildComponent = ({ message, setMessage }) => {
  const handleChange = () => {
    setMessage("GoodBye");
  };

  return (
    <div>
      <p className="bg-slate-900 mb-6 h-[200px] w-[300px] rounded-2xl">
        Child received: {message}
      </p>
      <button
        onClick={handleChange}
        className="bg-green-200 h-[50px] border-solid border-2 border-black rounded-2xl "
      >
        Update Message
      </button>
    </div>
  );
};

export default ChildComponent;
