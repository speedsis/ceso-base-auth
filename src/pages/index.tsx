import type { NextPage } from "next";
import useSWR from "swr";
import { useAuthHttp } from "../hooks/useAuthHttp";

const Home: NextPage = () => {
  // const { data: user, error } = useAuthHttp("user");
  //Context API
  // return user ? <div>EQUILIBRIUM - SIGFAS</div> : null;

  return  <div>EQUILIBRIUM - SIGFAS</div> ;
};

export default Home;
