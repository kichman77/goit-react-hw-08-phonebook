const getAuth = ({ auth }) => auth.token;
const getUserEmail = ({ auth }) => auth.user.email;
const getUserName = ({ auth }) => auth.user.name;
const getUserError = ({ auth }) => auth.error;

export default { getAuth, getUserEmail, getUserName, getUserError };
