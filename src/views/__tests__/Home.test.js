import React from 'react'
import Home from "../Home";
import { render } from '@testing-library/react'

test("render component", () => {
    const {getByTestId} = render(<Home />)
    const home = getByTestId("card")
    expect(home).toBeDefined()
})