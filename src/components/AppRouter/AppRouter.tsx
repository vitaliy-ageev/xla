import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { AdminRoutes, LoginRoutes, PrivateRoutes, PublicRoutes, RouteNames } from '../../routes/routes'
import { setAuth, setRole } from '../../store/reducers/userSlice/userSlice';



const AppRouter = () => {
  const dispatch = useDispatch();
  const userAuth: any = localStorage.getItem("user")
  const { isAdmin, isUser } = useAppSelector(state => state.userReducer)

  useEffect(() => {
    dispatch(setRole(userAuth ? JSON.parse(userAuth).role : 'clear'))
  }, [])

  return (

    <Routes>
      {isAdmin ?
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
      {isUser ?
        <>
          {PrivateRoutes.map(route =>
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
      {!isAdmin && !isUser ?
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