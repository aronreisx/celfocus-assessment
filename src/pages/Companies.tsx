import { Main } from '../template/Main'

import { useCompanies } from '../hooks/useCompanies'

import { useHistory } from 'react-router-dom'

export function Companies () {

  const { GetCompanies } = useCompanies()

  const companies = GetCompanies()

  const history = useHistory();
  function sendPage(path: string){
    history.push(path)
  }

  return (
    <Main fields={['Title', 'Vatin']}>
      {companies.map((element) => (
        <tr key={element.id} onClick={() => sendPage(`/company/${element.id}`)}>
          <td>{element.name}</td>
          <td>
            {element.vatin}
          </td>
        </tr>
      ))}
    </Main>
  )
}
