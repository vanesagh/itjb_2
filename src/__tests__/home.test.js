import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

jest.mock('next/router', () => require('next-router-mock'));

describe('Home page', () => {
  it('renders a heading with the portofolio owner name', () => {
    render(<Home name="Vanesa GH" />);
 
    const heading = screen.getByRole('heading', {
      name: /Vanesa GH/i,
    });
 
    expect(heading).toBeInTheDocument();
  });

  it('renders a heading with the portofolio owner summary', () => {
    render(<Home summary="My summary" />);
 
    const heading = screen.getByText("My summary");
 
    expect(heading).toBeInTheDocument();
  });
});