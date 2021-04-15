import styled from 'styled-components';

export const HeaderText = styled.h1`
    margin: 0;
    font-size: 2rem;
    color: var(--text);
    font-weight: 700;
    width: 100%;
    text-align: center;
    margin: .5REM;
`
export const ParagraphText = styled.p`
    margin: 0;
    font-size: 1.1REM;
    color: var(--text);
   
    margin: .5REM;

    @media (max-width: 30em) {
        width: 100%; 
        text-align: center;
    }

    @media (min-width: 30em) {
        width: 75%;
        text-align: center;
    }
`

export const SectionSplitterText = styled.span`
    color: var(--purple);
    text-align: center;
    font-size: .9REM;
    letter-spacing: var(--letterspacing);
    text-transform: uppercase;
    font-weight: 600;
    
    margin: .5REM 0;

    @media (max-width: 30em) {
        width: 100%;
    }

    @media (min-width: 30em) {
        width: 75%;
    }
`
