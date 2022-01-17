import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 50px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <h2>Bookstore CMS</h2>
        </div>
        <nav>
          {links.map((link) => (
            <NavLink key={link.id} to={link.path} className="links">
              {link.text}
            </NavLink>
          ))}
        </nav>
      </div>
      <div>
        <ImUser />
      </div>
    </header>
  );
};

export default Header;