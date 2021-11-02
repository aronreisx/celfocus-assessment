import { Container } from './styles';
import logoImg from '../../assets/logo.svg';
import { useHistory } from 'react-router-dom';

export function Header() {

  const history = useHistory();
  function sendPage(path: string){
    history.push(path)
  }
  return (
    <Container>
      <img src={logoImg} alt="CelList logo" onClick={() => sendPage(`/`)}/>
    </Container>
  )
}
