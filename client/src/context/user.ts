export default function isUser(userCheck: any) {
  if (localStorage.getItem('user')) {
    userCheck.value = true;
    return userCheck;
  }
  userCheck.value = false;
  return userCheck;
}
