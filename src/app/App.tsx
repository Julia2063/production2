import './styles/index.scss'
import { classnames } from "shared/lib/classnames"
import { useTheme } from "app/providers/ThemeProvider"

import { AppRouter } from "app/providers/Router"
import { Navbar } from "widgets/Navbar"
import { Sidebar } from 'widgets/Sidebar'

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

const App = () => {

    const { theme } = useTheme()

    return (
        <div className={classnames('app', {}, [`${theme}`])}>
            
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
            
        </div>
    )
}

export default App