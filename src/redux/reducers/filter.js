const initialState = {
    filter: ""
};

const FilterReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'CHANGEFILTER':
            return { filter: payload };

        default:
            return state;
    };
};

export default FilterReducer;