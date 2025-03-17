import { useNavigate } from "react-router-dom";

const Button = ({ buttonText, buttonWidth, buttonAlign, navigation }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`${navigation}`)}
      className={`${buttonWidth} ${buttonAlign} bg-red-700 font-[Montserrat] px-4 py-2 text-sm text-white cursor-pointer transition-all hover:bg-red-800 shadow-sm shadow-red-600 font-bold rounded-4xl`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
