import React from 'react'
import Footer from "../Footer";
import { render } from '@testing-library/react'

test("render component", () => {
    const {getByTestId} = render(<Footer />)
    const footer = getByTestId("card")
    expect(footer).toBeDefined()
})