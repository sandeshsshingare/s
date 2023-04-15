function toggle() {
  var toggle_btn = document.getElementById("droplist");
  //toggle_btn.style.display = "none";
  //alert(toggle_btn.style.display);
  if (toggle_btn.style.display === "none") {
    toggle_btn.style.display = "none";
  } else {
    toggle_btn.style.display = "block";
  }
}
