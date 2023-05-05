const cvImage = document.querySelector(".cv-image");
cvImage.addEventListener("mouseover", () => {
    cvImage.style.opacity = "0.7";
});
cvImage.addEventListener("mouseout", () => {
    cvImage.style.opacity = "1";
});