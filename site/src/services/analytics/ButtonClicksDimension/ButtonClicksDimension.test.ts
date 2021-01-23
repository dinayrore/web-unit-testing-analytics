import { createButtonClicksDimension } from "./ButtonClicksDimension";

describe("Button click dimension composition suite", () => {
  test("Expect button click dimension to match formatting", () => {
    const count = 9001;
    const dimension = createButtonClicksDimension(
      count,
    );

    expect(dimension.buttonClicks).toEqual(`The button was clicked ${count} times.`);
  });
});
