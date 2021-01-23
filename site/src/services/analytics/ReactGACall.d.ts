export interface ReactGAEvent {
  eventAction: string;
  eventCategory: string;
  eventLabel: string;
  hitType: "event";
}

export interface ReactGASetDimension {
  dimension1?: string;
}

export type ReactGACreateCall = ["create", string, "auto"];
export type ReactGASendCall = ["send", ReactGAEvent];
export type ReactGASetCall = ["set", ReactGASetDimension];
