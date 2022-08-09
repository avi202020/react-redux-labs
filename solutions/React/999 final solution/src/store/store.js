//import { applyMiddleware } from 'redux';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { reducer } from './reducers';
import { middleware } from './middleware';

const initialState = {
  cart: { seats: [], food: [] },
  currentDate: new Date().setHours(0, 0, 0, 0),
  films: [],
  reservations: [],
  showings: [],
  theaters: [],
  user: {},
};

const storeEnhancer = applyMiddleware(...middleware);

export const store = configureStore({ reducer: reducer }, initialState, storeEnhancer);