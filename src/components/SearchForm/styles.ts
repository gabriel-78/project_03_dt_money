import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    background-color: ${({ theme }) => theme['gray-900']};
    border: 0;
    border-radius: 6px;
    color: ${({ theme }) => theme['gray-300']};
    flex: 1;
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button {
    align-items: center;
    background: transparent;
    border: 1px solid ${({ theme }) => theme['green-300']};
    border-radius: 6px;
    color: ${({ theme }) => theme['green-300']};
    cursor: pointer;
    display: flex;
    font-weight: bold;
    gap: 0.75rem;
    padding: 1rem;

    &:disabled {
      opacity: 0.7;
      cursor: progress;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme['green-500']};
      border-color: 1px solid ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`
