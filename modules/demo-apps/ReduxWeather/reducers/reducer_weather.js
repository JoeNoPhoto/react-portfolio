import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER :
      // NEVER NEVER NEVER MANIPULATE STATE IN REDUX
      // ALWAYS RETURN A NEW INSTANCE OF STATE. .CONCAT will do that...
      // return state.concat([ action.payload.data ]);

      // THE ES6 WAY WILL DO IT BETTER
      return [action.payload.data, ...state];
  }
  return state;
}
