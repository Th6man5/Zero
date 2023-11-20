function mobileSidebar() {
  document.getElementById("sidebar").style.display = "block";
}

function mobileSidebarClose() {
  document.getElementById("sidebar").style.display = "none";
}

//ganti size
function handleResize() {
  var windowWidth = window.innerWidth;

  if (windowWidth >= 640) {
    document.getElementById("sidebar").style.display = "block";
  } else {
    document.getElementById("sidebar").style.display = "none";
  }
}

window.addEventListener("resize", handleResize);

handleResize();
