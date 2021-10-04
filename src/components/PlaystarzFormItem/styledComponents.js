import styled from 'styled-components'
import PlaystarzButton from './../PlaystarzButton'

const PlaystarzFormItem = styled.div`
  position: relative;
  font-size: 1rem;
  color: #b1bad3;
  margin-bottom: 1rem;
  touch-action: none;
`

const PlaystarzFormItemTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  text-transform: capitalize;

  color: inherit;
  margin-bottom: 0.25rem;

  & svg {
    font-size: 0.75rem;
    color: red;
    margin-right: 0.25rem;
  }
`

const PlaystarzFormItemWrapper = styled.div`
  display: flex;
`
const PlaystarzFormItemContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: transparent;
  border-style: solid;
  padding: 0.5rem 0.25rem;

  font-size: 1rem;
  border-width: 0.15em;
  background: #0f212e;

  border-radius: ${({ hasButton }) => (hasButton ? '0.5em 0 0 0.5em' : '.5em')};
  border-color: ${({ isFocused }) => (isFocused ? '#007bff' : '#2f4553')};
  color: ${({ isFocused }) => (isFocused ? '#fff' : 'inherit')};
`

const PlaystarzFormItemLabel = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  color: inherit;
  cursor: pointer;
  width: 30px;
  margin: 0;
  padding: 0;
`

const PlaystarzFormItemInput = styled.input`
  touch-action: none;
  width: calc(100%);
  border: 0;
  background-color: inherit;
  color: inherit;

  font-size: 1.15rem;
  padding: 0 0.25rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: inherit;
  }
`

const PlaystarzFormItemButton = styled(PlaystarzButton)`
  border-radius: 0 0.25rem 0.25rem 0;
  &:focus {
    box-shadow: none;
  }
`

const PlaystarzFormItemError = styled.div`
  width: 100%;
  max-width: 300px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0px);
  z-index: 1;
  text-align: center;
  font-weight: 500;
  font-size: 1rem;

  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #fff;
  color: #0f212e;

  &::before {
    left: 50%;
    transform: translate(-50%, 0px);
    content: '';
    position: absolute;
    bottom: 98%;
    width: 0px;
    height: 0px;
    border-color: transparent transparent rgb(255, 255, 255);
    border-style: solid;
    border-width: 0px 5px 8px;
  }
`
export {
  PlaystarzFormItem,
  PlaystarzFormItemTitle,
  PlaystarzFormItemWrapper,
  PlaystarzFormItemContent,
  PlaystarzFormItemLabel,
  PlaystarzFormItemInput,
  PlaystarzFormItemButton,
  PlaystarzFormItemError
}
