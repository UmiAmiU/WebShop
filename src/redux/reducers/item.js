const item = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM_START": {
      return [];
    }
    case "ADD_ITEM_SUCCESS": {
      return [];
    }
    case "ADD_ITEM_ERROR": {
      return [];
    }
    default: {
      return state;
    }
  }
};

export default item;
