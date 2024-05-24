import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoApp from "./App";

describe("TodoApp", () => {
  test("renders TodoApp component", () => {
    render(<TodoApp />);
    expect(screen.getByText(/Todo App/i)).toBeInTheDocument();
  });

  test("adds a new task", () => {
    render(<TodoApp />);
    const inputElement = screen.getByPlaceholderText(/Enter task.../i);
    const addButton = screen.getByText(/Add Task/i);

    fireEvent.change(inputElement, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText(/New Task/i)).toBeInTheDocument();
  });

  test("toggles task completion", () => {
    render(<TodoApp />);
    const inputElement = screen.getByPlaceholderText(/Enter task.../i);
    const addButton = screen.getByText(/Add Task/i);

    fireEvent.change(inputElement, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(screen.getByText(/New Task/i)).toHaveStyle("text-decoration: line-through");
  });
});
