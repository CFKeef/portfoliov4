import styled from 'styled-components';

export const ResponsiveContentContainer = styled.div`
    @media (max-width: 30EM) {
        margin: 20px;
    }

    @media (min-width: 30EM) {
        max-width: 68em;
    }

    width: 100%;
`

export const SingleColumnContentContainer = styled(ResponsiveContentContainer)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`