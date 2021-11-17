import styled from '@emotion/styled'
import { css } from '@emotion/react'


//2nd Type - Fixed button text, but Dynamic styles

const dynamicStyle = props =>
  css`
    color: ${props.color};
    width: ${props.width};
    height: ${props.height};
    background: ${props.backgroundColor};
    box-shadow: ${props.boxShadow};
    border-radius: 5px;
    border: none !important;
    margin-bottom: 12px !important;
    font-weight: ${props.fontWeight};
    font-size: ${props.fontSize};

    &:hover, &:focus{
      box-shadow: ${props.hoverBoxShadow};
    }
  `

const DynamicButton = styled.button`
  ${dynamicStyle};
`

export default DynamicButton





 const improvedDynamicStyle = props =>
  css`
    color: ${props.color};
    width: ${props.width};
    height: ${props.height};
    background: ${props.backgroundColor};
    box-shadow: ${props.boxShadow};
    border-radius: ${props.borderRadius};
    border: ${props.border};
    margin-bottom: ${props.marginBottom};
    font-weight: ${props.fontWeight};
    font-size: ${props.fontSize};

    &:hover, &:focus{
      box-shadow: ${props.hoverBoxShadow};
    }
  `

  export const DynamicButtonTwo = styled.button`
  ${improvedDynamicStyle};`



