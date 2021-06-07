import './ErrorScreen.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ErrorScreen({icon, status}) {
    return (
        <div className="error-screen-container">
            <FontAwesomeIcon className="error-icon" icon={icon}/>
            {status}
        </div>
    );
}

ErrorScreen.propTypes = {
    icon: PropTypes.object.isRequired,
    status: PropTypes.string.isRequired
};

export default ErrorScreen;
