import './Filter.css';

function Filter({filterList, title, applyFilter}) {
    return (
        <div>
            <h4>{title}</h4>
            <div className="filter-container">
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
export default Filter;
