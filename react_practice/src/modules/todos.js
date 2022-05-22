// todos Reducer 입니다.
/*
  Action type
*/
const CHANGE_INPUT = "todos/CHANGE_INPUT"; // input 값을 변경함
const INSERT = "todos/INSERT"; // 새로운 todo를 등록함
const TOGGLE = "todos/TOGGLE"; // todo를 체크/체크 해제함
const REMOVE = "todos/REMOVE"; // todo를 제거함
/*
  Action 생성 함수
*/
export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});
let id = 3; // insert가 호출될 때마다 1씩 더해진다.
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});
export const toggle = (id) => ({
  type: TOGGLE,
  id,
});
export const remove = (id) => ({
  type: REMOVE,
  id,
});
/*
  Initial State
*/
const initialState = {
  // 객체에 한 개 이상의 값이 들어가므로 불변성을 유지해 주어야 한다.
  input: "",
  todos: [
    { id: 1, text: "리덕스 기초 배우기", done: true },
    { id: 2, text: "리액트와 리덕스 사용하기", done: false },
  ],
};
/*
  Reducer
*/
function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state, // 리듀서에서는 state의 불변성을 유지해야한다.
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo,
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default todos;
