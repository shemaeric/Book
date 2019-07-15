import { ADD_PRODUCT} from '../actions/types/product';

const initialState = {
    books: [],
    newBook: null,
    error: null,
    book: null
  };

const addBooks = (state = initialState, action) => {
  switch(action.type){
    case ADD_PRODUCT:
      return {
        ...state,
        newBook: action.payload
      };
    default:
      return state;
  }
}

export { addBooks as default };