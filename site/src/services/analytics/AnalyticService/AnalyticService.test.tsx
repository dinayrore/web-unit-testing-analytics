import ReactGA from "react-ga";
import { createButtonClicksDimension } from "../ButtonClicksDimension/ButtonClicksDimension";
import { ReactGASetCall } from "../ReactGACall";

import { AnalyticService } from "./AnalyticService";

describe("Analytics service integration suite", () => {
  beforeEach(() => {
    ReactGA.testModeAPI.resetCalls();
    AnalyticService.initialize("UA-000000-2", { testMode: true });
    ReactGA.testModeAPI.resetCalls();
    });

  

  test("Expect answered questions dimension tracking to have valid values", () => {
    const dimension = createButtonClicksDimension(9001);

    AnalyticService.setButtonClicksDimension(dimension);
    expect(ReactGA.testModeAPI.calls).toHaveLength(1);

    type Calls = [ReactGASetCall];
    const [set] = ReactGA.testModeAPI.calls as Calls;

    const [setType, gaSet] = set;
    expect(setType).toEqual("set");
    expect(gaSet.dimension1).toEqual(dimension.buttonClicks);
  });

  
});
