// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple scroll animation (fade in)
function reveal() {
    var reveals = document.querySelectorAll(".about, .projects, .contact");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

 // Модальное окно
 function openModal(e, title, desc, imgSrc, downloadUrl, viewUrl) {
    e.preventDefault();

    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalDesc").textContent = desc;
    document.getElementById("modalImage").src = imgSrc;
    document.getElementById("downloadLink").href = downloadUrl;
    document.getElementById("viewImageLink").href = viewUrl;

    // Устанавливаем иконку (можно менять по проекту)
    document.querySelector(".modal-icon").innerHTML = "🛠️";

    document.getElementById("projectModal").style.display = "block";
    document.body.style.overflow = "hidden"; // запрещаем скролл
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
    document.body.style.overflow = "auto"; // возвращаем скролл
}

// Закрытие при клике вне окна
window.onclick = function (event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
        closeModal();
    }
};

 // Конец модального окна
  window.addEventListener("scroll", reveal);

  // Initial call to reveal to show elements that are already in view on page load
  reveal();