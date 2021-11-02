import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import { Button } from './styles';

export function ButtonGoBack (){
  const history = useHistory();
  return (
    <Button type="button" onClick={() => history.goBack()}>
      <FiArrowLeft size={26}/>
      <span>Go back</span>
    </Button>
  );
};
