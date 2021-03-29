const getAuth = (state) => state.auth.token;
const getUserEmail = (state) => state.auth.user.email;
const getUserError = (state) => state.auth.error;

export default { getAuth, getUserEmail, getUserError };
