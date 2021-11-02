import { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { api } from '../services/api';
import { DataProviderProps, DataContextType, CompanyType, ParamsType, NumberType } from '../types/global'

export const DataContext = createContext<DataContextType>({} as DataContextType);

export function DataProvider({children}: DataProviderProps) {
  function GetCompanies(){
    const [companies, setCompanies] = useState<CompanyType[]>([])

    useEffect(() => {
      api.get(`/companies`).then(({data}) => {
        setCompanies(data);
      });
    }, []);

    return companies
  }

  function GetCompany(){
    const params = useParams<ParamsType>()
    const [company, setCompany] = useState<CompanyType>(
      {} as CompanyType
    )

    useEffect(() => {
      api.get(`/companies/${params.companyId}`).then(({data}) => {
        setCompany(data);
      });
    }, [params.companyId]);

    return company
  }

  function GetPhoneNumbers(){
    const params = useParams<ParamsType>()
    const [numbers, setNumbers] = useState<NumberType[]>([])

    useEffect(() => {
      api.get(`/phone_numbers`).then(({data}) => {
        setNumbers(data);
      })
    }, [params.companyId]);

    return numbers
  }

  function GetPhoneNumber(){
    const params = useParams<ParamsType>()
    const [number, setNumber] = useState<NumberType>({} as NumberType)

    useEffect(() => {
      api.get(`/phone_numbers/${params.numberId}`).then(({data}) => {
        setNumber(data);
      });
    }, [params.numberId]);

    return number
  }

  return (
    <DataContext.Provider value={{GetCompanies, GetCompany, GetPhoneNumbers, GetPhoneNumber}}>
      {children}
    </DataContext.Provider>
  )
}

