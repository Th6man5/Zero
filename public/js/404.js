let originalHTML = document.body.innerHTML;

window.addEventListener("resize", function () {
  showErrorPage();
});

function showErrorPage() {
  if (window.innerWidth < 900 || window.innerHeight < 400) {
    document.body.innerHTML = `
                    <div class="error-page text-center ml-auto mr text-6xl">Site's not responsive</div>
                    <br>
                    <div class="error-page text-center ml-auto mr text-6xl">check back!</div>
                `;
  } else {
    document.body.innerHTML = originalHTML;
  }
}

showErrorPage();
