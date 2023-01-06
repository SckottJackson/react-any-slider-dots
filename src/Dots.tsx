import React, { useEffect, useRef, useState } from 'react'

import { IReactAnySliderBaseProps } from './types'

interface IProps extends IReactAnySliderBaseProps {
    visibleDotsCount?: number
    dotSize?: number
    dotGap?: number
}

const makeDotClassName = (isBigDot: boolean, isActiveDot: boolean) =>
    `react-any-slider-dots__dot${isBigDot ? ' react-any-slider-dots__dot--big' : ''}${
        isActiveDot ? ' react-any-slider-dots__dot--active' : ''
    }`

const ReactAnySliderDots: React.FC<IProps> = ({
    dotsCount,
    activeIndex,
    visibleDotsCount = 5,
    dotGap = 4,
    dotSize = 6,
}) => {
    const contentRef = useRef<HTMLDivElement>(null)
    const [visibleDotsIndexes, setVisibleDotsIndexes] = useState({ left: 0, right: visibleDotsCount - 1 })

    const visibleBlockWidth = (dotSize + dotGap) * visibleDotsCount

    useEffect(() => {
        const { left, right } = visibleDotsIndexes

        if (activeIndex === 0) {
            setVisibleDotsIndexes({ left: 0, right: visibleDotsCount - 1 })
            return
        }

        if (left < activeIndex && right > activeIndex) return

        if (left === activeIndex && left > 0) {
            setVisibleDotsIndexes({ left: left - 1, right: right - 1 })
        } else if (right === activeIndex && right < dotsCount - 1) {
            setVisibleDotsIndexes({ left: left + 1, right: right + 1 })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIndex])

    useEffect(() => {
        if (!contentRef.current) return

        const transitionXValue = visibleDotsIndexes.left * dotSize + Math.max(0, visibleDotsIndexes.left - 1) * dotGap
        contentRef.current.setAttribute('style', `transform: translateX(-${transitionXValue}px); gap: ${dotGap}px`)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visibleDotsIndexes])

    return (
        <div className='react-any-slider-dots' style={{ maxWidth: visibleBlockWidth }}>
            <div className='react-any-slider-dots__container' ref={contentRef} style={{ gap: dotGap }}>
                {Array(dotsCount)
                    .fill(0)
                    .map((_, index) => (
                        <div
                            key={index}
                            className={makeDotClassName(
                                index === 0 ||
                                    index === dotsCount - 1 ||
                                    (index > visibleDotsIndexes.left && index < visibleDotsIndexes.right),
                                activeIndex === index,
                            )}
                            style={{ width: dotSize, height: dotSize }}
                        />
                    ))}
            </div>
        </div>
    )
}

export default ReactAnySliderDots
