import { useContext } from "react";
import { DataContext } from "../contexts/MainContexts";

export function usePhoneNumbers(){
  const { GetPhoneNumbers, GetPhoneNumber } = useContext(DataContext)

  return {
    GetPhoneNumbers,
    GetPhoneNumber
  }
}
