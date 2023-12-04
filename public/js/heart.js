var svgs = document.querySelectorAll(".bi-heart");
svgs.forEach((svg) => {
  svg.addEventListener("click", () => {
    svg.innerHTML = '<path fill-rule="evenodd" fill="white" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />';
  });
});
