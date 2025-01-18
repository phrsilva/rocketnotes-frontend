import { Container, Form, Background } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { FiMail, FiLock  } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth  } from "../../hooks/auth";
import { useState } from "react";



export function SignIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { signIn } = useAuth();
    function handleSignIn() {
        signIn({email, password});
    }
    return (
        <Container>
            <Form>
                <h1>RocketNotes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                <Input type="text"
                placeholder="E-mail"
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
                />

                <Input type="password"
                placeholder="Senha"
                icon={FiLock}
                onChange={e => setPassword(e.target.value)}
                />

                <Button title={"Entrar"} onClick={handleSignIn}/>
                <Link to="/register">Criar conta</Link>
                    
            </Form>

            <Background />  

        </Container>
    );
}