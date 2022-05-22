// counter Reducer 입니다.
/*
  Action type
*/
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
/*
  Action 생성 함수
*/
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
/*
  Initial State
*/
const initialState = {
  number: 0,
};
/*
  Reducer
*/
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
