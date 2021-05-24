import { configureStore } from '@reduxjs/toolkit';
import catReducer from './cat/Store/CatBundle';
import { enableMapSet } from 'immer'

enableMapSet()

const store = configureStore({
    reducer: catReducer,
});

export const dispatch = store.dispatch;

export default store;