import { Main } from "./styles";
import { TableProps } from '../../types/global'

export function Table({children}:TableProps) {
  return(
    <Main>
      <table>
        {children}
      </table>
    </Main>
  )
}
