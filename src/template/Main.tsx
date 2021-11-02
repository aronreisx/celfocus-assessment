import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Table } from "../components/Table";
import { TableHead } from "../components/TableHead";
import { TableBody } from "../components/TableBody";
import { Footer } from "../components/Footer";

import { MainTemplateProps } from "../types/global";

export function Main({ children, title, fields, button, avatar: Avatar }: MainTemplateProps){
  return (
    <>
      <Header/>
      <Title title={title} button={button}/>
      {Avatar ? <Avatar/> : ''}
      <Table>
        <TableHead fields={fields}/>
        <TableBody>
          { children }
        </TableBody>
      </Table>
      <Footer/>
    </>
  )
}
