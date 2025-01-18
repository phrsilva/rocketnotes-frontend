import {RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";
import { useAuth } from '../../hooks/auth';
import { api } from '../../service/API';
import avatarPlaceholder from '../../assets/avatarPlaceholder.svg'
export function Header() {
    const { signOut, user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    
    return (
        <Container>
            <Profile to ="/profile" >
                <img src={avatarUrl} alt="Foto de perfil" />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>
            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}