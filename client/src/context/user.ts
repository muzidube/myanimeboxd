export default function isUser(user: any) {
  if (localStorage.getItem('userId')) {
    user.value = true;
    return user;
  }
  user.value = false;
  return user;
}
