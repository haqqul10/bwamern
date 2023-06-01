import React from "react";
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Button from "./index";

test("komponen ini seharusnya klo di klik itu ya pasti disable", () => {
    const {container} = render(<Button isDisabled></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument()
})
test("klo misalkan ada isloading maka compenentnya itu harus ngerender kata loading/spinner", () => {
    const {container, getByText} = render(<Button isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument()
    expect(container.querySelector('span')).toBeInTheDocument()
})

test("misalkan buttonnya itu typenya link dan external pastikan ngerender <a> tag", () => {
    const {container} = render(<Button href="" type="link" isExternal></Button>)

    expect(container.querySelector('a')).toBeInTheDocument()
})
test("misalkan buttonnya itu typenya link dan external pastikan ngerender <Link> tag", () => {
    const {container} = render(<Router><Button type="link"></Button></Router>)

    expect(container.querySelector('a')).toBeInTheDocument()
})