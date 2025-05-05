import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';
import navLinks from './navLinks';

// Mock next/navigation's usePathname hook
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

import { usePathname } from 'next/navigation';

describe('Navbar component', () => {
  beforeEach(() => {
    // By default, simulate being on the home page.
    (usePathname as jest.Mock).mockReturnValue('/');
  });

  it('renders all nav links', () => {
    render(<Navbar />);
    navLinks.forEach(link => {
      // Check for the existence of each link's text.
      expect(screen.getByText(link.name)).toBeInTheDocument();
    });
  });

  it('applies active classes to the current path', () => {
    (usePathname as jest.Mock).mockReturnValue('/characters');
    render(<Navbar />);
    
    // Get the Characters link
    const charactersLink = screen.getByText('Characters');
    
    // Check that it has the active classes
    expect(charactersLink.parentElement?.querySelector('a')).toHaveClass('font-bold', 'text-white', 'active', 'underline');
    
    // Check other links don't have active classes
    const homeLink = screen.getByText('Home');
    expect(homeLink.parentElement?.querySelector('a')).not.toHaveClass('font-bold', 'text-white', 'active', 'underline');
  });
});