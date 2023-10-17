import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home Page", () => {
  it("Renders Home Page", () => {
    render(<Home />);
    const titleValue = screen.getByRole("heading");
    expect(titleValue).toBeInTheDocument();
    expect(titleValue).toHaveTextContent("Meal Maker");

    const searchButton = screen.getByRole("button");
    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toHaveTextContent("Search");

    const searchInput = screen.getByRole("textbox");
    expect(searchInput).toBeInTheDocument();
  });
});
