import { Main } from '../template/Main'
import { ButtonGoBack } from '../components/ButtonGoBack'

import { useCompanies } from '../hooks/useCompanies'
import { usePhoneNumbers } from '../hooks/usePhoneNumbers'

import { useHistory } from 'react-router-dom'
import { FiPhone, FiSmartphone } from 'react-icons/fi'

export function CompanyNumbers () {

  const { GetCompany } = useCompanies()
  const { GetPhoneNumbers } = usePhoneNumbers()

  const company = GetCompany()
  const numbers = GetPhoneNumbers()

  const companyNumbers = numbers.filter(
    (element: { company_id: number | undefined }) => {
      return company.id === element.company_id
    }
  )

  const history = useHistory();
  function sendPage(path: string){
    history.push(path)
  }

  return (
    <Main title={company.name} button={ButtonGoBack} fields={['Number', 'Type']}>
      {companyNumbers.map((element) => (
        <tr key={element.id} onClick={() => sendPage(`/number/${element.id}`)}>
          <td>{element.id}</td>
          <td>
            <p>{element.type}</p>
            {element.type === 'mobile' ?
            <FiSmartphone size='25' className='data-icons'/> :
            <FiPhone size='25' className='data-icons'/>}
          </td>
        </tr>
      ))}
    </Main>
  )
}
