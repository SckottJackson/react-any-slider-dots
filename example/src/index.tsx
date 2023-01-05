import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-any-slider-dots/dist/dots.css'
import { BasicExample } from './basic'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <BasicExample />
    </React.StrictMode>,
)
