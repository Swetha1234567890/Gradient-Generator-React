import {Component} from 'react'
import {
  GradientColorContainer,
  ColorInput,
  Heading,
  About,
  UnorderedList,
  ColorPickerContainer,
  ColorPicker,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: ` to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeFromColorInput = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColorInput = event => {
    this.setState({toColorInput: event.target.value})
  }

  updateDirection = direction => {
    this.setState({activeGradientDirection: direction})
  }

  onGenerate = () => {
    const {activeGradientDirection, fromColorInput, toColorInput} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  render() {
    const {
      toColorInput,
      fromColorInput,
      activeGradientDirection,
      gradientValue,
    } = this.state
    return (
      <GradientColorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <>
          <Heading>Generate a CSS Color Gradient</Heading>
          <About>Choose Direction</About>
          <UnorderedList>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                gradientItemDetails={each}
                updateDirection={this.updateDirection}
                isActive={each.value === activeGradientDirection}
              />
            ))}
          </UnorderedList>
          <About>Pick the colors</About>
          <ColorPickerContainer>
            <ColorPicker>
              <About>{fromColorInput}</About>
              <ColorInput
                type="color"
                onChange={this.onChangeFromColorInput}
                value={fromColorInput}
              />
            </ColorPicker>
            <ColorPicker>
              <About>{toColorInput}</About>
              <ColorInput
                type="color"
                onChange={this.onChangeToColorInput}
                value={toColorInput}
              />
            </ColorPicker>
          </ColorPickerContainer>
          <GenerateButton type="button" onClick={this.onGenerate}>
            Generate
          </GenerateButton>
        </>
      </GradientColorContainer>
    )
  }
}

export default GradientGenerator
