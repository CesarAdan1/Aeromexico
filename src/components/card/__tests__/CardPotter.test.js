import React from 'react'
import CardPotter from "../CardPotter";
import { render } from '@testing-library/react'

test("render component", () => {
    const {getByTestId} = render(<CardPotter />)
    const card = getByTestId("card")
    expect(card).toBeDefined()
})