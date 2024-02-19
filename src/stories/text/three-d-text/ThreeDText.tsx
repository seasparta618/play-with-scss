import React, { FC } from 'react'
import './three-d-text.scss'

interface ThreeDTextProps {
  text: string
}

const BuildThreeDText: FC<ThreeDTextProps> = ({ text = 'Three D Text' }) => {
  return <div className="threeDText">{text}</div>
}

export default BuildThreeDText
