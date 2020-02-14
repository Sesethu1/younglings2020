var firebaseConfig = {
    apiKey: "AIzaSyCUX2NkUNPgAgexnwCRn3WUg4LNZmzmMHg",
    authDomain: "contact-form-e01ae.firebaseapp.com",
    databaseURL: "https://contact-form-e01ae.firebaseio.com",
    projectId: "contact-form-e01ae",
    storageBucket: "contact-form-e01ae.appspot.com",
    messagingSenderId: "381661788765",
    appId: "1:381661788765:web:bbe52c3e52c068c425abb4",
    measurementId: "G-QR1KZZ97BQ"
  };
  firebase.initializeApp(firebaseConfig);
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contact-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, message);
  
  
    // Clear form
    document.getElementById('contact-form').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
  }