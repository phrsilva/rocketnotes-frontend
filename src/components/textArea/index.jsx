import { Container } from "./style";

export function TextArea({value, ...rest}) {
    return (
        <Container placeholder="Digite sua nota aqui" {...rest}>
            {value}


        </Container>    
    );
}