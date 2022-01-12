import React from 'react'
import Button from "../Button";
import { render } from '@testing-library/react'

test("render component", () => {
    const {getByTestId} = render(<Button />)
    const btn = getByTestId("button")
    expect(btn).toBeDefined()
})
