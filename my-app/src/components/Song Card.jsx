import React from 'react'
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { FastRewind, Shuffle, FastForward } from '@mui/icons-material'

const Div = styled.div
    `width: 400px;
    height: 550px;
    background-color: lightgray;
    border-radius: 15px`;

const Controls = styled.div
    `display: flex;
    flex-direction: row;

    & * {
    width: 300px;
    height: 300px;
    }`;


function songCard() {
    return (
        <Div>
            <Controls>
                <Button>Click Me!</Button>
                <FastRewind></FastRewind>
                <FastForward></FastForward>
                <Shuffle></Shuffle>
            </Controls>
        </Div>
    )
}
export default songCard