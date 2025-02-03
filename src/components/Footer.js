import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <img src="/images/footer.png" className="footer__imgDesktop" alt=""></img>
      <img src="/images/footer-mobile.png" className="footer__imgMobile" alt=""></img>
      <div>
        <p>Contact</p>
        <a href="mailto:alixbocqui@gmail.com">
          <p>alixbocqui@gmail.com</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
