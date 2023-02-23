import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../routes/Quote';
import Calculator from '../routes/Calculator';
import CalculatorComponent from '../components/Calculator'
import Button from '../components/Button';
import Layout from '../components/Layout'
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';

it('Quotes renders correctly', () => {
    const tree = renderer
        .create(<Quote />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('Calculator route renders correctly', () => {
    const tree = renderer
        .create(<Calculator />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('Calculator component renders correctly', () => {
    const tree = renderer
        .create(<CalculatorComponent />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('Button component renders correctly', () => {
    const tree = renderer
        .create(<Button />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('Layout component renders correctly', () => {
    const tree = renderer
        .create(
        <BrowserRouter><Layout /></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('Navbar component renders correctly', () => {
    const tree = renderer
        .create(
        <BrowserRouter><Navbar /></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

