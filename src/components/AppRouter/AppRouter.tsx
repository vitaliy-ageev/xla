import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { routes, RouteNames } from '../../routes/routes'
import { authReducer } from '../../store/reducers/isAuth/isAuth';



const AppRouter = () => {
  const { isAuth } = useAppSelector(state => state.authReducer);
  const { auth } = authReducer.actions;
  const dispatch = useAppDispatch();

  return (
    isAuth ?
      <Routes>
        {routes.map(route =>
          <Route
            element={<route.element />}
            path={route.path}
            key={route.path}
          />
        )}
        <Route path="*" element={<Navigate to={RouteNames.MAIN} />} />
      </Routes>
      :
      <Route path="*" element={<Navigate to='/' />} />
  )
}

export default AppRouter