import { NextPage } from "next";
import { withAuth } from "../hof/withAuth";
import { http } from "../util/http";

 interface PrivatePageProps {
    name: string;
    payload: any;
  }
  
  const PrivatePage: NextPage<PrivatePageProps> = (props) => {
    console.log(props.payload);
    return <div>Pagina privada {props.name}</div>;
  };
  
  export default PrivatePage;

  export const getServerSideProps = withAuth(
    async (ctx: any, cookies: any, payload: any) => {
        console.log(cookies);
      const { data } = await http.get("auth/me", {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      });
      return {
        props: data,
      };
    }
  );

 