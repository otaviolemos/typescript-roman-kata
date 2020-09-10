import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      li: string;
      text: string;
      inputColor: string;
      inputPlaceholder: string;
      strongSchedule: string;
      appointmentBackground: string;
      dayPicker: string;
      dayAvailableBackground: string;
      dayAvailableBackgroundHover: string;
    };
  }
}
