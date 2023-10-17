import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RecipieModal from "../app/components/RecipieModal";
describe("RecipieModal", () => {
  it("Renders RecipieModal", () => {
    render(<RecipieModal />);
    const searchButton = screen.getByRole("button");
    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toHaveTextContent("CLOSE");
  });
});
