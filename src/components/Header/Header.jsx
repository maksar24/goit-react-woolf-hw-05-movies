import { Navigation, HeaderComponent, Link } from './Header.styled';

const Header = () => {
  return (
    <HeaderComponent>
      <Navigation>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </Navigation>
    </HeaderComponent>
  );
};

export default Header;
