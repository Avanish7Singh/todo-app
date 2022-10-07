const initialState = {
    userData: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "item_data":
            return {
                userData: [...state.userData, action.payload]
            }

        case "Remove_data":
            const dltData = state.userData.filter((ele, k) => k !== action.payload);
            return {
                userData: dltData
            }

        case "Update_Data":
            const updatedValue = state.userData.map((ele, k) => k == action.item_id ? action.payload : ele);
            return {
                userData: updatedValue
            }

        default:
            return state;
    }
}