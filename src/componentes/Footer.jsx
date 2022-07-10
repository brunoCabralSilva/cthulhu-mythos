import React from 'react';
import '../css/footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <div className="footer-text">
            <p><strong>Contato:</strong> (83)9 9836-4408 / bruno.cabral.silva2018@gmail.com</p>
          </div>
          <div className="icons-contact">
            <div className="icons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="footer-copyright">
            <strong>© 2022 Copyright - Bruno Gabryell Cabral da Silva</strong>
          </div>
        </div>
      </footer >
    );
  }
}