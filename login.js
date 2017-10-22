document.addEventListener("DOMContentLoaded",function() {
  document.getElementById('registersubmit').onclick = function() {
    var username = document.getElementById('regUsername').value;
    var email = document.getElementById('regEmail').value;
    var password = document.getElementById('regpassword').value;
    var password1 = document.getElementById('regpasswordagain').value;
    var index = localStorage.length + 1;

    if (password != password1) {
      window.alert("Two input password must be consistent!");
    }
    if (username.length == 0) {
      window.alert("Username can not be empty!");
    }
    if (email.length == 0) {
      window.alert("Email can not be empty!");
    }
    if (password.length == 0) {
      window.alert("Password can not be empty!");
    }
    
    if ((username.length != 0) && (email.length != 0) && (password1.length != 0) && (password1 === password1)) {
      //set storage
      localStorage.setItem(index,username);
      localStorage.setItem(username,email);
      localStorage.setItem(username,password);

      //Get storage in order to display to user
      document.getElementById("response").innerHTML = "<p>Congrats " + localStorage.getItem(index) + "! Successfully registered<p>";

    }

  };

  document.getElementById("signinbutton").onclick = function() {
    var username = document.getElementById('loginusername').value;
    var password = document.getElementById('loginpassword').value;
    var storedpassword = localStorage.getItem(username);

    if (password == storedpassword) {
      document.getElementById("response").innerHTML = "<p>Login Successfully!</p>";
    }
    if (password != storedpassword) {
      window.alert("Wrong password!");
    }
  }
});
