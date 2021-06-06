import { useState } from "react";
import './ObjectiveList.css';
import Card from "../Card/Card";
import { STATUS } from "../../utils/constant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faTasks } from '@fortawesome/free-solid-svg-icons';

function ObjectiveList({ objective: { title, keyResult }, index }) {
    const [showKeyResult, setShowKeyResult] = useState(true);
    const [arrowIcon, setArrowIcon] = useState(faAngleDown);
    const [okrTitleClass, setOkrTitleClass] = useState("objective-title");

    /**
     * Handler to Toggle the OKR card state to open or close listing 
     * all the key results and change in the Arrow icon shown.
     */
    const handleClick = () => {
        setShowKeyResult(prev => {
            return !prev;
        });
        setArrowIcon(prev => {
            if (prev === faAngleDown) {
                setOkrTitleClass("");
                return faAngleUp;
            } else if (prev === faAngleUp) {
                setOkrTitleClass("objective-title");
                return faAngleDown;
            }
        });

    }
    
    return (
        <Card customClass="objctive-card " OkrTag="OKR" OkrTile={okrTitleClass} arrowIcon={arrowIcon} title={`${index}. ${title}`} handleClick={handleClick}>
            {
                showKeyResult && (keyResult.length ? keyResult.map(({ id, title }) => {
                    return <div className="key-result-list" key={id}>
                        <Card customClass="key-result-card" title={title} />
                    </div>;
                }) : <div className="no-key-results">
                        <FontAwesomeIcon className="no-res-icon" icon={faTasks}/>
                        {STATUS.NO_KEY_RESULTS}
                    </div>)
            }
        </Card>
    );
}

export default ObjectiveList;
