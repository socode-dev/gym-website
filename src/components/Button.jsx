import { useNavigate } from "react-router-dom";

const Button = ({ buttonText, buttonWidth, buttonAlign, navigation }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`${navigation}`)}
      className={`${buttonWidth} ${buttonAlign} bg-red-700 font-[Montserrat] px-4 py-2 text-sm text-white cursor-pointer transition-all hover:bg-red-800 font-bold rounded-sm`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
