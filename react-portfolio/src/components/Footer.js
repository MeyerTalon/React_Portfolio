import React from 'react';
import { Github, Linkedin } from 'react-bootstrap-icons';

export default function Footer() {
  return (
    <div className="d-flex justify-content-center flex-wrap">
        <a href="https://github.com/MeyerTalon"><Github/></a>
        <a href="https://www.linkedin.com/in/talon-meyer-a3a2b1264"><Linkedin/></a>
    </div>
  );
}
