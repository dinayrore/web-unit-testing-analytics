import React from "react";
import { AnalyticEvent } from "../../services/analytics/AnalyticEvent/AnalyticEvent"
import { AnalyticService } from "../../services/analytics/AnalyticService/AnalyticService"


/**
 * Call to Action Events
 */
export type ButtonEvent = React.UIEvent<HTMLButtonElement>;

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  dataTestID: string;
  clickAction?: (e: ButtonEvent) => void;
  analyticsParameters?: AnalyticEvent;
}

const Button: React.FC<ButtonProps> = ({
  clickAction,
  dataTestID,
  analyticsParameters,
}) => {
  


  const handleButtonClickAction = (e: ButtonEvent) => {
    if (clickAction) clickAction(e);

    if (analyticsParameters) {
      AnalyticService.analyticEvent(analyticsParameters);
    }
  };

  return (

    <div className="big-button-space">
      <button className="big-button" 
      data-testid={dataTestID}
      onClick={(e) => {
          handleButtonClickAction(e);
      }} />
    </div>


  
  );
};

export default Button;
