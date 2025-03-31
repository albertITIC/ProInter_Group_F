import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="container-fluid py-3">
      <div className="row footer">
        <div className="footer__row col-12 col-lg-12">
          <h1 className="footer__title">BIOMORPH</h1>
          <div className="footer__nav-item">
            <a className="footer__link" href="/">
              Sujeto a cambios. Reservamos derecho de modificación o entrada
            </a>
          </div>
          <div className="footer__nav-item">
            <a className="footer__link" href="/">
              AUTORES: LILA, ALBERT, ORIOL
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
