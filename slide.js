document.addEventListener('DOMContentLoaded', function(){
  var nut = document.querySelectorAll(".chuyenslide ul li"); // tra ve mang nut
  var slides = document.querySelectorAll(".cacslide ul li"); // => list -> for de duyet

  // Auto Slides
  var thoigian = setInterval(function () {  autoSlide()  }, 5000);


  // Bat su kien click tung nut
  for (var i = 0; i < nut.length; i++) {
    nut[i].addEventListener("click", function () {

      // huy tu chuyen dong  ;  Xoa auto Slides
      clearInterval(thoigian);

      // bo tat ca mau den di
      for (var i = 0; i < nut.length; i++) {
        nut[i].classList.remove("kichhoat");
      }
      this.classList.add("kichhoat");

      // Tinh vi tri
      var nutkichhoat = this;
      var vtnut = 0;
      for (vtnut = 0; (nutkichhoat = nutkichhoat.previousElementSibling); vtnut++ ) 
      {
        // ham tinh vi tri
        // het vong lap nay thi bien i = so thu tu
        // console.log("vi tri cua phan tu co class la kich hoat la = " + vtnut)
      }
      // B1: cho tat ca slide an di  = cach remove  class active
      for (var i = 0; i < slides.length; i++) {
          slides[i].classList.remove("active");
          slides[vtnut].classList.add("active");
      }
    });
  }


  function autoSlide()
  {
    //B1 : Xem slide nào đang hiển thị
    var vitriSlide = 0; // Tinh vi tri
    var sildehientai = document.querySelector(".cacslide ul li.active");

    for (vitriSlide = 0; (sildehientai = sildehientai.previousElementSibling); vitriSlide++) {}
    console.log("Vi tri cua nut hien tai la " + vitriSlide);

    // Nếu mà chưa đến slide cuối cùng (vitriSlide <= slides.length) --> hoạt động bthg
    if (vitriSlide < slides.length - 1) {
      // cho an het di
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        nut[i].classList.remove("kichhoat");
      }
      // cho phan tu tiep theo cua slide hien thi ra
      slides[vitriSlide].nextElementSibling.classList.add("active"); // giong  +1
      nut[vitriSlide].nextElementSibling.classList.add("kichhoat");
    } else {
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        nut[i].classList.remove("kichhoat");
      }
      // cho phan tu tiep theo cua slide hien thi ra
      slides[0].classList.add("active");
      nut[0].classList.add("kichhoat");
    }
  }

}, false)

// Bai 85