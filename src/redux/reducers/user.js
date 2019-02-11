const initialState = { id: "", name: "", password: "" };

const user = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_START": {
      return { ...initialState };
    }
    case "FETCH_USER_SUCCESS": {
      return { ...action.data };
    }
    case "FETCH_USER_ERROR": {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
};

export default user;
