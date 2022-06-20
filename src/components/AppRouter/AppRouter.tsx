import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { AdminRoutes, LoginRoutes, PublicRoutes, RouteNames } from '../../routes/routes'
import { authReducer } from '../../store/reducers/isAuth/isAuth';



const AppRouter = () => {
  const { isAuth } = useAppSelector(state => state.authReducer);
  const { adminAuth } = useAppSelector(state => state.adminReducer);

  return (

    <Routes>
      {adminAuth ?
        <>
          {AdminRoutes.map(route =>
            <Route
              element={<route.element />}
              path={route.path}
              key={route.path}
            />
          )}
        </>
        :
        <Route path="*" element={<Navigate to={RouteNames.MAIN} />} />
      }
      {isAuth ?
        <>
          {PublicRoutes.map(route =>
            <Route
              element={<route.element />}
              path={route.path}
              key={route.path}
            />
          )}
        </>
        :
        <Route path="*" element={<Navigate to={RouteNames.MAIN} />} />
      }
      {!adminAuth && !isAuth ?
        <>
          {LoginRoutes.map(route =>
            <Route
              element={<route.element />}
              path={route.path}
              key={route.path}
            />
          )}
        </>
        :
        <Route path="*" element={<Navigate to={RouteNames.MAIN} />} />
      }
      <>
        {PublicRoutes.map(route =>
          <Route
            element={<route.element />}
            path={route.path}
            key={route.path}
          />
        )}
        <Route path="*" element={<Navigate to={RouteNames.MAIN} />} />
      </>
    </Routes>
  )
}

export default AppRouter