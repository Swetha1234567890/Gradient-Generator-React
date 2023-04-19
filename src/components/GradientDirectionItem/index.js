// Write your code here

import {ListItem, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientItemDetails, updateDirection, isActive} = props
  const {value, displayText} = gradientItemDetails

  const onClickDirection = () => {
    updateDirection(value)
  }

  return (
    <ListItem>
      <CustomButton
        type="button"
        onClick={onClickDirection}
        isActive={isActive}
      >
        {displayText}
      </CustomButton>
    </ListItem>
  )
}

export default GradientDirectionItem
