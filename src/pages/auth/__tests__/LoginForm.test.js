import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect'; // Ensure this import for the toBeInTheDocument matcher
import LogInForm from "../LoginForm";

test("renders Login page", () => {
  render(
    <Router>
      <LogInForm />
    </Router>
  );

  // Check to see if username field is rendered to the user
  const usernameField = screen.getByPlaceholderText("Enter username");
  expect(usernameField).toBeInTheDocument();

  // Check to see if password field is rendered to the user
  const passwordField = screen.getByPlaceholderText("Password");
  expect(passwordField).toBeInTheDocument();

  // Check to see if submit button is rendered to the user
  const submitButton = screen.getByRole("button", { name: "Login" });
  expect(submitButton).toBeInTheDocument();
});
