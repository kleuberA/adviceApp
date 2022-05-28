import { useState } from 'react';
import styledComponents from 'styled-components';
import ImagemIcon from './pattern-divider-desktop.svg';
import ImageIconDice from './icon-dice.svg';

const DivContainerMensagemTemplate = styledComponents.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

const ImagemDivider = styledComponents.img`
    width: 95%;
    padding: 15px 0;
`;

const NumberAdviceText = styledComponents.h1`
    font-size: 15px;
    color: hsl(150, 100%, 66%);
    font-family: 'Manrope', sans-serif;
    text-align: center;
    padding: 2vh 0;
`;

const MensagemAdviceText = styledComponents.h1`
    color: hsl(193, 38%, 86%);
    font-size: 25px;
    font-family: 'Manrope', sans-serif;
    text-align: center;
    padding: 1vh 0;
`;

const ImagemIconButton = styledComponents.button`
    background: url(${ImageIconDice}), hsl(150, 100%, 66%);
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    border: none;
    border-radius: 50%;
    text-align: center;
    background-position: center;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 15px hsl(150, 100%, 66%);
    }
    transition: .5s;
`;



function ContainerMessages() {

    let [mensagem, setMensagem] = useState('Nenhuma mensagem, clique no botão para aparecer uma nova mensagem.');
    let [idMensagem, setIdMensagem] = useState('0');


    const handleClick = () =>{
        let numberRandom = Math.floor(Math.random() * 100);

        fetch(`https://api.adviceslip.com/advice/${numberRandom}`)
        .then(function(response){return response.json()})
        .then(data => {
            console.log(data.slip.advice);
            mensagem = data.slip.advice;
            setMensagem(mensagem);
            idMensagem = data.slip.id;
            setIdMensagem(idMensagem);
        })
    }

    return(
        <DivContainerMensagemTemplate>
            <NumberAdviceText>Advice #{idMensagem}</NumberAdviceText>
            <MensagemAdviceText>"{mensagem}"</MensagemAdviceText>
            <ImagemDivider src={ImagemIcon} alt="" />
            <ImagemIconButton onClick={handleClick} alt=""></ImagemIconButton>
        </DivContainerMensagemTemplate>
    )

}

export default ContainerMessages;