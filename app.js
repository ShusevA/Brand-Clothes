$(document).ready(function () {
    let vot = $(".contaner").width() + 17;
    if (vot <= 700) {
        $('.choice').on('click', function () {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
})