import { rest } from "msw";

const baseURL = "https://pp5-wander-wise-frontend-63919ac97d38.herokuapp.com/";

// Mock API handlers for user authentication-related requests
export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        // "id": 3,
        // "owner": "noah",
        // "created_at": "22 May 2024",
        // "updated_at": "22 May 2024",
        // "name": "",
        // "content": "",
        // "image": "https://res.cloudinary.com/djebesftb/image/upload/v1/media/../default_profile_vm4gvx",

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
