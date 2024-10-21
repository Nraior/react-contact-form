import Heading from "../heading/index";
import Text from "../text/index";
import "./index.css";

/**
 * Standard button.
 * @param {string} icon - The name of the icon to be displayed. Refer to the "map" object in the "Icon" component.
 * @param {string} heading - The heading of the feature.
 * @param {string} text - Button text.
 * @returns {JSX.Element} - The rendered Feature component.
 */
const Button = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
