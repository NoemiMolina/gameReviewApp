// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaGamepad, FaDragon, FaCode, FaUser } from 'react-icons/fa';
import { GiWaltherPpk, GiWaxTablet } from "react-icons/gi";
import styles from './Navbar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/home" className={styles.navLink}>
        <FaHome />
        <span>Accueil</span>
      </Link>
      <Link to="/games/rpg" className={styles.navLink}>
        <FaGamepad />
        <span>RPG</span>
      </Link>
      <Link to="/games/fps" className={styles.navLink}>
        <GiWaltherPpk />
        <span>FPS</span>
      </Link>
      <Link to="/games/historic" className={styles.navLink}>
        <GiWaxTablet />
        <span>Historiques</span>
      </Link>
      <Link to="/games/sport" className={styles.navLink}>
        <FaDragon />
        <span>Sport</span>
      </Link>
      <Link to="/games/platform" className={styles.navLink}>
        <FaCode />
        <span>Plateformes</span>
      </Link>
      <Link to="/espace-personnel" className={styles.navLink}>
        <FaUser />
        <span>Espace Personnel</span>
      </Link>
    </nav>
  );
};

export default NavBar;