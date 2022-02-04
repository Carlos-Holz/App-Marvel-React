import React, { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import Character from "../Characters";

import { Container, Title, Form, Error, Repositories } from "./styles";

interface Character {
    id: string;
    name: string;
    thumbnail:{
        path: string;
        extension: string;
    };
}

const Dashboard: React.FC = () => {
    const [newChar, setNewChar] = useState('');
    const [inputError, setInputError] = useState ('');
    const [characters, setCharacters] = useState <Character[]>(() => {
        const storageCharacter = localStorage.getItem('Characters',);

        if (storageCharacter){
            return JSON.parse(storageCharacter);
        }

        return[];
    });

    const handleAddRepository = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        if(!newChar){
            setInputError("Digite o nome de um personagem para pesquisar!!")
            return;
        }

        try {
            const response = await api.get<Character>(`characters/${newChar}`);
            const character = response.data;

            setCharacters([...characters, character])
            setNewChar('');
            setInputError('');

        } catch(err){
            setInputError("Personagem não encontrado.");
        }
    }

    useEffect(() => {
        localStorage.setItem(
            'Characters',
            JSON.stringify(characters)
        )
    }, [characters]);

    return (
        <Container>
            <Title>Pesquise personagens da Marvel por nome</Title>

            <Form onSubmit={handleAddRepository}>
            <input
                value={newChar}
                onChange={e => setNewChar(e.target.value)}
                placeholder="Digite o nome de um personagem..."
            />
                <button type="submit">Pesquisar</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                {characters.map(Character => (
                    <Link to="#">
                        <img src={`${characters.thumbnail.path}.${characters.thumbnail.extension}`}/>
                            <strong>{characters.name}</strong>
                    </Link>
                ))}
            </Repositories>
        </Container>
    )
}

export default Dashboard;