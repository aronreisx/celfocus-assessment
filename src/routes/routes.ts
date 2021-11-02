import { Companies } from '../pages/Companies'
import { CompanyNumbers } from '../pages/CompanyNumbers'
import { Number } from '../pages/Number'

import { RoutesType } from '../types/global'


const Routes: RoutesType[] = [
  {
    path: '/',
    component: Companies,
    exact: true
  },
  {
    path: '/company/:companyId',
    component: CompanyNumbers,
    exact: true
  },
  {
    path: '/number/:numberId',
    component: Number,
    exact: true
  }
];

export default Routes;
