
const initialState = {
    multiple_items : [],
    single_item : {}
};
export const postReducer = (state = initialState, action) => {
         switch (action.type) {
           case "FETCH_POST":
             return { ...state, multiple_items: action.payload };
           case "NEW_POST":
             console.log("action.payload=> ", action.payload);
             return { ...state, single_item: action.payload };
           default:
             return state;
         }
       };