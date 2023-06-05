import React from "react";
import { Component } from "react";
import styled from "styled-components";


const container = styled.div`
    width : 480px;
    height: 160px;
`

const Speaker=() =>{

    return (
        <container>
            <iframe src="https://giphy.com/embed/aw6CWyyLQ8WyRuktxR" width="480" height="160" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/rainhouse-rainhouseco-sound-file-wav-aw6CWyyLQ8WyRuktxR"></a></p>

        </container>

    );

}

export default Speaker;