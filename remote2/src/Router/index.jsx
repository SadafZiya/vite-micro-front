import React, {lazy} from 'react'

const path = ""
export default [
    {
        isPrivate: false,
        Component: lazy(() => import("../Components/Home.jsx")),
        path: `${path}`,
    },
    {
        isPrivate: false,
        Component: lazy(() => import("../Components/Home.jsx")),
        path: `${path}home`,
    },
    {
        isPrivate: false,
        Component: lazy(() => import("../Components/About.jsx")),
        path: `${path}about`,
    },
    {
        isPrivate: false,
        Component: lazy(() => import("../Components/Dashboard.jsx")),
        path: `${path}dashboard`,
    }
]