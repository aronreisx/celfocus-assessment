import { TBody } from "./styles";
import { TableBodyProps } from '../../types/global'

export function TableBody({children}: TableBodyProps) {
  return (
    <TBody>
      {children}
    </TBody>
  )
}
