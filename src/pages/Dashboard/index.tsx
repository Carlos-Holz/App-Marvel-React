import React, { useState, FormEvent } from 'react';
import api from '../../services/api';

import { Container, Title, Form, Chars } from './styles';

interface Character {
    id: string;
    name: string;
    thumbnail:{
        path: string;
        extension: string;
    };
}

const Dashboard: React.FC = () => {
    const [newChar, setnewChar] = useState('');
    const [chars, setChars] = useState<Character[]>([]);

    const pesquisarChar = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try{
            const response = await api.get(`${newChar}/json/`);
            const charDados = response.data;

            setChars([...chars, charDados]);

        } catch(err){

        }
    };

    return (
        <Container>
            <Title>Pesquise personagens da MARVEL</Title>

            <Form onSubmit={pesquisarChar}>
                <input
                    type="text"
                    placeholder="Digite o nome do personagem..."
                    onChange={e => setnewChar(e.target.value)}
                />
                <button type="submit">Pesquisar</button>
            </Form>

            <Chars>
                {chars.map(char => (
                    <a href="#">
                        <p className='uf'>{char.id}</p>
                        <div>
                            <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`}/>
                            <strong>{char.name}</strong>
                        </div>
                    </a>
                ))}
            </Chars>
        </Container>
    );
};

export default Dashboard;