// Style your elements here

import styled from 'styled-components'

export const GradientColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: bold;
`

export const About = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
`
export const UnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
`
export const ColorPickerContainer = styled.div`
  display: flex;
`
export const ColorPicker = styled.div`
  display: flex;
  flex-direction: column;
`

export const GenerateButton = styled.button`
  background-color: #ffffff;
  border-style: none;
  border-radius: 5px;
  color: #334155;
  font-family: 'Roboto';
  font-size: 14px;
`
export const ColorInput = styled.input`
  display: flex;
`
