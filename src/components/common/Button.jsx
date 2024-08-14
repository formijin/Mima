import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ variant = 'fill', text, link }) => {
    return (
        <a 
            href= {link}
            className={`btn ${variant}`}
        >
            {text}
        </a>
    );
};
Button.propTypes = {
    variant: PropTypes.oneOf(['fill', 'outline', 'text']),
    text: PropTypes.string.isRequired,
    link: PropTypes.string
};

export default Button;
