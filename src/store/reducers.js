const initState = {
    dark: false,
    theme: '#7266d3'

};


function builderReducers(state = initState, action) {

    switch (action.type) {
        case "SET_RED":
            {
                return {...state, theme: '#ff5050' };
            }
        case "SET_BLUE":
            {
                return {...state, theme: '#3366ff' };
            }
        case "SET_GREEN":
            {
                return {...state, theme: '#00adb5' };
            }
        case "SET_PURPLE":
            {
                return {...state, theme: '#7266d3' };
            }
        case "SET_MODE":
            {
                return {...state, dark: !state.dark };
            }
        default:
            return state;

    }
}

export default builderReducers;