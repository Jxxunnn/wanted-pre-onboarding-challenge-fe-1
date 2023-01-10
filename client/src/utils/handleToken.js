const getToken = () => localStorage.getItem("token");
const setToken = (token) => localStorage.setItem("token", token);
const hasToken = () => !!localStorage.token;

export { getToken, setToken, hasToken };
