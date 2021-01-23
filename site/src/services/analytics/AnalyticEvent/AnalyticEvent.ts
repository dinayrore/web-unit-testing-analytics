import { AnalyticEventAction } from "./AnalyticEventAction";
import { AnalyticEventCategory } from "./AnalyticEventCategory";
import { AnalyticEventLabel } from "./AnalyticEventLabel";

export interface AnalyticEvent {
  category: AnalyticEventCategory;
  action: string;
  label?: string;
}

export function createButtonEvent(
  name: string,
): AnalyticEvent {
  
  const label =
    name.length > 0
      ? AnalyticEventLabel.withName
      : AnalyticEventLabel.withoutName;

  return {
    category: AnalyticEventCategory.button,
    action: AnalyticEventAction.click,
    label,
  };
}