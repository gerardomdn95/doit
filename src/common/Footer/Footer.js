import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter, faSpotify } from '@fortawesome/free-brands-svg-icons';
import './footer.scss';

export const Footer = () => {
  return (
    <footer class="app-footer bg-dark text-light">
      {/* <p>Built by <a href="https://twitter.com/gerardomdnr">@gerardomdnr</a></p> */}
      <p>SOCIAL MEDIA</p>
      <p>
        <FontAwesomeIcon icon={faSpotify} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faFacebookSquare} />
      </p>
    </footer>
  )
}

export default Footer;
