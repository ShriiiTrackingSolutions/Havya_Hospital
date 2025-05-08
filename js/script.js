$(function(){var e=["https://web.whatsapp.com/send?phone=916354710794","https://api.whatsapp.com/send?phone=916354710794"];function t(){var t=767.98>$(window).width();$(".set-url-target").attr("href",e[t?1:0])}$(window).on("resize",function(){clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(t,200)}).trigger("resize")});


document.querySelector(".year").innerHTML= new Date().getFullYear()



// HEADER
document.getElementById("header").innerHTML = `
  <nav class="mynavbar bg-light">
              <div class="container-fluid header">
                <a class="brandLogo" href="index.html">
                  <img src="image/RudvedaLogo.webp" alt="Rudveda Logo">
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16">
                          <path fill="currentColor" fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .75.75v4.75h4.75a.75.75 0 0 1 0 1.5H8.75v4.75a.75.75 0 0 1-1.5 0V8.75H2.5a.75.75 0 0 1 0-1.5h4.75V2.5A.75.75 0 0 1 8 1.75" clip-rule="evenodd"/>
                        </svg>
                      </span>
                    </a>
                    <ul class="dropdownList">
                      <li class="navLi"><a href="#" class="navLink">Rudveda Profile</a></li>
                      <li class="navLi"><a href="#" class="navLink">link 2</a></li>
                      <li class="navLi"><a href="#" class="navLink">link 3</a></li>
                    </ul>
                  </li>
                  <li class="navLi">
                    <a href="#" class="navLink">Services 
                      <span class="toggleSub"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .75.75v4.75h4.75a.75.75 0 0 1 0 1.5H8.75v4.75a.75.75 0 0 1-1.5 0V8.75H2.5a.75.75 0 0 1 0-1.5h4.75V2.5A.75.75 0 0 1 8 1.75" clip-rule="evenodd"/></svg></span>
                    </a>
                    <ul class="dropdownList">
                      <li class="navLi"><a href="#" class="navLink">link 1</a></li>
                      <li class="navLi"><a href="#" class="navLink">link 2</a></li>
                      <li class="navLi"><a href="#" class="navLink">link 3</a></li>
                    </ul>
                  </li>
                  <li class="navLi">
                    <a href="#" class="navLink">Classes 
                      <span class="toggleSub"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .75.75v4.75h4.75a.75.75 0 0 1 0 1.5H8.75v4.75a.75.75 0 0 1-1.5 0V8.75H2.5a.75.75 0 0 1 0-1.5h4.75V2.5A.75.75 0 0 1 8 1.75" clip-rule="evenodd"/></svg></span>
                    </a>
                    <ul class="dropdownList">
                      <li class="navLi"><a href="#" class="navLink">link 1</a></li>
                      <li class="navLi"><a href="#" class="navLink">link 2</a></li>
                      <li class="navLi"><a href="#" class="navLink">link 3</a></li>
                    </ul>
                  </li>
                  <li class="navLi"><a href="#" class="navLink">Contact</a></li>
                </ul>
                <a href="" class="btnoutline d-none d-sm-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M9 10c0 3.866 3 7 3 7s3-3.134 3-7s-3-7-3-7s-3 3.134-3 7"/><path d="M6.33 8C4.115 7.046 2 7 2 7s.096 4.381 2.857 7.143S12 17 12 17s4.381-.096 7.143-2.857S22 7 22 7s-2.114.046-4.33 1m-5.65 9c-.166 1.333.64 4 3.494 4c1.995 0 2.993-2 6.486 0c-.4-2-1.2-3.28-2.367-4m-7.654 0c.167 1.333-.64 4-3.492 4C6.49 21 5.493 19 2 21c.4-2 1.2-3.28 2.367-4"/></g></svg>Book Now</a>
              </div>
            </nav>
`;

// FOOTER
document.getElementById("footer").innerHTML = `
  <div class="container">
        <div class="footWrap defaultPadding">
          <div class="row">
            <!-- Company Info -->
            <div class="col-lg-auto col-sm-6 mb-4 mb-md-0">
              <a class="footer-brand" href="index.html">
                <img loading="lazy" src="image/RudvedaLogoWhite.webp" alt="Rudveda">
              </a>
              <ul class="contact-info">
                <li>
                  <a class="locationLink" target="_blank" href="#">
                    <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
                    <A1-TF-25>
                      <pre class="mb-0">
TF-A1-22, Akshar Pavilion Mall,
Near Priya Cinema,
Vasna Bhyali Main Road, 
Vadodara,391410
</pre>
                  </a>
                </li>
                <li>
                  <a href="tel:+916354710794">
                    <i class="fa-solid fa-phone"></i>+91 6354 710 794</a>
                </li>
                <li>
                  <a class="emailAnchor" href="mailto:rudveda">
                    <i class="fa-solid fa-envelope" aria-hidden="true"></i>rudveda</a>
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
                  <a href="index.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>Home </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>About</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Service </a>
                </li>
                <li>
                  <a href="gallery.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>Classes </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Contact </a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks1">
              <h5 class="fourthH centerStyle">Explore More</h5>
              <ul>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 1 will be here</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 2 will be here</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 3 will be here</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 4 will be here</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 5 will be here</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 6 will be here</a>
                </li>
                
              </ul>
            </div>
            <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks1">
              <h5 class="fourthH centerStyle">Explore More</h5>
              <ul>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 1 will be here</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 2 will be here</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 3 will be here</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 4 will be here</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 5 will be here</a>
                </li>
                <li>
                  <a href="#">
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
                <div class="copyright text-center"> <span class="year"></span>  All Rights Reserved by Rudveda | Developed by <a href="https://shriiitrackingsolution.in/" target="_blank">
                    <b>Shriii&nbsp;Tracking&nbsp;Solution</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
          `;
          
         
// Active Link Highlighter
function highlightActiveLink() {
  const currentFile = (window.location.pathname.split('/').pop() || 'index.html').split('?')[0];
  document.querySelectorAll('.navLink').forEach(link => {
    const href = link.getAttribute('href')?.split('?')[0];
    if (!href || href === '#') return;

    if (href === currentFile) {
      link.classList.add('active');
      const dropdown = link.closest('.dropdownList');
      const parentLink = dropdown?.closest('.navLi')?.querySelector('.navLink');
      parentLink?.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  if (typeof loadContent === 'function') {
    loadContent(() => highlightActiveLink());
  } else {
    highlightActiveLink();
  }
});