import ReactGA from "react-ga";
import { AnalyticEvent } from "../AnalyticEvent/AnalyticEvent";
import { ButtonClicksDimension } from "../ButtonClicksDimension/ButtonClicksDimension";

function analyticEvent(event: AnalyticEvent) {
  ReactGA.event({ ...event });
}

/**
 * Create Custom Dimension 1: Total Number of Button Clicks
 *
 * @link [add link to Google Spec sheet here]
 * @param dimension formatted button clicks (`The button was clicked ${count} times.`)
 */
function setButtonClicksDimension(dimension: ButtonClicksDimension) {
  ReactGA.set({ dimension1: dimension.buttonClicks });
}

/**
 * Manages the aforementioned dimension sets and sends initialized ReactGA call
 */
export const AnalyticService = {
  initialize: (
    trackingCode: string,
    options?: ReactGA.InitializeOptions | undefined,
  ) => {
    const defaultOptions: ReactGA.InitializeOptions = {
      titleCase: false,
      ...(options || {}),
    };
    ReactGA.initialize(trackingCode, defaultOptions);
  },
  analyticEvent,
  setButtonClicksDimension,
};
