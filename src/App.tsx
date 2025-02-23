import { Route, Routes } from "react-router-dom"

import './styles/index.scss'
import { Link } from "react-router-dom"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.asynk"
import { MainPageAsynk } from "./pages/MainPage/MainPage.asynk"
import { Suspense } from "react"
import { useTheme } from "./theme/useTheme"
import { classnames } from "./helpers/classnames"

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

const App = () => {

    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classnames('app', {}, [`${theme}`])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Link to="/">Main Page</Link>
            <Link to="/about">About Page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageAsync />} />
                    <Route path="/" element={<MainPageAsynk />} />
                </Routes>
            </Suspense>
          
        </div>
    )
}

export default App