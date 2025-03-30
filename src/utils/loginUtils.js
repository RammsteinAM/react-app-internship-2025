import bcrypt from 'bcryptjs';
import { LOGIN_LOCAL_STORAGE_KEY, userCredentials } from '../constants/login';

export function isPasswordCorrect(enteredPassword, dbPasswordHash) {
  return bcrypt.compareSync(enteredPassword, dbPasswordHash);
}

export function checkLogin() {
  const loggedInUserId = window.localStorage.getItem(LOGIN_LOCAL_STORAGE_KEY);

  const user = userCredentials.find((user) => user.id === loggedInUserId);

  return user ? { username: user.username, name: user.name } : null;
}

export function signOut() {
  window.localStorage.removeItem(LOGIN_LOCAL_STORAGE_KEY);
}
