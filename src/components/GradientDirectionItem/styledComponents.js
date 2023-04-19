// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
`

export const CustomButton = styled.button`
  background-color: #ffffff;
  border-style: none;
  border-radius: 5px;
  color: ${props => (props.isActive ? '#334155' : ' #1e293b')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  font-family: 'Roboto';
  font-size: 14px;
`
