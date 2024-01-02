import { screen, render, cleanup } from "@testing-library/react";
import pageNames from "../Header/headernames.json";
import Header from "../Header/Header";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});

test("verifica a quantidade de pageNames estao no JSON para utilizar no Header", () => {
  let countPages = 0;

  for (let i in pageNames) {
    countPages++;
  }

  console.log(`Número de pageNames estao no JSON: ${countPages}`);

  expect(countPages).toBeGreaterThan(0);
});

test("verifica se existe um svg no componente Header", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const svgElement = screen.getByTestId("svg-icon");

  expect(svgElement).toBeInTheDocument();
});

test("snapshot", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    .toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
