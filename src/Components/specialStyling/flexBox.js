import styled, { css } from 'styled-components';

export const Flex = styled.div`
    display: flex;

    ${({ column }) => column && css`
        flex-direction: column;
    `}

    ${({ justify }) => justify && css`
        justify-content: ${justify};
    `}

    ${({ align }) => align && css`
        align-content: ${align};
    `}

`;