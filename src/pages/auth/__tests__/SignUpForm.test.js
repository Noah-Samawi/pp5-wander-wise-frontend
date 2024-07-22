import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect'; // Ensure this import for the toBeInTheDocument matcher
import SignUpForm from "../SignUpForm";

test("renders Sign Up page", () => {
  render(
    <Router>
      <SignUpForm />
    </Router>
  );

  // Check to see if username field is rendered to the user
  const usernameField = screen.getByPlaceholderText("Username");
  expect(usernameField).toBeInTheDocument();

  // Check to see if password field is rendered to the user
  const passwordField = screen.getByPlaceholderText("Password");
  expect(passwordField).toBeInTheDocument();

  // Check to see if confirm password field is rendered to the user
  const confirmPasswordField = screen.getByPlaceholderText("Confirm password");
  expect(confirmPasswordField).toBeInTheDocument();

  // Check to see if sign up button is rendered to the user
  const signUpButton = screen.getByRole("button", { name: /sign up!/i });
  expect(signUpButton).toBeInTheDocument();
});
