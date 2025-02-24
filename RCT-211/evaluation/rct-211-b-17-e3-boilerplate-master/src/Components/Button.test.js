import { render,screen } from "@testing-library/react";
import App from "../App";

describe("Pagination Testing", () => {
    test("Should have Button", () => {
      render(<App />);
      let button = screen.getByTestId("color");
      expect(button).toBeInTheDocument();
    });
    
   
  });
