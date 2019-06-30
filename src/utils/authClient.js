import client from './apiClient';

const localStorageKey = '__bookshelf_token__';

const handleUserResponse = ({ user: { token, ...user } }) => {
  window.localStorage.setItem(localStorageKey, token);
  return user;
};

const login = ({ username, password }) => client('login', { body: { username, password } }).then(handleUserResponse);

const register = ({ username, password }) => client('register', { body: { username, password } }).then(handleUserResponse);

const logout = () => {
  window.localStorage.removeItem(localStorageKey);
  return Promise.resolve();
};

const getToken = () => window.localStorage.getItem(localStorageKey);

const getUser = () => {
  const token = getToken();
  if (!token) {
    return Promise.resolve(null);
  }
  return client('me').catch((error) => {
    logout();
    return Promise.reject(error);
  });
};

export {
  login,
  register,
  logout,
  getToken,
  getUser,
};
