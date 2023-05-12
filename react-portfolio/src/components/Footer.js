import React from 'react';
import { Github, Linkedin } from 'react-bootstrap-icons';

const styles = {
  marginTop: "70px",

}

export default function Footer() {
  return (
    <div className="d-flex justify-content-center flex-wrap" style={styles}>
        <a href="https://github.com/MeyerTalon"><Github size={50}/></a>
        <a href="https://www.linkedin.com/in/talon-meyer-a3a2b1264"><Linkedin size={50}/></a>
    </div>
  );
}
