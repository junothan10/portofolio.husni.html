document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger-menu");
    const navMenu = document.getElementById("nav-menu");
  
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("open");
    });
  
    // Animasi saat scroll
    const sections = document.querySelectorAll(".animate-fade-in");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  
//ini jquery nya//
$(document).ready(function () {
  $("#contact-form").submit(function (event) {
    event.preventDefault(); // Mencegah form untuk dikirimkan tanpa validasi

    // Menghapus class error jika sebelumnya ada
    $("#fullname, #email, #phone, #message").removeClass("error");
    $(".error-message").remove();

    // Mendapatkan nilai dari setiap input
    var fullname = $("#fullname").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("#message").val();

    // Validasi nama lengkap
    if (fullname === "") {
      $("#fullname").addClass("error");
      $("#fullname").after(
        '<div class="error-message">Nama lengkap wajib diisi.</div>'
      );
      return false;
    }

    // Validasi email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
      $("#email").addClass("error");
      $("#email").after('<div class="error-message">Email wajib diisi.</div>');
      return false;
    } else if (!emailPattern.test(email)) {
      $("#email").addClass("error");
      $("#email").after(
        '<div class="error-message">Format email tidak valid.</div>'
      );
      return false;
    }

    // Validasi nomor handphone
    var phonePattern = /^[0-9]{10,15}$/; // Nomor HP harus antara 10-15 digit
    if (phone === "") {
      $("#phone").addClass("error");
      $("#phone").after(
        '<div class="error-message">Nomor handphone wajib diisi.</div>'
      );
      return false;
    } else if (!phonePattern.test(phone)) {
      $("#phone").addClass("error");
      $("#phone").after(
        '<div class="error-message">Nomor handphone tidak valid. Pastikan hanya angka dan panjangnya benar.</div>'
      );
      return false;
    }

    // Validasi pesan
    if (message === "") {
      $("#message").addClass("error");
      $("#message").after(
        '<div class="error-message">Pesan wajib diisi.</div>'
      );
      return false;
    }

    // Jika semua validasi lolos, tampilkan pesan sukses
    alert("Formulir berhasil dikirim!");
    // Di sini Anda bisa menambahkan pengiriman formulir menggunakan AJAX atau metode lainnya
  });
});
