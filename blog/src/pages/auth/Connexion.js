import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../component/auth-context';

function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { isLoggedIn, setIsLoggedIn, setUser, setIsAdmin } = useAuth();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setIsAdmin(false); // Reset isAdmin lors de la déconnexion
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          setUser(data.user);
          setIsLoggedIn(true);
          setIsAdmin(data.user.role === 'enseignant'); // Définir isAdmin en fonction du rôle de l'utilisateur
          navigate('/article');
        } else {
          setError('Nom d\'utilisateur ou mot de passe incorrect');
        }
      })
      .catch((error) => {
        setError('Une erreur s\'est produite. Veuillez réessayer.');
      });
  };
  

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Adresse e-mail :
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleEmailChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Mot de passe :
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={handlePasswordChange}
            className="form-input"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <div className="button-container">
          {isLoggedIn ? (
            <button type="button" onClick={handleLogout} className="form-button">
              Se déconnecter
            </button>
          ) : (
          <>
            <button type="submit" className="form-button">
              Se connecter
            </button>
          <Link to="/Signup" className="form-button">
            Inscription
          </Link>
          </>
        )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Connexion;