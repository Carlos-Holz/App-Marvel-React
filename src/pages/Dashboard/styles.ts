import styled from 'styled-components';
import { shade } from 'polished';

export const Box = styled.main`
    display: flex;
    flex-wrap: wrap;

    height: 100%;
    width: 100%;
`;

export const Title = styled.image`
    display: flex;
    justify-content: center;
    margin-top: 5px;
    margin-left: 400px;
    margin-bottom: 10px;
    width: 100px;
    height: 100px;
    z-index: 1;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 100%;
    display: flex;

    input::placeholder {
        color: #ff0000;
    }

    input {
        flex: 1;
        height: 40px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #ff0000;
        margin-bottom: 25px;
    }
    button {
        width: 210px;
        height: 40px;
        background: #ff0000;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;
        &:hover {
            background: ${shade(0.2, "#ff0000")};
        }
    }
`;

export const Card1 = styled.div`
    display: flex;
    flex-wrap: wrap;
    

    justify-content: center;
`;

export const Card2 = styled.div`
    background: #ff0000;
    height: 350px;
    width: 300px;
    margin: 10px;
    margin-left: 300px;
    border-radius: 10px;
    overflow: hidden;

    strong {
        color: #ff0000;
        padding: 10px;
        justify-content: center;
        display: flex;
    }

    img{
        width: 300px;
        height: 350px;
        z-index: 1;
    }
`;