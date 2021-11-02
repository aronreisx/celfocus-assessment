import { useContext } from "react";
import { DataContext } from "../contexts/MainContexts";

export function useCompanies(){
  const { GetCompanies, GetCompany } = useContext(DataContext)

  return {
    GetCompanies,
    GetCompany
  }
}
