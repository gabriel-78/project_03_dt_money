import styled from 'styled-components'

export const TransactionContainer = styled.div`
  margin: 4rem auto 0;
  max-width: 1120px;
  padding: 0 1.5rem;
  width: 100%;
`

export const TransactionTable = styled.table`
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  width: 100%;

  td {
    padding: 1.25rem 2rem;
    background: ${({ theme }) => theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PrinceHightlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PrinceHightlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
