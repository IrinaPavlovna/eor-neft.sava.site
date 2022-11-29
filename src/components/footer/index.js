import React from "react";
import './footer.scss'

function index() {
  return     <footer className="footer">
  {/* <ul class="icons">
      <li><a href="#"><ion-icon name="logo-whatsapp"></ion-icon></a></li>
      <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
      <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
      <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
  </ul>
  <ul class="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Partners</a></li>
          <li><a href="#">Specialties</a></li>
          <li><a href="#">Contact Us</a></li>
  </ul> */}
      <div className="footer-copyright">
          <p>Copyright @ {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
</footer>;
}

export default index;
