function reducer(state, action) {
  console.log("Action received:", action);

  switch (action.type) {
    case "incremented_count":
      return { count: state.count + 1 };

    case "decremented_count":
      return { count: state.count - 1 };

    case "set_count":
      return { count: action.value };

    default:
      throw new Error("Unknown action: " + action.type);
  }
}

export default reducer;
