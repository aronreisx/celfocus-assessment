import { THead } from "./styles";
import { TableHeadProps } from '../../types/global'

export function TableHead({fields}: TableHeadProps) {
  return(
    <THead>
      <tr>
        {fields.map((field) => (
          <th>
            {field}
          </th>
        ))}
      </tr>
    </THead>
  )
}
