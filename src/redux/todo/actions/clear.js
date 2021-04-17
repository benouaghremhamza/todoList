import { CLEAR_TODO } from './constants';

const clear = (id) => ({ type: CLEAR_TODO, payload: id });

export default clear;
