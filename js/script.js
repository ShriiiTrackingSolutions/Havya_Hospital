

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  loadHeaderFooter(() => {
    highlightActiveLink();
    initHeaderBehavior();
    initMobileNavToggle();
    document.querySelector(".year").textContent = new Date().getFullYear();
  });
});

// Load Header and Footer
function loadHeaderFooter(callback) {
  document.getElementById("header").innerHTML = ` <div class="miniHeader d-none d-lg-block">
            <div class="container">
              <div class="row">
                <div class="col-auto topheadSocial">
                  <a class="brandLogo d-none d-lg-inline-block" href="index.html">
                    <img src="image/Havya_Logo.webp" alt="Havya Women's Hospital Logo">
                  </a>
                </div>
                <div class="col-auto topheadContacts">
                  <div class="cantactCardTop">
                    <div class="iconBox">
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" fill-opacity="0" d="M12 11l-8 -5h16l-8 5Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"/></path><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path><path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"/></path></g></svg>
                    </div>
                    <div class="infoBox ">
                      <h3 class="fifthH">Email</h3>
                      <p>havyawomenshospital@gmail.com</p>
                    </div>
                    <a href="mailto:havyawomenshospital@gmail.com" class="absAnchor"></a>
                  </div>
                  <div class="cantactCardTop">
                    <div class="iconBox">
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path stroke-dasharray="64" stroke-dashoffset="64" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/><animateTransform id="lineMdPhoneCallLoop0" fill="freeze" attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"/></path><path stroke-dasharray="4" stroke-dashoffset="4" d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72"><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallLoop0.begin+0s" dur="2.7s" keyTimes="0;0.111;0.259;0.37;1" values="4;0;0;4;4"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65"><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallLoop0.begin+0.2s" dur="2.7s" keyTimes="0;0.074;0.185;0.333;0.444;1" values="6;6;0;0;6;6"/></path></g></svg>
                    </div>
                    <div class="infoBox ">
                      <h3 class="fifthH">Phone Number</h3>
                      <p>+91 635 183 6898</p>
                    </div>
                    <a href="tel:+916351836898" class="absAnchor"></a>
                  </div>
                  <div class="cantactCardTop">
                    <div class="iconBox">
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.6"><path d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"/><path d="M8.5.5h-3a1 1 0 0 0-1 1V2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1M6.303 5.21a.43.43 0 0 0-.43.43v1.207H4.666a.43.43 0 0 0-.43.43v1.395c0 .237.193.43.43.43h1.207v1.207c0 .237.193.43.43.43h1.395a.43.43 0 0 0 .43-.43V9.1h1.207a.43.43 0 0 0 .43-.43V7.277a.43.43 0 0 0-.43-.429H8.128V5.639a.43.43 0 0 0-.43-.429z"/></g></svg>
                    </div>
                    <div class="infoBox ">
                      <h3 class="fifthH">Book Your<br>Appointment</h3>
                    </div>
                    <a href="Appointment.html" class="absAnchor"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="main-header">
            <nav class="mynavbar bg-light">
              <div class="container header">
                <a class="brandLogo d-lg-none" href="index.html">
                  <img src="image/Havya_Logo.webp" alt="Havya Women's Hospital Logo">
                </a>
                <button class="navToggle">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </button>
                <ul class="navMenu mx-auto ms-lg-0 mb-2 mb-lg-0">
                  <li class="nav-close">
                    <button class="btn-nav-close">
                      <span class="close-btn">+</span>
                    </button>
                  </li>
                  <li class="navLi">
                    <a class="navLink" href="index.html">Home</a>
                  </li>
                  <li class="navLi">
                    <a href="#" class="navLink">About <span class="toggleSub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 10l6 6l6-6z" />
                        </svg>
                      </span>
                    </a>
                    <ul class="dropdownList">
                      <li class="navLi">
                        <a href="havyaProfile.html" class="navLink">About Us</a>
                      </li>
                      <li class="navLi">
                        <a href="meetOurDoctors.html" class="navLink">Meet Our Doctors</a>
                      </li>
                    </ul>
                  </li>
                  <li class="navLi">
                    <a href="#" class="navLink">Our Treatments <span class="toggleSub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 10l6 6l6-6z" />
                        </svg>
                      </span>
                    </a>
                    <ul class="dropdownList">
                      <li class="navLi">
                        <a href="maternity.html" class="navLink">Maternity</a>
                      </li>
                      <li class="navLi">
                        <a href="sonography.html" class="navLink">Sonography</a>
                      </li>
                      <li class="navLi">
                        <a href="infertility.html" class="navLink">Infertility</a>
                      </li>
                      <li class="navLi">
                        <a href="gynecology.html" class="navLink">Gynecology</a>
                      </li>
                      <li class="navLi">
                        <a href="familyPlanning.html" class="navLink">Family Planning</a>
                      </li>
                      <li class="navLi">
                        <a href="laparoscopy.html" class="navLink">Laparoscopy</a>
                      </li>
                    </ul>
                  </li>
                  <li class="navLi">
                    <a href="testimonials.html" class="navLink">Patient Testimonials</a>
                  </li>
                  <li class="navLi">
                    <a href="gallery.html" class="navLink">Gallery</a>
                  </li>
                  <li class="navLi">
                    <a href="contactUs.html" class="navLink">Contact</a>
                  </li>
                </ul>
                <div class="col-auto topheadSocial d-none d-lg-block">
                  <a href="https://www.facebook.com/people/Havya-womens-hospital/61574666012974/">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/havyawomenshospital/?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw%3D%3D#">
                    <i class="fa-brands fa-square-instagram"></i>
                  </a>
                </div>
              </div>
            </nav>
          </div>`; // Keep your current header HTML here
          
  document.getElementById("footer").innerHTML = `<div class="container">
        <div class="footWrap defaultPadding">
          <div class="row">
            <!-- Company Info -->
            <div class="col-lg-auto col-sm-6 mb-4 mb-md-0 FooterAbout">
              <a class="footer-brand" href="index.html">
                <img loading="lazy" src="image/Havya_Logo.webp" alt="Havya Women's Hospital Logo">
              </a>
              <p>
                Havya Women's Hospital offers compassionate, expert care in gynecology, maternity, and fertility, ensuring personalized women’s healthcare in a supportive, modern, and centrally located facility.
              </p>
             
            </div>
            <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks">
              <h5 class="fourthH">Quick Links</h5>
              <ul>
                <li>
                  <a class="footerLinks" href="index.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>Home </a>
                </li>
                <li>
                  <a class="footerLinks" href="havyaProfile.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>About Us</a>
                </li>
                <li>
                  <a class="footerLinks" href="meetOurDoctors.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>Meet Our Doctors </a>
                </li>
                <li>
                  <a class="footerLinks" href="testimonials.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>Patient Testimonials</a>
                </li>
                <li>
                  <a class="footerLinks" href="gallery.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>Gallery</a>
                </li>
                <li>
                  <a class="footerLinks" href="contactUs.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>Contact</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks1">
              <h5 class="fourthH ">Our Treatments</h5>
              <ul>   
                 <li><a href="maternity.html" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> Maternity</a></li>
                 <li><a href="sonography.html" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> Sonography</a></li>
                 <li><a href="infertility.html" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> Infertility</a></li>
                 <li><a href="gynecology.html" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> Gynecology</a></li>
                 <li><a href="familyPlanning.html" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> Family Planning</a></li>
                 <li><a href="laparoscopy.html" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> Laparoscopy</a></li>
              </ul>
            </div>
            <div class="col-md-6 col-lg-auto mb-4 mb-md-0">
              <h5 class="fourthH ">Contact Us</h5>
              <ul class="contact-info">
                <li>
                  <a class="locationLink footerLinks" target="_blank" href="https://maps.app.goo.gl/qsc8AGfzZZnhsZ1H6">
                    <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
                    <A1-TF-25>
                      <pre class="mb-0">
2nd floor, Broadway Signature,
Sevasi - Canal Rd, Sevasi,
Vadodara, Gujarat 391101</pre>
                  </a>
                </li>
                <li>
                  <a href="tel:+916351836898" class="footerLinks">
                    <i class="fa-solid fa-phone"></i>+91 63518 36898</a>
                </li>
                <li>
                  <a href="tel:+912653176295" class="footerLinks">
                    <i class="fa-solid fa-phone"></i>+91 265 317 6295</a>
                </li>
                <li>
                  <a class="emailAnchor footerLinks" href="mailto:havyawomenshospital@gmail.com">
                    <i class="fa-solid fa-envelope" aria-hidden="true"></i>havyawomenshospital@gmail.com</a>
                </li>
              </ul>
              <div class="social-icons mt-3">
                <a target="_blank" class="facebook" href="https://www.facebook.com/people/Havya-womens-hospital/61574666012974/">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a target="_blank" class="instagram" href="https://www.instagram.com/havyawomenshospital/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a class="whatsapp set-url-target" rel="noopener" data-mobile-target="" data-desktop-target="_blank" target="_blank" href="https://api.whatsapp.com/send?phone=916351836898">
                  <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          
            <!-- Contact Info -->
          </div>
        </div>
       
      </div>
      <div class="f-bottom effect">
        <div class="container">
          <div class="row ">
            <div class="col-12">
              <div class="inner">
                <div class="copyright text-center"> <span class="year"></span>  All Rights Reserved by Havya Women's Hospital | Developed by <a href="https://shriiitrackingsolution.in/" target="_blank">
                    <b>Shriii&nbsp;Tracking&nbsp;Solution</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> `; // Keep your current footer HTML here
  callback?.();
}

// Highlight current page in navbar
function highlightActiveLink() {
  const current = (window.location.pathname.split("/").pop() || "index.html").split("?")[0];
  document.querySelectorAll(".navLink").forEach(link => {
    const href = link.getAttribute("href")?.split("?")[0];
    if (!href || href === "#") return;
    if (href === current) {
      link.classList.add("active");
      link.closest(".dropdownList")?.closest(".navLi")?.querySelector(".navLink")?.classList.add("active");
    }
  });
}

// Sticky Header on Scroll
function initHeaderBehavior() {
  const header = document.getElementById("main-header");
  const belowContent = document.getElementById("headBelowContent");

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const stickyStart = header.offsetTop + header.offsetHeight + 5;
    const resetPoint = belowContent.offsetTop + belowContent.offsetHeight + 4;

    if (scrollTop > stickyStart) {
      header.classList.add("sticky-header", "visible");
      header.classList.remove("headerAnimate");
    } else if (scrollTop < resetPoint) {
      header.classList.remove("sticky-header", "visible");
      header.classList.add("headerAnimate");
    }
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("load", handleScroll);
}

// Mobile Nav Toggle and Submenu
function initMobileNavToggle() {
  const toggleBtn = document.querySelector(".navToggle");
  const navMenu = document.querySelector(".navMenu");
  const closeBtn = document.querySelector(".btn-nav-close");

  toggleBtn?.addEventListener("click", () => navMenu.classList.toggle("active"));
  closeBtn?.addEventListener("click", () => navMenu.classList.remove("active"));

  document.querySelectorAll(".toggleSub").forEach(toggle => {
    toggle.addEventListener("click", e => {
      e.preventDefault();
      const submenu = toggle.closest(".navLi").querySelector(".dropdownList");

      // Close all others
      document.querySelectorAll(".dropdownList.open").forEach(menu => {
        if (menu !== submenu) menu.classList.remove("open");
      });

      submenu?.classList.toggle("open");
    });
  });
}


// WhatsApp URL Adjuster (Device-based Detection)
(function () {
  const mobileLink = "https://api.whatsapp.com/send?phone=916351836898";
  const desktopLink = "https://web.whatsapp.com/send?phone=916351836898";

  function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  function updateWhatsAppLink() {
    const isMobile = isMobileDevice();
    const targetLink = isMobile ? mobileLink : desktopLink;

    document.querySelectorAll(".set-url-target").forEach(el => {
      el.setAttribute("href", targetLink);
    });
  }

  window.addEventListener("resize", updateWhatsAppLink);
  window.addEventListener("load", updateWhatsAppLink);
})();


