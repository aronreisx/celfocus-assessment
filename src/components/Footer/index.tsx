import facebookImg from '../../assets/facebook.svg';
import linkedinImg from '../../assets/linkedin.svg';
import instagramImg from '../../assets/instagram.svg';

import { FooterBar } from './styles'
import { Link } from 'react-router-dom';

export function Footer(){
  return (
    <FooterBar>
      <div className="social">
        <Link to={{pathname:'https://facebook.com/celfocus'}} target="_blank">
          <img src={facebookImg} alt="Facebook" />
        </Link>
        <Link to={{pathname: 'https://linkedin.com/company/celfocus'}} target="_blank">
          <img src={linkedinImg} alt="LinkedIn" />
        </Link>
        <Link to={{pathname:'https://instagram.com/celfocus'}} target="_blank">
          <img src={instagramImg} alt="Instagram" />
        </Link>
      </div>
      <Link to={{pathname: 'https://linkedin.com/in/aronreis'}} target="_blank" className='author'>
        <p>Made by</p><span>Aron</span>
      </Link>
    </FooterBar>
  )
}
