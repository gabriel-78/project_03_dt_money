import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.75);
  height: 100vh;
  inset: 0;
  position: fixed;
  width: 100vw;
`

export const Content = styled(Dialog.Content)`
  background: ${({ theme }) => theme['gray-800']};
  border-radius: 6px;
  min-width: 32rem;
  left: 50%;
  padding: 2.5rem 3rem;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    input {
      background: ${({ theme }) => theme['gray-700']};
      border: 0;
      border-radius: 6px;
      color: ${({ theme }) => theme.white};
      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme['gray-500']};
      }

      &::-webkit-validation-bubble {
        color: aliceblue;
        background-color: aliceblue;
      }
    }

    button[type='submit'] {
      background: ${({ theme }) => theme['green-300']};
      border: 0;
      color: ${({ theme }) => theme.white};
      font-weight: bold;
      height: 58px;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      transition: background-color 0.2s;
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${({ theme }) => theme['green-700']};
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  background: transparent;
  color: ${({ theme }) => theme['gray-500']};
  border: 0;
  cursor: pointer;
  line-height: 0;
  right: 1.5rem;
  top: 1.5rem;
  position: absolute;
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  variant?: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  align-items: center;
  background: ${({ theme }) => theme['gray-700']};
  border: 0;
  border-radius: 6px;
  color: ${({ theme }) => theme['gray-300']};
  cursor: pointer;
  gap: 0.5rem;
  justify-content: center;
  display: flex;
  padding: 1rem;
  transition: background-color 0.3s;

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    background: ${({ theme }) => theme['gray-600']};
  }

  &[data-state='checked'] {
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};
    color: ${({ theme }) => theme.white};

    svg {
      color: ${({ theme }) => theme.white};
    }
  }
`
