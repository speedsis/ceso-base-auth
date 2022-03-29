
// @flow 
import { GetServerSideProps } from 'next';
import * as React from 'react';
 
const Pagina1Page = ({name}: {name: string}) => {
    return <div>Pagina1 - {name}</div>;
  };
  
  export default Pagina1Page;
  
  export const getServerSideProps: GetServerSideProps = async (ctx) => {
      
      //banco de dados
      //api externa
      return {
          props: {
              name: 'EQUILIBRIUM'
          }
      }
  };