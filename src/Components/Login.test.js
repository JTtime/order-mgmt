import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LoginPage from "./Login";
import { mockUsers } from "../data/users";
import "@testing-library/jest-dom";

describe("LoginPage", () => {
  test("renders the login form", () => {
    render(<LoginPage />);
    // expect(screen.getAllByText("Login")).toBeInTheDocument();
    expect(screen.getByLabelText("Email:")).toBeInTheDocument();
    expect(screen.getByLabelText("Password:")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  test("calls handleLogin function with valid credentials", () => {
    const handleLoginMock = jest.fn();
    render(<LoginPage handleLogin={handleLoginMock} />);
    const emailInput = screen.getByLabelText("Email:");
    const passwordInput = screen.getByLabelText("Password:");
    const submitButton = screen.getByTestId("submit-button");

    fireEvent.change(emailInput, { target: { value: mockUsers[0].email } });
    fireEvent.change(passwordInput, {
      target: { value: mockUsers[0].password },
    });
    fireEvent.click(submitButton);

    expect(handleLoginMock).toHaveBeenCalledTimes(1);
  });

  test("displays error message with invalid credentials", () => {
    const handleLoginMock = jest.fn();
    render(<LoginPage handleLogin={handleLoginMock} />);
    const emailInput = screen.getByLabelText("Email:");
    const passwordInput = screen.getByLabelText("Password:");
    const submitButton = screen.getByTestId("submit-button");

    fireEvent.change(emailInput, { target: { value: "invalid@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    expect(handleLoginMock).not.toHaveBeenCalled();
    expect(screen.getByText("Invalid email or password")).toBeInTheDocument();
  });
});
