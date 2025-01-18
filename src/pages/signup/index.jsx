import { useState } from "react";
import { Container, Form, Background } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { FiMail, FiLock, FiUser  } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../service/API";

export function SignUp() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password) {
            alert("Preencha todos os campos!");
            return;
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/")

        })
        .catch(error => {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar!");
            }
        })



    }

    return (
        <Container>
            <Background />  
            <Form>
                <h1>RocketNotes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input type="text"
                placeholder="Nome"
                icon={FiUser}
                onChange = {e => setName(e.target.value)}
                />

                <Input type="text"
                placeholder="E-mail"
                icon={FiMail}
                onChange = {e => setEmail(e.target.value)}
                />

                <Input type="password"
                placeholder="Senha"
                icon={FiLock}
                onChange = {e => setPassword(e.target.value)}
                />

                <Button title={"Cadastrar"} onClick={handleSignUp}/>
                <Link to="/">Voltar para o login</Link>                    
            </Form>


        </Container>
    );
}