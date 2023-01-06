#  React dots for any slider

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]


[**Live Demo**](https://sckottjackson.github.io/react-any-slider-dots/)

## Installation:

```bash
npm install react-any-slider-dots --save-dev
```

or

```bash
yarn add -D react-any-slider-dots
```

## Usage :

Add base styles to root component in your project:

```js
import React from 'react'
...
import 'react-any-slider-dots/dist/dots.css'

export const App = () => {
...
}
```

Then use Dots in a slider:
```js
import React from 'react'
import { ReactAnySliderDots as Dots } from 'react-any-slider-dots'

export const MySlider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [dotsCount, setDotsCount] = useState(10)
    
    return (
        <div className="SLIDER-CONTAINER" style={{ position: 'relative' }}>
            // HERE YOUR SLIDER
            // AND HERE THE SLIDER'S ARROWS MAYBE
            <Dots
                dotsCount={dotsCount}
                activeIndex={activeIndex}
            />
        </div>
    )
```

You can use adapter for ReactSlick slider:
```js
import React from 'react'
import SlickSlider, { Settings } from 'react-slick'
import { ReactAnySliderDots as Dots, reactSlickAdapter } from 'react-any-slider-dots'

export const MySlider: React.FC = () => {
    const config: Settings = {
        ...
        appendDots: (dots) => <ReactAnySliderDots {...reactSlickAdapter(dots)} />,
        ...
    };
    
    return (
        <div className="SLIDER-CONTAINER" style={{ position: 'relative' }}>
            <SlickSlider {...config}>
                ...
            </SlickSlider>
        </div>
    )
```

[npm-url]: https://www.npmjs.com/package/react-any-slider-dots
[npm-image]: https://img.shields.io/npm/v/react-any-slider-dots
[github-license]: https://img.shields.io/github/license/SckottJackson/react-any-slider-dots
[github-license-url]: https://github.com/SckottJackson/react-any-slider-dots/blob/main/LICENSE
[github-build]: https://github.com/SckottJackson/react-any-slider-dots/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/SckottJackson/react-any-slider-dots/actions/workflows/publish.yml/badge.svg
[npm-typescript]: https://img.shields.io/npm/types/react-any-slider-dots