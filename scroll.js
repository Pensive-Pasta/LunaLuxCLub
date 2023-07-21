document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    let scrollPosition = document.querySelector(
      this.getAttribute("href")
    ).offsetTop;

    // Offset by 10% of the viewport height
    let offset = window.innerHeight * 0.28;

    window.scrollTo({
      top: scrollPosition - offset,
      behavior: "smooth",
    });
  });
});
