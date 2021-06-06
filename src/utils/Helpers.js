
/**
 * Helper method used to transform all the linear data from API by segregating
 * all the key results of specific Objective as a sub list which can be used to
 * list the Objectives and the respective Key results within that particular OKR.
 * @param {Object} data 
 * @returns transformed object
 */
export const dataModeller = function (data) {
    const OKRObjective = [];
    data.forEach(okr => {
        const {parent_objective_id} = okr;
        const index = OKRObjective.findIndex(Objective => {
            return Objective.id === okr.parent_objective_id;
        });

        if (!parent_objective_id.length) {
            okr.keyResult = [];
            OKRObjective.push(okr);
        } else if(index >= 0) {
            OKRObjective[index]?.keyResult.push(okr);
        }
    });

    return OKRObjective;
}



/**
 * This commented code is another approach of having all the data segrregated .
 * Here the logic is to keep the Objectives and the key results in a seperate array
 * and to get the necessery data as and when needed.
 */

// export const dataModeller2 = function (data) {
//     const OKRObjective = [];
//     const OKRKeyResults = {};
//     data.forEach(okr => {
//         const {parent_objective_id} = okr;

//         if (!parent_objective_id.length) {
//             OKRObjective.push(okr);
//         } else {
//             if(OKRKeyResults.hasOwnProperty(parent_objective_id)) {
//                 OKRKeyResults[parent_objective_id] = [];            
//             } 

//             OKRKeyResults[parent_objective_id].push(okr);           
//         }
//     });

//     return [OKRObjective, OKRKeyResults];
// }