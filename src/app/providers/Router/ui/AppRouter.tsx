import { routesConfig } from "app/config/routesConfig/routesConfig"
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
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