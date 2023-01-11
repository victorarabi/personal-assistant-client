import googleIcon from '../../assets/icons/google.png';
import './SocialsLoginButton.scss';

/**
 * Component Button used to login with social medias.
 */
export default function SocialsLoginButton({ children, link }) {
  return (
    <a className="button__link" href={link}>
      <button className="button">
        <img className="button__icon" src={googleIcon} alt="icon" />
        <p className="button__txt">{children}</p>
      </button>
    </a>
  );
}
