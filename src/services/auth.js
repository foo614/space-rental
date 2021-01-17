import jwt from 'jsonwebtoken';

export function UserIsValid(token) {
  console.log(`the token is ${token.user}`);
  if (token.isAuthenticated) {
    const decodedToken = jwt.decode(token.user);
    const dateNow = new Date();
    if (decodedToken.exp > dateNow.getTime() / 1000) return true;
    return false;
  }
  return false;
}
