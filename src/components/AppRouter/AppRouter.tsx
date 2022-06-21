import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { AdminRoutes, LoginRoutes, PublicRoutes, RouteNames } from '../../routes/routes'
import { setIsAdmin } from '../../store/reducers/adminSlice/adminSlice';
import { authReducer } from '../../store/reducers/isAuth/isAuth';



const AppRouter = () => {
  const { isAuth } = useAppSelector(state => state.authReducer);
  const adminAuth: any = localStorage.getItem("user")
  const dispatch = useDispatch();
  const { isAdmin } = useAppSelector(state => state.adminReducer)

  useEffect(() => {
    dispatch(setIsAdmin(adminAuth ? JSON.parse(adminAuth).isAdmin : false))
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
      {!isAdmin && !isAuth ?
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