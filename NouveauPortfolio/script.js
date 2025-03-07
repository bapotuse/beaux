
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";
    
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    // Sélectionne toutes les images des sections Dune et Kalune
    document.querySelectorAll(".section1Dune img, .section2Dune img, .section3Dune img, .section4Dune img, .section5Dune img, .section6Dune img, .section7Dune img, .section1Kalune img, .section2Kalune img, .section3Kalune img, .section4Kalune img, .sujetContenu img").forEach(img => {
        img.addEventListener("click", function () {
            modalImage.src = this.src;
            modal.classList.add("show");
        });
    });

    // Fermer le modal en cliquant en dehors de l’image
    modal.addEventListener("click", function (e) {
        if (e.target !== modalImage) {
            modal.classList.remove("show");
        }
    });
});



