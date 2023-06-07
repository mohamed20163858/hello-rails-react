import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    greeting: ''
  };
const GET = 'hello-rails-react/app//javascript/redux/greeting/GET';

export const setGreeting = (greeting) => ({
  type: 'SET_GREETING',
  payload: greeting,

});

export const fetchGreetingMessage = () => {
    return dispatch => {
      fetch('api/v1/message/random_greeting')
        .then(response => response.json())
        .then(data => dispatch(setGreeting(data.greeting)));
    };
  };

const greetingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_GREETING':
        return {
          ...state,
          greeting: action.payload
        };
      default:
        return state;
    }
  };
export default greetingReducer;
