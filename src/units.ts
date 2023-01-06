import { ReactNode, ReactElement } from 'react'

import { IReactAnySliderBaseProps } from './types'

export const reactSlickAdapter = (dots: ReactNode): IReactAnySliderBaseProps => {
    const dotsNodes = dots as ReactElement<HTMLElement>[]
    const dotsCount = dotsNodes.length
    const activeIndex = dotsNodes.findIndex(({ props }) => props.className === 'slick-active')

    return { dotsCount, activeIndex }
}
