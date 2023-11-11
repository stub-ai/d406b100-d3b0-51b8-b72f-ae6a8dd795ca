import axios from 'axios';

const ResetButton = () => {
  const resetCount = () => {
    axios.post('/api/reset')
      .then(response => console.log(response.data.message))
      .catch(error => console.error(error));
  };

  return (
    <button
      className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
      onClick={resetCount}
    >
      Reset
    </button>
  );
};

export default ResetButton;