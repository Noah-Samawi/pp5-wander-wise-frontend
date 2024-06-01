import { render, screen } from '@testing-library/react';
import App from './App';
import NavBar from './components/NavBar';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});
