import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import LogInForm from "../LoginForm";

test("renders Login page", async () => {
  render(
    <Router>
      <LogInForm />
    </Router>
  );

  const usernameField = await screen.findByPlaceholderText("Enter username");
  expect(usernameField).toBeInTheDocument();

  const passwordField = await screen.findByPlaceholderText("Password");
  expect(passwordField).toBeInTheDocument();

  const submitButton = await screen.findByRole("button", { name: "Login" });
  expect(submitButton).toBeInTheDocument();
});
