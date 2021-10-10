import React from 'react';
import styled from 'styled-components'


const StyleButton = styled.button`
width:170px;
height: 50px;
background-color:#FFFFFF;
border: 1px solid #DFE5EC;
border-radius: ${props => props.className || 'none'};
cursor:pointer;
color: #4A4A4A;
    &:active{
    background-color:#2196F3;
    color: #FFFFFF;
    }
    &:hover {
    border: 1px solid #2196F3;

    }
    &:focus {
    background: #2196F3;
    color: white
}
`

interface IButton {
    className?: string;
    children?: string;
    filter?: () => void
}


const Button = (props: IButton) => {
    const {filter} = props
    return (
        < >
            <StyleButton onClick={filter} {...props}/>
        </>
    );
};

export default Button;