var google_provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().onAuthStateChanged(user => {
  if (!!user){
    alert(`${user.displayName || user.email}`);
  }
});

$("#login").click(()=>{
  firebase.auth().signInWithRedirect(google_provider);
});

