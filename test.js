$('document').ready(function() {

  let items = document.getElementsByClassName("alert");
  for (var i = 0; i < items.length; i++) {
    items[i].style.visibility='hidden';
  }
  
  document.getElementById('passwort_login').onchange = function() {
    alert('changed');
  }

})
