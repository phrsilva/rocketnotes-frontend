import { useState } from "react";

import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { TextArea } from "../../components/textArea";
import { NoteItem } from "../../components/noteItem";
import { Section } from '../../components/section'
import { Button } from "../../components/button";
import { Container, Form } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../service/API";


export function New() {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState('');

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');

    async function handleNewNote() {

        if (!title || !description) {
            return alert("Preencha o título e a descrição!");
        }

        if (newTag || newLink) {
            return alert("Tags e/ou links não adicionados!\n Clique no botão + para adicionar.");
        }
        await api.post("/notes", {
            title,
            description,
            tags,
            links
        })

        alert("Nota criada com sucesso!");
        navigate("/");
        }


    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink]);
        setNewLink('');
    }

    function handleRemoveLink(link) {
        setLinks(prevState => prevState.filter(item => item !== link));
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag('');
    }

    function handleRemoveTag(tag) {
        setTags(prevState => prevState.filter(item => item !== tag));
    }
    
    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>Criar notas</h1>
                        <Link to="/">Voltar</Link>

                    </header>
                    <Input
                    placeholder="Título"
                    onChange={e => setTitle(e.target.value)}
                    />
                    <TextArea
                    placeholder="Observações"
                    onChange={e => setDescription(e.target.value)} ></TextArea>

                    <Section title="Links úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem
                                key={String(index)}
                                value={link}
                                onClick={()=>handleRemoveLink(link)}
                                />
                            ))
                        }
                        <NoteItem
                        isNew
                        placeholder="Novo link"
                        value={newLink}
                        onChange={e => setNewLink(e.target.value)}
                        onClick={handleAddLink} 
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            
                            {
                                tags.map((tag, index) => (
                                    <NoteItem
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }

                            <NoteItem
                            isNew 
                            placeholder="Novo marcador" 
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTag}
                            />

                        </div>
                    </Section>

                    <Button 
                    title="Salvar" 
                    onClick={handleNewNote}
                    />

                </Form>

            </main>
        </Container>
    );
}