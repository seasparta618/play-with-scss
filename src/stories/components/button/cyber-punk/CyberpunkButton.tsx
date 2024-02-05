import React, { FC } from 'react'
import './cyberpunk-button.scss'

interface CyberPunkButtonProps {
  text: string
}

export const BuildCyberpunkButton: FC<CyberPunkButtonProps> = ({
  text = 'Now loading',
}) => {
  return (
    <button className="cyberpunkButton">
      {text}
      <span className="cyberpunkButton-punker">{text}</span>
    </button>
  )
}
