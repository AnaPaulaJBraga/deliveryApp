const getUserData = () => JSON.parse(localStorage.getItem('userData'));

export default getUserData;
// make sure to only call this AFTER Login
