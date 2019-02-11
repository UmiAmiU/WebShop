export const fetchUsersStart = () => ({
  type: "FETCH_USERS_START"
});

export const fetchUsersSuccess = data => ({
  data,
  type: "FETCH_USERS_SUCCESS"
});

export const fetchUsersError = error => ({
  error,
  type: "FETCH_USERS_ERROR"
});

export const fetchUserStart = () => ({
  type: "FETCH_USER_START"
});

export const fetchUserSuccess = () => ({
  type: "FETCH_USER_SUCCESS"
});

export const fetchUserError = error => ({
  error,
  type: "FETCH_USER_ERROR"
});

export const auth = (id, name) => ({
  id,
  name,
  type: "AUTHENTICATION"
});
