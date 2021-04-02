import { css } from 'styled-components';

import PNBoldWoff from "../public/fonts/bold.woff";
import PNBoldWoff2 from "../public/fonts/bold.woff2";
import PNRegWoff from "../public/fonts/normal.woff";
import PNRegWoff2 from "../public/fonts/normal.woff2";
import PNSemBolWoff from "../public/fonts/semibold.woff";

export const fonts = css`
    @font-face {
        font-family: 'proxima_nova';
        src: 
        url(${PNBoldWoff2}) format('woff2'),
        url(${PNBoldWoff}) format('woff');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'proxima_nova';
        src: 
        url(${PNRegWoff2}) format('woff2'),
        url(${PNRegWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'proxima_nova';
        src: 
        url(${PNSemBolWoff}) format('woff');
        font-weight: 600;
        font-style: normal;
    }
`;
