import { TOGGLE_TODO } from './constants';

const toggle = (id) => ({ type: TOGGLE_TODO, payload: id });

export default toggle;
