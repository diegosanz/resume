import { createGlobalStyle } from "styled-components";
// eslint-disable-next-line import/no-webpack-loader-syntax
import normalizeCss from "!!raw-loader!../../../node_modules/normalize.css/normalize.css";

export const NormalizeCss = createGlobalStyle`${normalizeCss}`;
