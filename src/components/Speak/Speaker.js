import React from "react";
import styled from "styled-components";


const Container = styled.div`
    width: 480px;
    height: 160px;
`;


const Speaker=() =>{

    return (
        <Container>
            <iframe src="https://giphy.com/embed/aw6CWyyLQ8WyRuktxR" width="480" height="160" frameBorder="0" class="giphy-embed" allowFullScreen title="Giphy"></iframe><p><a href="https://giphy.com/gifs/rainhouse-rainhouseco-sound-file-wav-aw6CWyyLQ8WyRuktxR">Speaking Start</a></p>

        </Container>

    );

}

export default Speaker;