import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter, faSpotify } from '@fortawesome/free-brands-svg-icons';
import './footer.scss';

export const Footer = () => {

  return (
    <footer className="app-footer bg-dark text-light">
      {/* <p>Built by <a href="https://twitter.com/gerardomdnr">@gerardomdnr</a></p> */}
      <p>
        <a href="https://open.spotify.com/artist/5z2v7F21UQXrFvKjrvXOqf?si=Kj1l7qMQTgq77ViztFilaQ">
          <FontAwesomeIcon icon={faSpotify} />
        </a>
        <a href="https://www.instagram.com/edoardoleds/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/EdoardoLeds">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.facebook.com/Edoardo-Leds-491780914326395/">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
      </p>
    </footer>
  )
}

export default Footer;
