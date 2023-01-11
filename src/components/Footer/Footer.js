import linkedinLogo from '../../assets/icons/linkedin.png';
import './Footer.scss';

//footer component
export default function Footer() {
  return (
    <footer className="footer">
      <h4 className="footer__copyright">©2023 Victor Arabi</h4>
      <a
        className="footer__link"
        href="https://www.linkedin.com/in/victor-arabi/"
      >
        <img className="footer__logo" src={linkedinLogo} alt="linkedin" />
      </a>
    </footer>
  );
}
