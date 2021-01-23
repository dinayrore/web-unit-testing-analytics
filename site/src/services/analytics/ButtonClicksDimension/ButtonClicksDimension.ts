export interface ButtonClicksDimension {
  buttonClicks: string;
}

/**
 * Create Custom Dimension 1: Total Number of Button Clicks
 *
 * @param count
 */
export function createButtonClicksDimension(
  count: number,
): ButtonClicksDimension {
  return { buttonClicks: `The button was clicked ${count} times.` };
}
