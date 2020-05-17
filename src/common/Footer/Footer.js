import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter, faSpotify } from '@fortawesome/free-brands-svg-icons';
import './footer.scss';

export const Footer = () => {

  return (
    <footer class="app-footer bg-dark text-light">
      {/* <p>Built by <a href="https://twitter.com/gerardomdnr">@gerardomdnr</a></p> */}
      <p>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faSpotify} />
        </a>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
      </p>
    </footer>
  )
}

export default Footer;
