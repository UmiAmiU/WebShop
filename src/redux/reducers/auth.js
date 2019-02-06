const auth = (state = { id: "", name: "" }, action) => {
  switch (action.type) {
    case "AUTHENTICATION": {
      return { id: action.id, name: action.name };
    }
    default: {
      return state;
    }
  }
};

export default auth;
