import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("should render same test passed into title prop", async () => {
  render(<Header title="My Heading" />);
  const headingElement = screen.getByText(/my heading/i);
  expect(headingElement).toBeInTheDocument();
});

// getByRole

//it("should render same test passed into title prop", async () => {
//  render(<Header title="My Heading" />);
//  const headingElement = screen.getByRole("heading");
//  expect(headingElement).toBeInTheDocument();
//});

//it("should render same test passed into title prop", async () => {
//  render(<Header title="My Heading" />);
//  const headingElement = screen.getByRole("heading", {
//    name: "My Heading",
//  });
//  expect(headingElement).toBeInTheDocument();
//});

// Let's look at semantic ones
// getByTitle

//it("should render same test passed into title prop", async () => {
//  render(<Header title="My Heading" />);
//  const headingElement = screen.getByTitle("Header");
//  expect(headingElement).toBeInTheDocument();
//});

//it("should render same test passed into title prop", async () => {
//  render(<Header title="My Heading" />);
//  const headingElement = screen.getByTestId("header-1");
//  expect(headingElement).toBeInTheDocument();
//});

////* USING FINDBY
//test("should render same test passed into title prop", async () => {
//  render(<Header title="My Heading" />);
//  const headingElement = await screen.findByText(/my heading/i);
//  expect(headingElement).toBeInTheDocument();
//});

////* USING QUERYBY
//test("should render same test passed into title prop", async () => {
//  render(<Header title="My Heading" />);
//  const headingElement = screen.queryByText(/dogs/i);
//  expect(headingElement).not.toBeInTheDocument();
//});

////* USING getAllBy
//test("should render same test passed into title prop", async () => {
//  render(<Header title="My Heading" />);
//  const headingElements = screen.getAllByRole("heading");
//  expect(headingElements.length).toBe(2);
//});
