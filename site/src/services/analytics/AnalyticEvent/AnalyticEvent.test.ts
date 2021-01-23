import { createButtonEvent} from "./AnalyticEvent";
import { AnalyticEventAction } from "./AnalyticEventAction";
import { AnalyticEventCategory } from "./AnalyticEventCategory";
import { AnalyticEventLabel, name } from "./AnalyticEventLabel";

describe("Analytic event composition suite", () => {
  test("Expect button event with name to have valid values", () => {
    const event = createButtonEvent(name);
    const action = "CLICK";
    const label = `Kris clicked the button`;

    expect(event.category).toEqual(AnalyticEventCategory.button);
    expect(event.action).toEqual(AnalyticEventAction.click);
    expect(event.label).toEqual(AnalyticEventLabel.withName);
  });

  test("Expect email submit button event without phone number to have valid values", () => {
    // Write Unit Test Here
  });
});
