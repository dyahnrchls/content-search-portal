// Card.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import Card, { CardProps } from "./Card";
import "@testing-library/jest-dom/extend-expect";

// Mock data for testing
const mockData: CardProps["data"] = {
  // Provide mock data structure as per your Content type
  image: {
    uri: "mock-image-url",
  },
  categories: [{ name: "Category 1" }, { name: "Category 2" }],
  name: "Mock Card Name",
  experts: [
    { lastName: "Doe", company: "Mock Company", firstName: "John", title: "" },
  ],
};

describe("Card Component", () => {
  it("renders correctly with loading state", () => {
    const { container } = render(<Card data={mockData} loading={true} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly with loaded state", () => {
    const { getByText } = render(<Card data={mockData} loading={false} />);

    // Test for specific elements rendered based on your component structure
    expect(getByText("30% Completed")).toBeInTheDocument();
    expect(getByText("Category 1, Category 2")).toBeInTheDocument();
    expect(getByText("Mock Card Name")).toBeInTheDocument();
    expect(getByText("Doe")).toBeInTheDocument();
    expect(getByText("Mock Company")).toBeInTheDocument();
  });
});
