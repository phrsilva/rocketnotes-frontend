import { useState, useEffect } from "react";
import { api } from "../../service/API";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/header";
import { ButtonText } from "../../components/buttonText";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Input } from "../../components/input";
import { Section } from "../../components/section";
import { Note } from "../../components/note";
import { useNavigate } from "react-router-dom";



export function Home() {


    const navigate = useNavigate();


    const [tags, useTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState([]);

    const [search, setSearch] = useState('');
    const [notes, setNotes] = useState([]);


    function handleTagSelected(tagName) {
        if (selectedTag.includes(tagName)) {
            const filteredTags = selectedTag.filter(tag => tag !== tagName);
            setSelectedTag(filteredTags);
        } else {
            setSelectedTag(prevState => [...prevState, tagName]);
        }
    }

    function handleDetails(id) {
        navigate(`/details/${id}`);
    }


    useEffect(() => {
        async function fetchTags() {
            const response = await api.get('/tags');
            useTags(response.data);
        }
        fetchTags();

    }, []);

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${selectedTag}`);
            setNotes(response.data);
        }
        fetchNotes();
    }, [selectedTag, search]);

    return (
        
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header>

            </Header>

            <Menu> 
                <li><ButtonText title="Todos" onClick={() => setSelectedTag([])} isActive={!selectedTag.length} /></li>

                {tags && tags.map(tag => <li key={tag.id}><ButtonText 
                onClick={() => handleTagSelected(tag.name)} 
                title={tag.name}
                isActive={selectedTag.includes(tag.name)}
                />
                </li>)}
                
            </Menu>

            <Search>

                <Input placeholder="Pesquisar pelo título" 
                icon={FiSearch} 
                onChange={e => setSearch(e.target.value)}
                />

            </Search>

            <Content>
                <Section title="Minhas notas">
                    {


                        notes.map(note => <Note key={String(note.id)} data={{...note,tags}} onClick={() => handleDetails(note.id)} />)
                        
                    }

                  

                </Section>

            </Content>

            <NewNote to="/new">

                <FiPlus />
                Criar nota

            </NewNote>


        </Container>
    );
}
