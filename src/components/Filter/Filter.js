import './Filter.css';
import PropTypes from 'prop-types';

function Filter({filterList, title, applyFilter}) {
    return (
        <div className="filter-container">
            <h4>{title}</h4>
            <div className="filter-list">
            {
            filterList.length && filterList.map((filterItem, index) => {
                return <div className={`filter-tag ${filterItem?.isApplied ? "filter-applied" : ""}`} key={filterItem.label+index} onClick={() => {applyFilter(index)}}>
                            {filterItem.label}
                        </div>})
            }
            </div>
            
        </div>
        
    )
}

Filter.propTypes = {
    filterList: PropTypes.array.isRequired, 
    title: PropTypes.string.isRequired, 
    applyFilter: PropTypes.func.isRequired
}
export default Filter;
