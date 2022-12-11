import './LoginCard.scss';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import SocialsLoginButton from '../SocialsLoginButton/SocialsLoginButton';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function LoginCard({ setIsLoading }) {
  return (
    <section className="login-card">
      <article className="login-card__wrapper">
        <SignIn setIsLoading={setIsLoading} />
        <SocialsLoginButton link={`${SERVER_URL}/auth/google`}>
          Sign in with Google
        </SocialsLoginButton>
      </article>
      <article className="login-card__wrapper">
        <SignUp setIsLoading={setIsLoading} />
      </article>
    </section>
  );
}
