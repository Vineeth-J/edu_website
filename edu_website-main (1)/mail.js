const firebaseConfig = 
{
    apiKey: "AIzaSyB1hdDqe4Ij9npC_kf_O99-LvyUwWPjfgY",
    authDomain: "contactform-9b76f.firebaseapp.com",
    databaseURL: "https://contactform-9b76f-default-rtdb.firebaseio.com",
    projectId: "contactform-9b76f",
    storageBucket: "contactform-9b76f.appspot.com",
    messagingSenderId: "806279454863",
    appId: "1:806279454863:web:d716d35e073220574810fa"
  };


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var phno = getElementVal("phno");
  var msgContent = getElementVal("msgContent");



  saveMessages(name, emailid, phno, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, phno, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    phoneno:phno,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
