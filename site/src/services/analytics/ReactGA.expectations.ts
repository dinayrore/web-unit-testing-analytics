/*
 * This file will follow the examples outlined in your Google Analytics Spec Sheet:
 */

import { AnalyticEventAction } from "./AnalyticEvent/AnalyticEventAction";
import { AnalyticEventCategory } from "./AnalyticEvent/AnalyticEventCategory";
import { AnalyticEventLabel } from "./AnalyticEvent/AnalyticEventLabel";
import { ReactGASendCall, ReactGASetCall } from "./ReactGACall";

export function expectButtonTrackingToMatchSpec(
  sendCall: ReactGASendCall,
  name: string,
) {
  const [type, gaEvent] = sendCall;

  const label =
    name.length > 0
      ? AnalyticEventLabel.withName
      : AnalyticEventLabel.withoutName;

  expect(type).toEqual("send");
  expect(gaEvent.hitType).toEqual("event");
  expect(gaEvent.eventCategory).toEqual(AnalyticEventCategory.button);
  expect(gaEvent.eventAction).toEqual(AnalyticEventAction.click);
  expect(gaEvent.eventLabel).toEqual(label)
}

/**
 * Create Custom Dimension 1: Total Number of Button Clicks
 *
 * @link [add link to Google Spec sheet here]
 * @param dimension formatted button clicks (`The button was clicked ${count} times.`)
 */
export function expectAnsweredQuestionsTrackingToMatchSpec(
  setCall: ReactGASetCall,
  count: number,
) {
  const [type, gaSet] = setCall;

  expect(type).toEqual("set");
  expect(gaSet.dimension1).toEqual(`The button was clicked ${count} times.`);
}