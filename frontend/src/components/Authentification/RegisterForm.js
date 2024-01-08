import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("oui bouton cliqué");

    fetch('http://localhost:3001/register', {  
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('BIEN ENREGISTRÉ GG:', data);
        console.log("Avant redirection");
        navigate(`/welcome/${formData.username}`);
        console.log("Après redirection");
      })
      .catch(error => console.error('Error:', error));
  };


  return (

    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Bienvenue dans 'Game Review App' !</h1>
          <p>Pour commencer, il faut s'inscrire !</p>
          <div className={styles.outerLoginContainer}>
        <div className={styles.loginContainer}>
          <h2>Inscription</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Nom d'utilisateur:
              <input type="text" name="username" value={formData.username} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Adresse email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Mot de passe:
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </label>
            <br />
            <button type="submit" className={styles.submitButton}>S'inscrire</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RegisterForm;