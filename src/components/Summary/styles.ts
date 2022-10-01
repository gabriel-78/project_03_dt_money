import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    margin: 0 auto;
    margin-top: -5rem;
    max-width: 1120px;
    padding: 0 1.5rem;
    width: 100%;
`;

interface SummaryCardProps {
    variant?: "green";
}

export const SummaryCard = styled.div<SummaryCardProps>`
background: ${({theme}) => theme["gray-600"]};
border-radius: 6px;
padding: 2rem;

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({theme}) => theme["gray-300"]};
}

strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
}

${({variant, theme}) => variant === "green" && css`
        background: ${theme["green-700"]};
    `}
`;