import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { RouteProps } from "react-router-dom"

enum AppRouters {
    MAIN = 'main',
    ABOUT = 'about'
}

const RoutePath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.ABOUT]: '/about'
}

export const routesConfig: Record<AppRouters, RouteProps> = {
    [AppRouters.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },

    [AppRouters.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    }
}