import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByTestId } = render(<App />);
  const indexApp = getByTestId("index-app");
  expect(indexApp).toBeInTheDocument();
});

/* https://ithelp.ithome.com.tw/articles/10223242 */
