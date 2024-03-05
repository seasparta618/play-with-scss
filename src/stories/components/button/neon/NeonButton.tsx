import React, { FC } from 'react'
import './neon-button.scss'

interface NeonButtonProps {
  text: string
}

const BuildNeonButton: FC<NeonButtonProps> = ({ text }) => {
  return (
    <div className="neonButton">
      <span className="neonButton-borderProvider"></span>
      <span className="neonButton-borderProvider"></span>
      <span className="neonButton-borderProvider"></span>
      <span className="neonButton-borderProvider"></span>
      <div className="neonButton-content">{text}</div>
    </div>
  )
}

export default BuildNeonButton
