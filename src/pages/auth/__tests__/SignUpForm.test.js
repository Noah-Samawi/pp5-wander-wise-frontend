import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignUpForm from '../SignUpForm';  // Adjust the import according to your actual file structure
import { setupServer } from 'msw/node';
import { rest } from 'msw';

// Mock Service Worker setup
const server = setupServer(
  rest.post('/dj-rest-auth/registration/', (req, res, ctx) => {
    return res(ctx.json({ user: { id: 1, username: 'testuser' }, token: 'testtoken' }));
  }),
  rest.post('/dj-rest-auth/token/refresh/', (req, res, ctx) => {
    return res(ctx.status(200));
  })
);

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios).
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

test('renders sign up form', async () => {
  render(
    <MemoryRouter>
      <SignUpForm />
    </MemoryRouter>
  );

  // Assert that the form is rendered
  expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();

  // Use waitFor to wait for any asynchronous operations
  await waitFor(() => {
    // Your additional assertions if needed
  });
});
