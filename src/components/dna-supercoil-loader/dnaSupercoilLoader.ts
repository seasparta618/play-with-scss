import './dna-supercoil-loader.scss'

const DNA_PAIR_NUMBER = 45

const buildDNASupercoilLoader = (): HTMLElement => {
  const dnaSupercoilLoader = document.createElement('div')
  dnaSupercoilLoader.className = 'dnaSupercoilLoader'
  for (let i = 0; i < DNA_PAIR_NUMBER; i++) {
    const dnaPairContainer = document.createElement('div')
    dnaPairContainer.className = `dnaPairContainer sequence${i}`
    dnaSupercoilLoader.appendChild(dnaPairContainer)
  }
  return dnaSupercoilLoader
}

export default buildDNASupercoilLoader
