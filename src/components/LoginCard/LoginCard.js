import './LoginCard.scss';
import SignIn from '../SignIn copy/SignIn';
import SignUp from '../SignUp/SignUp';
import SocialsLoginButton from '../LoggoutButton/LogoutButton';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.SERVER_URL;
console.log(SERVER_URL);

export default function LoginCard() {
  return (
    <section class="login-card">
      <article className="login-card__wrapper">
        <SignIn />
        <SocialsLoginButton link={`${SERVER_URL}/auth/google`}>
          Sign in with Google
        </SocialsLoginButton>
      </article>
      <article className="login-card__wrapper">
        <SignUp />
      </article>
    </section>
  );
}
