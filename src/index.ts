import './index.scss'
import buildDNASupercoilLoader from './components/dna-supercoil-loader/dnaSupercoilLoader'
import buildMovingBorderButton from './components/buttons/moving-border-button/MovingBorderButton'
import buildCyberpunkButton from './components/buttons/cyber-punk-button/cyberpunkButton'

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app')
  if (!app) return null
  const heading = document.createElement('h1')
  heading.textContent = 'Welcome to my playground with scss'

  const paragraph = document.createElement('p')
  paragraph.textContent =
    'This is a pretty simple typescript website with some interesting scss & ts build components'

  app.appendChild(heading)
  app.appendChild(paragraph)

  const componentToggleListContainer = document.createElement('div')
  const componentToggleList = document.createElement('ul')
  componentToggleList.id = 'componentList'

  componentToggleListContainer.appendChild(componentToggleList)
  app.append(componentToggleListContainer)

  const showGround = document.createElement('div')
  showGround.className = 'showGround'
  showGround.id = 'showGround'
  app.appendChild(showGround)
  const dnaSupercoilLoader = buildDNASupercoilLoader()
  if (dnaSupercoilLoader) {
    const dnaSupercoilLoaderButton = document.createElement('button')
    const onButtonClick = (): void => {
      showGround.replaceChildren()
      showGround.appendChild(dnaSupercoilLoader)
    }
    dnaSupercoilLoaderButton.onclick = onButtonClick
    dnaSupercoilLoaderButton.innerHTML = 'dna supercoil loader'
    const dnaSupercoilLoaderLi = document.createElement('li')
    dnaSupercoilLoaderLi.appendChild(dnaSupercoilLoaderButton)
    componentToggleList.appendChild(dnaSupercoilLoaderLi)
  }
  const progressiveButton = buildMovingBorderButton()
  if (progressiveButton) {
    const progressiveButtonToggle = document.createElement('button')
    const onButtonClick = (): void => {
      showGround.replaceChildren()
      showGround.appendChild(progressiveButton)
    }
    progressiveButtonToggle.onclick = onButtonClick
    progressiveButtonToggle.innerHTML = 'progressive button'
    const progressiveButtonLi = document.createElement('li')
    progressiveButtonLi.appendChild(progressiveButtonToggle)
    componentToggleList.appendChild(progressiveButtonLi)
  }

  const cyberPunkButton = buildCyberpunkButton()
  if (cyberPunkButton) {
    const cyberPunkButtonToggle = document.createElement('button')
    const onButtonClick = (): void => {
      showGround.replaceChildren()
      showGround.appendChild(cyberPunkButton)
    }

    cyberPunkButtonToggle.onclick = onButtonClick
    cyberPunkButtonToggle.innerHTML = 'CyberPunk Button'
    const cyberPunkButtonLi = document.createElement('li')
    cyberPunkButtonLi.appendChild(cyberPunkButtonToggle)
    componentToggleList.appendChild(cyberPunkButtonLi)
  }
})
