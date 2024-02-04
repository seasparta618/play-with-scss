import './moving-border-button.scss'

const buildCyberPunkButton = (): HTMLElement => {
  const buttonContainer = document.createElement('div')
  buttonContainer.className = 'movingBorderButton-container'
  const button = document.createElement('div')
  button.className = 'movingBorderButton'
  button.innerHTML = 'Brilliant Button'
  buttonContainer.appendChild(button)
  const borderProvider = document.createElement('div')
  borderProvider.className = 'movingBorderButton-borderProvider'
  buttonContainer.appendChild(borderProvider)
  return buttonContainer
}

export default buildCyberPunkButton
