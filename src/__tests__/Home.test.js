import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react'
import 'jest-dom/extend-expect'
import Home from './../components/Home'

afterEach(cleanup);

global.window = { location: { pathname: null } };

describe('renders without crashing', () => {
    test('renders home page', () => {
        const { asFragment} = render( 
        <BrowserRouter>
            <Route path="/" component={ Home} />   
        </BrowserRouter>);
        expect(asFragment()).toMatchSnapshot();
});
    test('renders text correctly', () =>{
        const { getByTestId} = render( 
        <BrowserRouter>
            <Route path="/" component={ Home} />   
        </BrowserRouter>);
        expect(getByTestId("titleText")).toHaveTextContent('Customer Success Portal');
    })
})

describe('renders login and sign up pages', () =>{
    test('test link', () => {
        const { getByText } = render( 
        <BrowserRouter>
            <Route path="/" component={ Home} />   
        </BrowserRouter>);
        fireEvent.click(getByText("Log In"));
        expect(global.window.location.pathname).toEqual('/signin');
    });
    
    test('test link', () => {
        const { getByText } = render( 
        <BrowserRouter>
            <Route path="/" component={ Home} />   
        </BrowserRouter>);
        fireEvent.click(getByText("SignUp"));
        expect(global.window.location.pathname).toEqual('/signup');
    })
        
})
