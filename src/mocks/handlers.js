import { rest } from "msw";

const baseURL = "https://pp5-wander-wise-frontend-63919ac97d38.herokuapp.com/";

// Mock API handlers for user authentication-related requests
export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({

      })
    );
  }),

  // Mock POST request for logging out
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  // Mock POST request for refreshing the authentication token
  rest.post(`${baseURL}dj-rest-auth/token/refresh/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
