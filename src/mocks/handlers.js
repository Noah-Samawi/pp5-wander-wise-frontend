import { rest } from "msw";

const baseURL = "https://pp5-apis-e3b849e62ff3.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 3,
        owner: "Noah-Samawi",
        created_at: "23 May 2024",
        updated_at: "02 Jun 2024",
        name: "",
        content: "",
        image: "https://res.cloudinary.com/djebesftb/image/upload/v1/media/images/tinywow_tinywow_pexels-kelvin809-810775_57305395_57305437_fydzve",
      })
    );
  }),

  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.post(`${baseURL}dj-rest-auth/token/refresh/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
