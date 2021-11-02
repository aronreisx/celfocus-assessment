import { Container } from './styles'
import { TitleProps } from '../../types/global'

export function Title({title, button: Button}: TitleProps){
  return (
    <Container>
      <h1>{title || 'Companies'}</h1>
      {Button ? <Button/> : ''}
    </Container>
  )
}
