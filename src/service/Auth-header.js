export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    console.log(user);
    if (user && user.token ) {
      console.log("True true")
      return {"Authorization" : `Bearer ${user.token}`};
    } else {
      return {};
    } 
  }