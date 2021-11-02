import { Main } from '../template/Main'
import { ButtonGoBack } from '../components/ButtonGoBack'
import { Avatar } from '../components/Avatar'

import { usePhoneNumbers } from '../hooks/usePhoneNumbers'

import { FiPhone, FiSmartphone } from "react-icons/fi";
export function Number () {

  const { GetPhoneNumber } = usePhoneNumbers()

  const number = GetPhoneNumber()

  function copyNumberToClipboard(element: string) {
    navigator.clipboard.writeText(element)
  }

  return (
    <Main title={`Nº ${number.id}`} button={ButtonGoBack} fields={['Number','Type']} avatar={Avatar}>
      <tr onClick={() => copyNumberToClipboard(number.id)}>
        <td>{number.id}</td>
        <td>{number.type}
          {number.type === 'mobile' ?
          <FiSmartphone size='25' className='data-icons'/> :
          <FiPhone size='25' className='data-icons'/>}
        </td>
      </tr>
    </Main>
  )
}
