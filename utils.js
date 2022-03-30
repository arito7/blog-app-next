const AUTH_KEY = 'authdata';

export const isAuth = () => {
  return !!localStorage.getItem(AUTH_KEY);
};

export const logout = () => {
  localStorage.removeItem(AUTH_KEY);
};

/**
 * Store authentication data into localstorage
 * @param {JSON} authData - Should be in format {expiresIn: <duration>, token: <token>}
 */
export const login = (authData) => {
  localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
};

export const getAuthData = () => {
  return JSON.parse(localStorage.getItem(AUTH_KEY));
};
