import axios from 'axios'

const registration = async (userData) => {
    const res = await axios.post('http://localhost:5000/api/users/registration', userData);
    return res.data;
};

const login = async (userData) => {
   const res = await axios.post('http://localhost:5000/api/users/login', userData);
   localStorage.setItem('user', JSON.stringify(res.data));
   return res.data;
}

const logout = async () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userInfo');
}

export const authService = {
    registration,
    login,
    logout
};