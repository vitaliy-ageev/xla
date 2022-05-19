import React from "react";
import Main from "../pages/Main";
import News from "../pages/News";
import Project from "../pages/Project";
import User from "../pages/User";

export interface IRoute {
    path: string;
    element: React.ComponentType;
}

export enum RouteNames {
    MAIN = '/',
    PROJECT = '/project',
    NEWS = '/news',
    USER = '/user'
}

export const routes: IRoute[] = [
    { path: RouteNames.MAIN, element: Main },
    { path: RouteNames.PROJECT, element: Project },
    { path: RouteNames.NEWS, element: News },
    { path: RouteNames.USER, element: User }
]
