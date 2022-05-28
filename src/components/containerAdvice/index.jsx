import styledComponents from "styled-components";
import ContainerMessage from "../containerMessages";

const Container = styledComponents.div`
    border: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background: hsl(218, 23%, 16%);
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

const ContainerMessages = styledComponents.div`
    width: 35%;
    height: 40vh;
    background: hsl(217, 19%, 24%);
    border-radius: 15px;
    box-shadow: 25px 25px 30px black;
`;



function Advice(){

    return(
        <Container className="containerAdvice">
            <ContainerMessages className="containerMessages">
                <ContainerMessage/>
            </ContainerMessages>
        </Container>
    )

}

export default Advice;