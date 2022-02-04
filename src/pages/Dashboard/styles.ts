import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    width: 80%;
    margin: auto;
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 48px;
    color: #ff0000;
    max-width: 875px;
    line-height: 56px;

    margin-top: 80px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input{
        flex: 1;
        height: 40px;
        padding: 0 24px;
        border: 2px solid #fff;
        border-radius: 10px 0 0 10px;
        color: #3a3a3a;
        border-right: 0;

        &::placeholder{
            color: #a8a8d3;
        }
    }

    button {
        width: 210px;
        height: 40px;
        background: #ff0000;
        border-radius: 0 10px 10px 0;
        border: 0;
        color: #fff;
        font-weight: bold;

        transition: background-color: 0.2s;

        &:hover{
            background: ${shade(0.2, '#ff2121')};
        }
    }

    
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
    padding: 0 24px;
`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-widht: 700px;
    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: transform 0.2s;
        &:hover {
            transform: translate(10px);
        }
        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }
        div {
            margin: 0 16px;
            flex: 1;
            strong {
                font-size: 20px;
                color: #3d3d4d;
            }
            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }
        & + a {
            margin-top: 16px;
        }
    }
`;