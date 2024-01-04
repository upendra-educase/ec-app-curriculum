import React from 'react'
import { BrowserRouter as AppRouter, Route, Switch, Redirect, Routes } from 'react-router-dom'
import { RoutesData } from './routes/index'

const Router = () => {
    return (
        <div style={{ flex: 1 }}>
            <Routes>
                {RoutesData.map(({ path, Component }) => (<>
                    <Route path={path} element={<Component />} />
                </>))
                }
            </Routes>
        </div>
    )
}

export default Router