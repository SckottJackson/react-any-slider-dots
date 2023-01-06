import React, { useState } from 'react'
import { ReactAnySliderDots } from 'react-any-slider-dots'

export const BasicExample: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [dotsCount, setDotsCount] = useState(10)
    const [dotGap, setDotGap] = useState(4)
    const [dotSize, setDotSize] = useState(6)
    const [visibleDotsCount, setVisibleDotsCount] = useState(5)

    const controls = [
        {
            title: 'activeIndex',
            value: activeIndex,
            onChangeFn: setActiveIndex,
        },
        {
            title: 'dotsCount',
            value: dotsCount,
            onChangeFn: setDotsCount,
        },
        {
            title: 'dotGap',
            value: dotGap,
            onChangeFn: setDotGap,
        },
        {
            title: 'dotSize',
            value: dotSize,
            onChangeFn: setDotSize,
        },
        {
            title: 'visibleDotsCount',
            value: visibleDotsCount,
            onChangeFn: setVisibleDotsCount,
        },
    ]

    return (
        <>
            <div className='control-panel'>
                {controls.map(({ title, value, onChangeFn }, index) => (
                    <div className='control-panel_row' key={index}>
                        <div>
                            {title}: {value}
                        </div>
                        <div className='control-panel_button-wrapper'>
                            <button className='control-panel_button' onClick={() => onChangeFn(value + 1)}>
                                +
                            </button>
                            <button className='control-panel_button' onClick={() => onChangeFn(value - 1)}>
                                -
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='container'>
                <button className='arrow left-arrow' onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}>
                    {'<'}
                </button>
                <button
                    className='arrow right-arrow'
                    onClick={() => setActiveIndex(Math.min(activeIndex + 1, dotsCount - 1))}
                >
                    {'>'}
                </button>
                <ReactAnySliderDots
                    dotsCount={dotsCount}
                    activeIndex={activeIndex}
                    dotGap={dotGap}
                    dotSize={dotSize}
                    visibleDotsCount={visibleDotsCount}
                />
            </div>
        </>
    )
}
