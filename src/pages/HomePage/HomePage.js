import './HomePage.css';
import { Fragment, useEffect, useState } from "react";
import OKRServices from "../../utils/services/OKRService";
import ObjectiveList from "../../components/ObjectiveList/ObjectiveList";
import Filter from "../../components/Filter/Filter";
import ErrorScreen from "../../components/ErrorScreen/ErrorScreen";
import { FILTER_OPTIONS, FILTER_TITLE, STATUS } from "../../utils/constant";
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { dataModeller } from "../../utils/Helpers";

function HomePage() {
    const [okrList, setOkrList] = useState([]);
    const [filteredOkrList, setFilteredOkrList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [filteOptions, setFilterOptions] = useState(FILTER_OPTIONS);

    /**
     * method used to filter the data as per catogery filter applied.
     * @param {Number} index 
     */
    const applyFilter = function applyFilter(index) {
        const afterFilter = [...filteOptions];
        // Toggle the applied value on click of tag.
        afterFilter[index].isApplied = !afterFilter[index].isApplied;

        // Lists out all the catogeries which are been applied as filter.
        let filters = afterFilter.reduce((acc, item) => {
            if (item.isApplied) {
                return [...acc, ...[item.label]];
            }
            return acc;
        }, []);

        let filteredData = filters.length ?  okrList.filter(okr => { return filters.includes(okr.category) }): [...okrList];
        setFilterOptions(afterFilter);
        setFilteredOkrList(filteredData);

    }

    /**
     * Life cycle componentdidMount implementaiton in Hooks 
     * Inital API call and fetch the entire list of data.
     */
    useEffect(() => {
        try {

            /**
             * this is a self invoked function to make the API call.
             */
            (async function () {
                const content = await OKRServices();
                const list = dataModeller(content);
                setOkrList(list);
                setFilteredOkrList(list);
            })();
        } catch (e) {
            console.log("error", e);
        } finally {
            setLoading(false);
        }

    }, []);

    return (
        <div className="home-page-container">
            {
                isLoading ? <div className="loader">{STATUS.LOADING}</div> :
                    <Fragment>
                        <Filter title={FILTER_TITLE} filterList={filteOptions} applyFilter={applyFilter} />
                        {
                            filteredOkrList.length ? filteredOkrList.map((objective, index) => {
                                return <ObjectiveList className="objective-list" index={index + 1} key={objective.id} objective={objective} />
                            }): <ErrorScreen icon={faTasks} status={STATUS.NO_OBJECTIVES}/>
                        }
                    </Fragment>
            }
        </div>
    );
}

export default HomePage;
