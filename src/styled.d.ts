import 'styled-components';
// interface IPalette {
//   main: string
//   contrastText: string
// }
declare module 'styled-components' {
  export interface DefaultTheme {

    colors:{
        bgPrimary:string,
        btnPrimary:string,
        btnSecondary:string,
        bgSecondary:string,
        txtPrimary:string,
        txtLight:string,
        txtSecondary:string
    },
    fontSizes:{
        xs:string,
        small:string,
        medium:string,
        large:string,
        xl:string
    },
    fontWeights:{
        light:number,
        normal:number,
        bold:number,
    }
  }
}