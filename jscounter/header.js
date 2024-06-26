const navbar = `
<nav class="navbar">
    <div class="navbar__container">
        <a href="/" id="navbar__logo"><!--<i class="fas fa-gem"></i>-->
            &#128151</a><!--сердечко-->
        <div class="navbar__toggle" id="mobile-menu">
            <!--почему меню не отображается-->
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <!-- ютуб <div style="width: 100%; height: 100%; display: block; fill: currentcolor;"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg></div><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg></div>-->

            <!-- duckduckgo <button class="header__button--menu js-side-menu-open"><span>Открыть меню</span><svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 10a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75ZM1.75 7a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H1.75Z"></path></svg></button>
            <span>Открыть меню</span>
            <svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 10a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75ZM1.75 7a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H1.75Z"></path></svg>
            <path fill="currentColor" d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 10a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75ZM1.75 7a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H1.75Z"></path>-->
        </div>
        <ul class="navbar__menu">
            <li class="navbar__item">
                <a href="../pretty/complex.html" class="navbar__links"> Home </a>
            </li>
            <li class="navbar__item">
                <a href="../playground/index.html" class="navbar__links"> Dev </a>
            <li class="navbar__btn">
                <a href="../api/simple.html" class="button"> Sign Up </a>
            </li>
        </ul>
    </div>
</nav>
`
document.addEventListener("DOMContentLoaded", function () {
  /* header */
  const header = document.querySelector("#header")
  header.outerHTML = navbar;
})

const f = `
<nav class="footer">
    <div class="footer__container">
      <div class="footer__links">
        <div class="footer__link--wrapper">
          <div class="footer__link--items">
            <h2>About Us</h2>
            <a href="/">Contact us</a>
            <a href="/">Terms of Service</a>
          </div>
        </div>
      </div>
      <div class="social__media">
        <div class="social__media--wrap">
          <div class="footer__logo">
            <a href="https://www.rudn.ru/" id="footer__logo"
              ><i class="fas fa-gem"></i>RUDN</a
            >
          </div>
          <p class="website__rights">All rights reserved 2024</p>
          <div class="social__icons">
            <a href="/" class="social__icon--link" target="_blank">
              <i class="fab fa-email"></i>rudn@pfur.ru</a
            >
          </div>
        </div>
      </div>
    </div>
</nav>
`
document.addEventListener("DOMContentLoaded", function () {
  /* footer */
  const footer = document.querySelector("#footer")
  footer.outerHTML = f;
})