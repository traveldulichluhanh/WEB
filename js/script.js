const translations = {
  vi: {
    home: "Trang Chủ",
    about: "Giới Thiệu",
    tours: "Tour Du lịch",
    contact: "Liên hệ",

    slide1_title: "Khám Phá Phú Quốc",
    slide1_desc: "Thiên đường nghỉ dưỡng biển đảo",

    slide2_title: "Du Lịch Đà Nẵng",
    slide2_desc: "Thành phố đáng sống nhất Việt Nam",

    slide3_title: "Nha Trang Biển Gọi",
    slide3_desc: "Hành trình không thể bỏ lỡ",

    book_now: "Đặt tour ngay",

    tournoibat: "Tour Du Lịch Nổi Bật",
    dulich1: "Du Lịch Phú Quốc 3 Ngày 2 Đêm",
    nd1: "Khám phá đảo ngọc Phú Quốc với biển xanh, cát trắng và những điểm đến nổi tiếng.",
    ma: "Mã Tour: NDHGF320",
    time: "Thời gian: 3 ngày 2 đêm",
    phuongtien: "Phương tiện: Máy bay",
    khachsan: "Khách sạn: 4 - 5 sao ( Vin Osis)",
    thoihan: "Thời hạn: 12 tháng/ Voucher",
    Gia: "Giá tour: 11.990.000 VND hoặc MIỄN PHÍ khi đăng kí ngay tại Fanpage.",

    dulich2: "Du Lịch Đà Nẵng 4 Ngày 3 Đêm",
    nd2: "Trải nghiệm Đà Nẵng với bãi biển Mỹ Khê tuyệt đẹp, ghé thăm BaNa Hills, thiên nhiên hài hòa và những công trình biểu tượng.",
    ma2: "Mã Tour: NDHGF322",
    time2: "Thời gian: 4 ngày 3 đêm",
    phuongtien2: "Phương tiện: Máy bay",
    khachsan2: "Khách sạn: 4 - 5 sao ( Mikazuki)",
    thoihan2: "Thời hạn: 12 tháng/ Voucher",
    Gia2: "Giá tour: 15.990.000 VND hoặc MIỄN PHÍ khi đăng kí ngay tại Fanpage.",

    dulich3: "Du Lịch Nha Trang 3 Ngày 2 Đêm",
    nd3: "Trải nghiệm Nha Trang với làn nước biển trong xanh, bãi cát trắng mịn và thiên đường nghỉ dưỡng hàng đầu Việt Nam.",
    ma3: "Mã Tour: NDHGF321",
    time3: "Thời gian: 3 ngày 2 đêm",
    phuongtien3: "Phương tiện: Máy bay",
    khachsan3: "Khách sạn: 4 - 5 sao ( Diamond Bay)",
    thoihan3: "Thời hạn: 12 tháng/ Voucher",
    Gia3: "Giá tour: 10.990.000 VND hoặc MIỄN PHÍ khi đăng kí ngay tại Fanpage.",

    lienket: "Liên Kết",

    ck: "Chuyên cung cấp tour du lịch trong và ngoài nước, mang đến trải nghiệm tuyệt vời cho mọi hành trình.",

    ndd: "Nhận ưu đãi",

    dk: "Đăng ký",

    email: "Email của bạn"
  },

  en: {
    home: "Home",
    about: "About",
    tours: "Tours",
    contact: "Contact",

    slide1_title: "Discover Phu Quoc",
    slide1_desc: "Tropical island paradise",

    slide2_title: "Explore Da Nang",
    slide2_desc: "The most livable city in Vietnam",

    slide3_title: "Nha Trang Calling",
    slide3_desc: "A journey you can't miss",

    book_now: "Book Now",

    tournoibat: "Featured Tours",

    dulich1: "Phu Quoc Tour 3 Days 2 Nights",
    nd1: "Discover the pearl island of Phu Quoc with its blue sea, white sand, and famous destinations..",
    ma: "Tour ID: NDHGF320",
    time: "Times: 3 Days 2 Nights",
    phuongtien: "Means of transport: Airplane",
    khachsan: "Hotel: 4 - 5 stars ( Vin Osis)",
    thoihan: "Validity period: 12 months/Voucher",
    Gia: "Tour price: 11,990,000 VND or FREE when registering now on our Fanpage.",

    dulich2: "Da Nang Tour 4 Days 3 Nights",
    nd2: "Experience Da Nang with its stunning My Khe beach, visit BaNa Hills, its harmonious nature, and iconic landmarks.",
    ma2: "Tour ID: NDHGF322",
    time2: "Times: 4 Days 3 Nights",
    phuongtien2: "Means of transport: Airplane",
    khachsan2: "Hotel: 4 - 5 stars ( Mikazuki)",
    thoihan2: "Validity period: 12 months/Voucher",
    Gia2: "Tour price:  15.990.000 VND or FREE when registering now on our Fanpage.",

    dulich3: "Nha Trang Tour 3 Days 2 Nighs",
    nd3: "Experience Nha Trang with its crystal-clear waters, pristine white sand beaches, and status as a top resort destination in Vietnam.",
    ma3: "Tour ID: NDHGF321",
    time3: "Times: 3 Days 2 Nights",
    phuongtien3: "Means of transport: Airplane",
    khachsan3: "Hotel: 4 - 5 stars (Diamond Bay)",
    thoihan3: "Validity period: 12 months/Voucher",
    Gia3: "Tour price: 10.990.000 VND or FREE when registering now on our Fanpage.",

    lienket: "Link",

    ck: "We specialize in providing domestic and international tours, offering amazing experiences for every trip.",

    ndd: "Get offers",
    dk: "Sign in",
    email: "Your Email"
  }
};

const languageSelect = document.getElementById("language");

languageSelect.addEventListener("change", function () {
  const lang = this.value;

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
});
languageSelect.addEventListener("change", function () {
  localStorage.setItem("lang", this.value);
});

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "vi";
  languageSelect.value = savedLang;
  languageSelect.dispatchEvent(new Event("change"));
});

const navbar = document.querySelector('.hero-navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

