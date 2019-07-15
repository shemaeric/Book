import { ADD_PRODUCT, RODUCT_FAIL } from './types/product';

export const addBook = data => async (dispatch) => {
    try {
      console.log(data.title)
      const token = localStorage.token;
      const AddBook = await fetch('https://tugure.herokuapp.com/api/v1/book', {
        method: 'POST',
        headers: {
          'content-type' : 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({title: data.title, info:data.info, image: data.image, price: data.price})
      })
      return await dispatch({
        type: ADD_PRODUCT,
        payload: AddBook.book
      })
    }
    catch(err) {
      console.log(err);
    }
}