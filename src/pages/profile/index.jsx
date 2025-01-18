import { useState } from "react";

import { Container , Form, Avatar} from "./style";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import avatarPlaceholder from "../../assets/avatarPlaceholder.svg";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";
import { api } from "../../service/API";
import { useAuth } from "../../hooks/auth";

export function Profile() {

    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);    
    const [email, setEmail] = useState(user.email);
    const [senhaAtual, setSenhaAtual] = useState()
    const [novaSenha, setNovaSenha] = useState()


    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar, setAvatar] = useState(user.avatar);
    const [avatarFile, setAvatarFile] = useState(null);
   

    async function handleUpdate() {
        const user = {
            name,
            email,
            senhaAtual: senhaAtual,
            novaSenha: novaSenha
        }
        await updateProfile({user, avatarFile});
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }


    return (
        <Container>
            <header>
                <Link to="/"><FiArrowLeft /></Link>
            </header>
            <Form>
                <Avatar>
                    <img src={avatarUrl} alt="Foto de perfil" />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input 
                        id="avatar"
                        type="file" 
                        onChange={handleChangeAvatar}/>
                    </label>
                </Avatar>

                <Input 
                placeholder="Nome"
                type="text"
                icon={FiUser}
                value={name}
                onChange={e => setName(e.target.value)}
                />

                <Input 
                placeholder="E-mail"
                type="text" 
                icon={FiMail}
                value={email}
                onChange={e => setEmail(e.target.value)}
                />

                <Input 
                placeholder="Senha Atual"
                type="password"
                icon={FiLock}
                onChange={e => setSenhaAtual(e.target.value)}

                />

                <Input
                placeholder="Nova Senha"
                type="password"
                icon={FiLock}
                onChange={e => setNovaSenha(e.target.value)}


                />

                <Button title="Salvar" onClick={handleUpdate}/>

            </Form>
        </Container>
    );
}