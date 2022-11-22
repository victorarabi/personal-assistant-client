import './SocialsLoginButton.scss';

/**
 * Button used to login with social medias.
 */

export default function SocialsLoginButton({ children }) {
  return (
    <button className="button">
      {/* <img className="button__icon" src={iconSrc} alt="icon" /> */}
      <p className="button__txt">{children}</p>
    </button>
  );
}
