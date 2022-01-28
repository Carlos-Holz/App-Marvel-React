import React from "react";

import { Container, Title, Form } from "./styles";

const Dashboard: React.FC = () => {
    return (
        <Container>
            <Title>Pesquise personagens da Marvel por nome</Title>

            <Form>
                <input type="text" placeholder="Digite o nome de um personagem..." />
                <button type="submit">Pesquisar</button>
            </Form>
        </Container>
    )
}

export default Dashboard;