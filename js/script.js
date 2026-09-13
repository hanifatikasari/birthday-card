// ===============================
// AMBIL ELEMEN HTML
// ===============================

const button = document.getElementById("openInvitation");

const invitation = document.getElementById("invitation");

const cover = document.querySelector(".cover");

const backButton = document.getElementById("backButton");

// ===============================
// AMBIL NAMA DARI URL
// ===============================

const params = new URLSearchParams(window.location.search);

const guestName = params.get("to");

// ===============================
// GANTI NAMA PENERIMA
// ===============================

if (guestName) {
  document.getElementById("guestName").textContent = guestName;
}
// ===============================
// BUKA SURAT
// ===============================
button.addEventListener("click", function () {
  invitation.style.display = "block";
  cover.style.display = "none";
  startScrollAnimation();
});

// ===============================
// KEMBALI KE COVER
// ===============================

backButton.addEventListener("click", function () {
  invitation.style.display = "none";
  cover.style.display = "flex";
  window.scrollTo(0, 0);
  // Reset animation
  document.querySelectorAll(".animate-section").forEach(function (section) {
    section.classList.remove("show");
  });
});

// ===============================
// SCROLL ANIMATION
// ===============================

function startScrollAnimation() {
  const animatedSections = document.querySelectorAll(".animate-section");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },

    {
      threshold: 0.2,
    },
  );

  animatedSections.forEach(function (section) {
    observer.observe(section);
  });
}
