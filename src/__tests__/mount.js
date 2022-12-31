import { render } from "@testing-library/vue";

import Home from "../views/Home.vue";

test("Testing components", () => {
  const { getByText } = render(Home);
});
