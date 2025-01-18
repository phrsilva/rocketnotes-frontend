import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Links, Content } from "./styles"
import { Header } from "../../components/header";
import { Button } from "../../components/button"
import { Section } from "../../components/section";
import { Tags } from "../../components/tags";
import { ButtonText } from "../../components/buttonText";
import { api } from "../../service/API";
import { useNavigate } from "react-router-dom";
export function Details() {
  const navigate = useNavigate();

  const params = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);

  function handleRemove(id) {
    const confirm = window.confirm("Tem certeza que deseja excluir essa nota?");
    if (confirm) {
      api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  function handleBack() {
    navigate(-1);
  }



  return (
    
    <Container>
      <Header />
      {
        data &&
        <main>
        <Content>

          <ButtonText title="Excluir nota" onClick={() => handleRemove(data.note.id)} />
          <h1>{data.note.title}</h1>
          <p>{data.note.description}</p>


        {
          data.links &&
          <Section title="Links úteis">
          <Links>
            {
              data.links.map(link => (
                <li key={link.id}>
                  <a href={link.url} target="_blank">{link.url}</a>
                </li>
              ))
            }
            
          </Links>
       </Section>}

        {
          data.tags &&
          <Section title="Marcadores">
            {
              data.tags.map(tag => (
                <Tags key={tag.id} title={tag.name} />
              ))
            }
          </Section>
        }

        <Button title="Voltar" onClick={() => handleBack()}></Button>


        </Content>
      </main>}
      

    </Container>
  ); 
}