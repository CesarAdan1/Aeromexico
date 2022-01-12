import React from 'react'
import CardPotter from "../CardPotter";
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import { container } from 'webpack';

const info = {
    eyeColour: 'blue', 
    hairColour:'brown', 
    name: 'Jimmy', 
    dateOfBirth: '11/02/200', 
    gender:'Masculino',
    house: 'Gryphinfor', 
    alive: true, 
    image: "", 
    hogwartsStudent: true
}

test("render component", () => {
    const {getByTestId} = render(<CardPotter />)
    const card = getByTestId("card")
    expect(card).toBeDefined()
})


describe('cardInfo', () => {
    test('return the props about the card', () => {
        const { getByText } = render(
            <CardPotter 
                item={{
                    eyeColour: 'blue', 
                    hairColour:'brown', 
                    name: 'Jimmy', 
                    dateOfBirth: '11/02/2000', 
                    gender:'Masculino',
                    house: 'Gryphinfor', 
                    alive: true, 
                    image: '', 
                    hogwartsStudent: true
                }}
            />
        )

        expect(getAllByText('blue')).toBeInTheDocument()
        expect(getAllByText('brown')).toBeInTheDocument()
        expect(getAllByText('Jimmy')).toBeInTheDocument()
        expect(getAllByText('11/02/2000')).toBeInTheDocument()
        expect(getAllByText('Masculino')).toBeInTheDocument()
        expect(getAllByText('Gryphindor')).toBeInTheDocument()
        expect(getAllByText('')).toBeInTheDocument()

    })
})
