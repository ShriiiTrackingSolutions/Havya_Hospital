
// WhatsApp URL Adjuster (Responsive)
(function () {
  const whatsappLinks = [
    "https://web.whatsapp.com/send?phone=916354710794",
    "https://api.whatsapp.com/send?phone=916354710794"
  ];

  function updateWhatsAppLink() {
    const isMobile = window.innerWidth <= 767.98;
    document.querySelectorAll(".set-url-target").forEach(el =>
      el.setAttribute("href", whatsappLinks[isMobile ? 1 : 0])
    );
  }

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateWhatsAppLink, 200);
  });

  updateWhatsAppLink(); // Call on load
})();

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
  document.getElementById("header").innerHTML = ` <div class="miniHeader d-none d-sm-block">
            <div class="container">

            
<div class="row">
  <div class="col-auto topheadLinks">
    <a target="_blank" href="tel:+916354710794"><i class="fa-solid fa-phone" aria-hidden="true"></i> +91 63547 10794</a>
    <a target="_blank" href="https://maps.app.goo.gl/EMtQmUV8unVQYXWE8"><i class="fa-solid fa-location-dot" aria-hidden="true"></i>Vadodara</a>
  </div>
  <div class="col-auto topheadSocial">
    <a href=""><i class="fa-brands fa-facebook"></i></a>
    <a href=""><i class="fa-brands fa-square-instagram"></i></a>
    <a href=""><i class="fa-brands fa-linkedin"></i></a>
  </div>
</div>
            </div>
          </div>
        <div id="main-header">
            <nav class="mynavbar bg-light">
              <div class="container header">
                <a class="brandLogo" href="index.html">
                  <img src="image/Havya_Logo.webp" alt="Havya Logo">
                </a>
                <button class="navToggle">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </button>
                <ul class="navMenu mx-auto mb-2 mb-lg-0">
                  <li class="nav-close">
                    <button class="btn-nav-close"><span class="close-btn">+</span></button>
                  </li>
                  <li class="navLi"><a class="navLink" href="index.html">Home</a></li>
                  <li class="navLi">
                    <a href="#" class="navLink">About 
                      <span class="toggleSub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 10l6 6l6-6z"/></svg>
                      </span>
                    </a>
                    <ul class="dropdownList">
                      <li class="navLi"><a href="havyaProfile.html" class="navLink">About Havya</a></li>
                      <li class="navLi"><a href="#" class="navLink">Link 2</a></li>
                      <li class="navLi"><a href="#" class="navLink">link 3</a></li>
                    </ul>
                  </li>
                  <li class="navLi">
                    <a href="#" class="navLink">Treatments 
                      <span class="toggleSub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 10l6 6l6-6z"/></svg>
                      </span>
                    </a>
                    <ul class="dropdownList">
                      <li class="navLi"><a href="infertility.html" class="navLink">Infertility</a></li>
                      <li class="navLi"><a href="familyPlanning.html" class="navLink">Family Planning</a></li>
                      <li class="navLi"><a href="gynecology.html" class="navLink">Gynecology</a></li>
                      <li class="navLi"><a href="maternity.html" class="navLink">Maternity</a></li>
                      <li class="navLi"><a href="cosmeticGynecology.html" class="navLink">Cosmetic Gynecology</a></li>
                      <li class="navLi"><a href="laparoscopy.html" class="navLink">Laparoscopy</a></li>
                    </ul>
                  </li>
                 
                  <li class="navLi"><a href="#" class="navLink">Patient Testimonials</a></li>
                  <li class="navLi"><a href="contactUs.html" class="navLink">Contact</a></li>
                </ul>
    
              </div>
            </nav>
       
        </div>
`; // Keep your current header HTML here
  document.getElementById("footer").innerHTML = `<div class="container">
        <div class="footWrap defaultPadding">
          <div class="row">
            <!-- Company Info -->
            <div class="col-lg-auto col-sm-6 mb-4 mb-md-0">
              <a class="footer-brand" href="index.html">
                <img loading="lazy" src="image/Havya_Logo.webp" alt="KADS">
              </a>
              <ul class="contact-info">
                <li>
                  <a class="locationLink footerLinks" target="_blank" href="https://maps.app.goo.gl/EMtQmUV8unVQYXWE8">
                    <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
                    <A1-TF-25>
                      <pre class="mb-0">
TF-A1-22, Akshar Pavilion Mall, 
Near Priya Cinema,Vasna Bhyali
Main Road, Vadodara,391410</pre>
                  </a>
                </li>
                <li>
                  <a href="tel:+916354710794" class="footerLinks">
                    <i class="fa-solid fa-phone"></i>+91 63547 10794</a>
                </li>
                <li>
                  <a class="emailAnchor footerLinks" href="mailto:havya@hgsaj.com">
                    <i class="fa-solid fa-envelope" aria-hidden="true"></i>havya@hgsaj.com</a>
                </li>
              </ul>
              <div class="social-icons mt-3">
                <a target="_blank" class="facebook" href="https://www.linkedin.com/">
                  <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                </a>
                <a class="whatsapp set-url-target" rel="noopener" data-mobile-target="" data-desktop-target="_blank" target="_blank" href="https://api.whatsapp.com/send?phone=916354710794">
                  <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks">
              <h5 class="fourthH centerStyle">Quick Links</h5>
              <ul>
                <li>
                  <a class="footerLinks" href="index.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>Home </a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>About</a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Service </a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Testimonials </a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Contact </a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks1">
              <h5 class="fourthH centerStyle">Explore More</h5>
              <ul>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 1 will be here</a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 2 will be here</a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 3 will be here</a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 4 will be here</a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 5 will be here</a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 6 will be here</a>
                </li>
                
              </ul>
            </div>
            <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks1">
              <h5 class="fourthH centerStyle">Explore More</h5>
              <ul>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 1 will be here</a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 2 will be here</a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 3 will be here</a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 4 will be here</a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 5 will be here</a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 6 will be here</a>
                </li>
                
              </ul>
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
                <div class="copyright text-center"> <span class="year"></span>  All Rights Reserved by Havya | Developed by <a href="https://shriiitrackingsolution.in/" target="_blank">
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

