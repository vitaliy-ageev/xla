import React from "react";
import Main from "../pages/Main";
import Opportunities from "../pages/Opportunities";
import Opportuniti from "../pages/Opportuniti";
import Project from "../pages/Project";
import User from "../pages/User";

export interface IRoute {
    path: string;
    element: React.ComponentType;
}

export enum RouteNames {
    MAIN = '/',
    PROJECT = '/project',
    OPPORTUNITIES = '/opportunities',
    OPPORTUNITI = '/opportuniti',
    USER = '/user'
}

export const routes: IRoute[] = [
    { path: RouteNames.MAIN, element: Main },
    { path: RouteNames.PROJECT, element: Project },
    { path: RouteNames.OPPORTUNITIES, element: Opportunities },
    { path: RouteNames.OPPORTUNITI, element: Opportuniti },
    { path: RouteNames.USER, element: User }
]
