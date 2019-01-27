import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/sell">
      <a>LogIn</a>
    </Link>
    <Link href="/sell">
      <a>SignUp</a>
    </Link>
    <Link href="/ladder">
      <a>Ladder</a>
    </Link>
    <Link href="/tournaments">
      <a>Tournaments</a>
    </Link>
    <Link href="/media">
      <a>Media</a>
    </Link>
    <Link href="/fun">
      <a>Fun</a>
    </Link>
    <Link href="/stadium">
      <a>Stadium</a>
    </Link>
    <Link href="/support">
      <a>Support</a>
    </Link>
  </NavStyles>
);
export default Nav;
