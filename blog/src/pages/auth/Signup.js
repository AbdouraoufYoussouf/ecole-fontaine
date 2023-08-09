import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

// Gestionnaire pour le changement du nom 
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

// Gestionnaire pour le changement de l email
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

// Gestionnaire pour le changement du mot de passe   
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

 // Gestionnaire pour la soumission du formulaire  
  const handleSubmit = (event) => {
    event.preventDefault();

 // Vérification que les mots de passe correspondent
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

  // Envoi de la demande d inscription à l API
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name,email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setIsRegistered(true);
          setError("");
          navigate('/connexion');
        } else {
          setError("Une erreur s'est produite. Veuillez réessayer.");
        }
      })
      .catch((error) => {
        setError("Une erreur s'est produite. Veuillez réessayer.");
      });
  };


  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="name" className="form-label">
            name :
          </label>
          <input
            type="name"
            id="name"
            name="name"
            required
            onChange={handleNameChange}
            className="form-input"
          />
</div>
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
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">
            Confirmez le mot de passe :
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            onChange={handleConfirmPasswordChange}
            className="form-input"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <div className="button-container">
            {isRegistered ? (
              <button type="button" className="form-button">
                Inscription réussie !
              </button>
            ) : (
              <button type="submit" className="form-button">
                S'inscrire
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
