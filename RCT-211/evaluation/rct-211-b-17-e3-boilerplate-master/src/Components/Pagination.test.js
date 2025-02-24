import { render,screen } from "@testing-library/react";
import App from "../App";

describe("Pagination Testing", () => {
    test("Should have Previous Button", () => {
      render(<App />);
      let prev = screen.getByTestId("prev1");
      expect(prev).toBeInTheDocument();
    });
    test("Should have Next Button", () => {
      render(<App />);
      let next = screen.getByTestId("next1");
      expect(next).toBeInTheDocument();
    });
   
  });
