import { routesConfig } from "app/config/routesConfig/routesConfig"
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { PageLoader } from "widgets/PageLoader"

const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routesConfig).map(route => (
                    <Route 
                        key={route.path}
                        path={route.path}
                        element={
                            <div className="page-wrapper">
                                {route.element}
                            </div>
                        }
                    />
                ) )}
            </Routes>
        </Suspense>
    )
}

export default AppRouter