import React, { FC, useEffect, useRef, useState } from 'react'
import './wave-ball.scss'

interface WaveballProps {
  percentage: number
}

const BuildWaveBall: FC<WaveballProps> = ({ percentage }) => {
  const providerRef = useRef<HTMLDivElement>(null)

  const [distance, setDistance] = useState<number>(0)

  useEffect(() => {
    if (!providerRef || !providerRef.current) return
    const refCurrent = providerRef.current
    const computedStyle = window.getComputedStyle(refCurrent)
    const topValue = parseInt(computedStyle.getPropertyValue('top'), 10)
    if (topValue) {
      setDistance(topValue)
    }
  }, [])

  useEffect(() => {
    if (!providerRef.current) return
    const newTop = distance * ((100 - percentage) / 100)
    console.log(newTop)
    providerRef.current.style.setProperty('top', `${newTop}px`)
  }, [percentage, distance])

  return (
    <div className="waveBall">
      <div className="waveBall-percentage">{percentage}%</div>
      <div className="waveBall-provider" ref={providerRef}></div>
    </div>
  )
}

export default BuildWaveBall
