import React from 'react'
import { render } from '@testing-library/react'
import Breadcrumb from './index';
import { BrowserRouter as Router } from 'react-router-dom'

const setup = () => {
    const breadcrumbList = [
        {pageTitle : "Home", pageHref: ""},
        {pageTitle : "House Details", pageHref: ""}
    ]
    const {container} = render (
        <Router>
            <Breadcrumb data={breadcrumbList} />
        </Router>    
    )
    const breadcrumb = container.querySelector(`.breadcrumb`);

    return {
        breadcrumb
    }
}

test("should have ol? with classname. breadcrumb and have text home & house detail", () => {
    const { breadcrumb } = setup()

    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toHaveTextContent("Home");
    expect(breadcrumb).toHaveTextContent("House Details");
})

test("should show date picker when click input field", () => {
    const { container, input } = setup()

    screen.debug()
    fireEvent.click(input, {button : 1});
    const datePickerChange = container.querySelector(`.date-range-wrapper`)
    // screen.debug()
    expect(datePickerChange).toBeInTheDocument();
})