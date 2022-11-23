import './Header.scss';
import LogoutButton from '../LogoutButton/LogoutButton';

export default function Header() {
  return (
    <header>
      <h1>Personal Assistant</h1>
      <LogoutButton />
    </header>
  );
}
