import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import NotFoundPage from "pages/NotFoundPage/ui/NotFoundPage"
import { RouteProps } from "react-router-dom"

enum AppRouters {
    MAIN = 'main',
    ABOUT = 'about',
    NOTFOUND = 'notFound'
}

const RoutePath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.ABOUT]: '/about',
    [AppRouters.NOTFOUND]: '*'
}

export const routesConfig: Record<AppRouters, RouteProps> = {
    [AppRouters.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },

    [AppRouters.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    },

    [AppRouters.NOTFOUND]: {
        path: RoutePath.notFound,
        element: <NotFoundPage />
    }
}