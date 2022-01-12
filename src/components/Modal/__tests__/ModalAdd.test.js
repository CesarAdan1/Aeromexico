import React from 'react'
import ModalAdd from "../ModalAdd";
import { render } from '@testing-library/react'

test("render component", () => {
    const {getByTestId} = render(<ModalAdd />)
    const modal = getByTestId("modal")
    expect(modal).toBeDefined()
})