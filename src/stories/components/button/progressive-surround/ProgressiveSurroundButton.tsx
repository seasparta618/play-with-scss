import React, { FC } from 'react'
import './progressive-surround-button.scss'

interface ProgressiveSurroundButtonProps {
  text: string
}

const BuildProgressiveSurroundButton: FC<ProgressiveSurroundButtonProps> = ({
  text,
}) => {
  return (
    <div className="progressiveSurroundButton">
      <div className="progressiveSurroundButton-content">{text}</div>

      <div className="progressiveSurroundButton-provider"></div>
    </div>
  )
}

export default BuildProgressiveSurroundButton
