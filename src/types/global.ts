import { ComponentType, ReactNode } from "react";

/* TEMPLATE PROPERTIES TYPES */
export type MainTemplateProps = {
  children: ReactNode;
  title?: string;
  fields: string[];
  button?: ComponentType;
  avatar?: ComponentType;
}

/* COMPONENTS PROPERTIES TYPES */
export type TitleProps = {
  title?: string;
  button?: ComponentType;
}

export type TableProps = {
  children: ReactNode;
}

export type TableHeadProps = {
  fields: string[];
}

export type TableBodyProps = Pick<TableProps, "children">;

/* DATA PROPERTIES TYPES */
export type DataContextType = {
  GetCompanies: () => CompanyType[];
  GetCompany: () => CompanyType;
  GetPhoneNumbers: () => NumberType[];
  GetPhoneNumber: () => NumberType;
}

export type DataProviderProps = {
  children: ReactNode;
}

export type CompanyType = {
  id: number | undefined;
  name: string;
  vatin: string;
}

export type NumberType = {
  company_id: number | undefined;
  id: string;
  type: string;
}

/* ROUTE & PARAMS PROPERTIES TYPES */
export type RoutesType = {
  path: string;
  exact: boolean;
  component: any;
  props?: any;
}

export type ParamsType = {
  numberId?: string;
  companyId?: string;
}
