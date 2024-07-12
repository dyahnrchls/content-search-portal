// Navbar.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Navbar, { NavbarProps } from "./Navbar";

// Mock the image import
jest.mock("../../assets/logo.png", () => "logo.png");

const renderNavbar = (props: Partial<NavbarProps> = {}) => {
  const defaultProps: NavbarProps = {
    keyword: "",
    setKeyword: jest.fn(),
  };
  return render(<Navbar {...defaultProps} {...props} />);
};

describe("Navbar Component", () => {
  it("renders the logo", () => {
    renderNavbar();
    expect(screen.getByRole("img")).toHaveAttribute("src", "logo.png");
  });

  it("renders the input element", () => {
    renderNavbar();
    expect(screen.getByPlaceholderText("Search..")).toBeInTheDocument();
  });

  it("updates the input value on change", async () => {
    const setKeyword = jest.fn();
    renderNavbar({ keyword: "", setKeyword });

    const input = screen.getByPlaceholderText("Search..") as HTMLInputElement;
    await userEvent.type(input, "test keyword");
    expect(setKeyword).toHaveBeenCalledTimes(12);
  });

  it("displays the correct initial input value", () => {
    renderNavbar({ keyword: "initial value" });

    const input = screen.getByPlaceholderText("Search..") as HTMLInputElement;
    expect(input.value).toBe("initial value");
  });
});
