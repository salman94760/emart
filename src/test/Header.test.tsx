import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../components/HeaderTest";
import Counter from "../components/Counter";

describe("Header", () => {
  it("renders title", () => {
    render(<Header title="Dashboard" />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });
});

// test("increments counter", async () => {
//   render(<Counter />);

//   const button = screen.getByRole("button", {
//     name: /increment/i,
//   });

//   await userEvent.click(button);

//   expect(screen.getByText("1")).toBeInTheDocument();
// });
