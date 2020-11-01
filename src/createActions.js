function createActions(dispatch) {
  return {
    ADD_FEEDING_TIME: () => dispatch({ type: "ADD_FEEDING_TIME" }),
    USER_AUTH: () => dispatch({ type: "USER_AUTH" }),
    GET_USER_FEEDING_TIME: () => dispatch({ type: "GET_USER_FEEDING_TIME" }),
  };
}

export default createActions;
