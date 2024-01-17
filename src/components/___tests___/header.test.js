import { screen, render, cleanup } from "@testing-library/react";
import articlesData from "../../data/artigos.json";
import Header from "../Header/Header";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});

test("verifica a quantidade de artigos que estao no JSON", () => {
  let countPages = 0;

  for (let i in articlesData) {
    countPages++;
    i++;
  }

  console.log(`Número de pageNames estao no JSON: ${countPages}`);

  expect(countPages).toBeGreaterThan(0);
});

test("verifica se existe um img no componente Header", () => {
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
