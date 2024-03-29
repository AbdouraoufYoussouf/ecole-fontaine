import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import '../styles/navbar.css'
import { AuthContext } from '../utils/authContext';
import { FaUserCircle, FaSignOutAlt, } from "react-icons/fa";


const navData = [
  {
    name: "Home", path: "/"
  },
  {
    name: "Article", path: "/article"
  },
  {
    name: "Objectif", path: "/objectif"
  },
  {
    name: "Apropos", path: "/apropos"
  }
];

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const { user, logout, } = useContext(AuthContext)
  const [showUserOption, setShowUserOption] = useState(false);
  const [showNavMobile, setShowNavMobile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté

    if (user !== null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  //console.log('isauth', isLoggedIn)

  const toggleMobileMenu = () => {
    setShowNavMobile(!showNavMobile);
  };

  const handleMouseEnter = () => {
    setShowUserOption(true);
  };
  const handleClicProfil = () => {
    setShowUserOption(true);
  };

  const handleMouseLeave = () => {
    setShowUserOption(false);
  };

  return (
    <nav className='bg-dark navbare '>
      <div className='d-flex'>

        <Link to="/">
          <h2>Ecole-Fontaine</h2>
        </Link>
        {/* <button type="button" onClick={toggleMobileMenu} >  Toggle Mobile Menu</button> */}
      </div>
      <div className='nave-link'>


        {navData.map((nav, index) => (
          <li key={index}>
            <Link
              className={`link${location.pathname === nav.path ? ' active' : ''}`}
              to={nav.path}
            >
              {nav.name}
            </Link>
          </li>
        ))}

      </div>
      <div className='nave-login'>
        {
          isLoggedIn ? (
            <><li className='  '>
              <Link to="/profil">
                <img src='/img/profil.png'
                  className='user-image'
                />
              </Link>

              <FaSignOutAlt onClick={() => logout(navigate)} size={35} className="icon-nav" color="tomato" />
            </li>
              {
                user?.role === 'Admin' && (
                  <Link className='btn-login' to="/admin">
                    Admin
                  </Link>)
              }

            </>
          ) : (
            <li className='d-flex justify-content-center align-items-center gap-3'>

              <Link className='btn-login' to="/login">
                Connexion
              </Link>
              <Link className='btn-register' to="/register">
                S'inscrire
              </Link>
            </li>
          )
        }


      </div>

    </nav>
  );
};

export default Navbar;
