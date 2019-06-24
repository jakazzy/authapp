import React from 'react'
import { BrowserRouter,Route, Link } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react'
import 'jest-dom/extend-expect'
import Home from './../components/Home'

afterEach(cleanup);

describe('renders without crashing', () => {
    test('renders home page', () => {
    const { asFragment} = render(
                                    <BrowserRouter>
                                    <Route path="/" component={ Home} />
                                        {/* <Link to="/"><Home/></Link> */}
                                    </BrowserRouter>);
    expect(asFragment()).toMatchSnapshot();
});
})
