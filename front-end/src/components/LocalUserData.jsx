export default getUserData = () => JSON.parse(localStorage.getItem('userData'));

// make sure to only call this AFTER Login
