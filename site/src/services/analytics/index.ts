export * from "./AnalyticEvent/AnalyticEvent";
export * from "./AnalyticEvent/AnalyticEventCategory";
export * from "./AnalyticService/AnalyticService";
export * from "./ButtonClicksDimension/ButtonClicksDimension";
export * from "./ReactGA.expectations";
export * from "./ReactGACall";

// What we know:
// - We need to track events
// - We need to track custom dimensions
// - We know that custom dimensions need composition
// - We know that actions and labels for event need composition
// - We know that we have a variety of event categories
// - We have events that should only be tracked during specific actions (i.e. Submit)
// - We know that action evaluations are done using magic values
// - We know we have event composition logic duplication

// What we want:
// - We want a clear separation of ReactGA and our composition logic
// - We want a ReactGA wrapper that provide explict traking interfaces
// - We want a ReactGA wrapper that provide explict custom dimensions
// - We want composition logic to be unit tested
// - We want our ReactGA wrapper integration tested
// - We want our analytic contract integration tested using our views
