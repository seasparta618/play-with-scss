import React, { FC } from 'react'
import './blended-text.scss'

interface BlendedTextProps {
  text: string
}

const BuildBlendedText: FC<BlendedTextProps> = ({
  text = 'Blended Text Default',
}) => {
  return (
    <div className="blendedText-container">
      <span className="blendedText">{text}</span>
    </div>
  )
}

export default BuildBlendedText
