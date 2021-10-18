import styled from "styled-components";
import React from 'react'

const InputOption = ({ title, Icon, color }) => {
    return (
        <Container>
            <Icon style={{ color: color }} fontSize="small" />
            <h4>{title}</h4>
        </Container>
    )
}

export default InputOption


const Container = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
    color: gray;
    cursor: pointer;
    padding: 13px;
    &:hover {
        background-color: whitesmoke;
        border-radius: 0.4rem;
    }
    h4 {
        margin-left: 5px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.6);
    }
`;
