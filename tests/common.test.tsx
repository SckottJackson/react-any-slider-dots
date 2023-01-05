import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import ReactAnySliderDots from '../src'

describe('Common render', () => {
    it('renders without crashing', () => {
        render(<ReactAnySliderDots dotsCount={5} activeIndex={0} />)
    })
})
