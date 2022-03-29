
// @flow 
import { useRouter } from 'next/router';
import * as React from 'react';
import { setCookie } from '../util/cookies';
import { http } from '../util/http';
type Props = {
    
};
  const LoginPage = () => {

    const router = useRouter();

    async function onSubmit(event: React.FormEvent) {
        event.preventDefault();
        
        const email = (document.querySelector("#username") as HTMLInputElement)
        .value;
        const password = (document.querySelector("#password") as HTMLInputElement)
            .value;


            const { data } = await http.post("auth/signin", { email, password });

            console.log(data);

            setCookie("token", data.token);
            
            router.push('/private');
        
   }

    return (
         
        <form method="post" onSubmit={onSubmit}  >
        <div  >
          <label htmlFor="username">Usuário</label>
          <input type="text" id="username" name="username" />
        </div>
        <div  >
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    );


};

export default LoginPage;