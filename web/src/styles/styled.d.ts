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
      title: string;
      buttonText: string;
      backgroundButton: string;
      backgroundBox: string;
      inputBorder: string;
    };
  }
}
