
window.onload = ()=>{
	password = document.getElementById("password");
	confirm_password = document.getElementById("confirm_password");

	password.onchange = validatePassword;
	confirm_password.onkeyup = validatePassword;

	setFormTitles();
}


$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link');
  
$menulink.click(function() {
  $menulink.toggleClass('active');
  $menu.toggleClass('active');
  return false;
});});

