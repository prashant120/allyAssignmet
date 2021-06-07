import './ErrorScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ErrorScreen({icon, status}) {
    return (
        <div className="error-screen-container">
            <FontAwesomeIcon className="error-icon" icon={icon}/>
            {status}
        </div>
    );
}

export default ErrorScreen;
