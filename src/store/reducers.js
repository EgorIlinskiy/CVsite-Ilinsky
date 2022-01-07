const initState = {
    theme: '#7266d3'

};


function builderReducers(state = initState, action) {

    switch (action.type) {

        case "ADD_COMPONENT":
            {

                return {...state};
            }
        default:
            return state;

    }
}

export default builderReducers;