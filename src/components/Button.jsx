import { useNavigate } from "react-router-dom";

const Button = ({ buttonText, buttonWidth, buttonAlign, navigation }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`${navigation}`)}
      className={`${buttonWidth} ${buttonAlign} bg-red-600 font-montserrat px-4 py-2 text-lg text-white cursor-pointer transition duration-200 hover:bg-red-700 shadow-lg font-bold rounded-3xl`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
