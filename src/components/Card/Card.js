import './Card.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Card({ handleClick, title, customClass, OkrTile, arrowIcon, OkrTag, children }) {
    return (
        <div className={"card-container " + customClass}>
            {arrowIcon && <div className="link-line"></div>}
            <section className={"title-holder " + OkrTile} onClick={handleClick}>
                <div className="title-text">
                    <span className="title-tag">{OkrTag}</span>
                    <h4>{title}</h4>
                </div>
                {arrowIcon && <FontAwesomeIcon className="icon-arrow" icon={arrowIcon} size="lg" />}
            </section>
            {children}
        </div>
    );
}

Card.propTypes = {
    handleClick: PropTypes.func,
    title: PropTypes.string.isRequired, 
    customClass: PropTypes.string, 
    OkrTile: PropTypes.string, 
    arrowIcon: PropTypes.object, 
    OkrTag: PropTypes.string, 
    children: PropTypes.array || PropTypes.object
};

export default Card;
