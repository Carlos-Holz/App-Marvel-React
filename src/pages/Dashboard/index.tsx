import React, { useState, FormEvent } from "react";
import api from "../../services/api";

import { Title, Form, Box, Card1, Card2} from "./styles";

interface Character {
    id: string;
    title: string;
    thumbnail:{
        path: string;
        extension: string;
    };
  }

const Dashboard: React.FC = () => {
    const [characters, setCharacters] = useState<Character []> ([]);
    const [idPesquisa, setIdPesquisa] = useState('');

    const pesquisar = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
     
     api
        .get(`/comics/${idPesquisa}`)
        .then(response => {
          setCharacters(response.data.data.results)
        })
        .catch(err => console.log(err));
    };

    return (
        <>
            <Title>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" alt="" />
            </Title>
      
            <Form onSubmit={pesquisar}>
                <input onChange={e => setIdPesquisa(e.target.value)} placeholder="Digite um número para pesquisar um quadrinho da MARVEL..."/>
                <button type="submit">Pesquisar</button>
            </Form>

            
          <Box>
            <Card1>
                {characters.map(characters => {
                    return (
                        <Card2 key = {characters.id}>
                            <div id="img" />
                                <img src={`${characters.thumbnail.path}.${characters.thumbnail.extension}`}/>
                                <strong>{characters.title}</strong>
                        </Card2>
                    )
                })}
            </Card1>
          </Box>
        </>
    );
};

export default Dashboard;