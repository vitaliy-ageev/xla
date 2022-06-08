import React from "react";
import Main from "../pages/Main";
import Opportunities from "../pages/Opportunities";
import Opportunity from "../pages/Opportuniti";
import Project from "../pages/Project";
import User from "../pages/User";

export interface IRoute {
    path: string;
    element: React.ComponentType;
}

export enum RouteNames {
    MAIN = '/metamall',
    PROJECT = '/metamall/project',
    OPPORTUNITIES = '/metamall/opportunities',
    OPPORTUNITY = '/metamall/opportunity',
    USER = '/metamall/user'
}

export const routes: IRoute[] = [
    { path: RouteNames.MAIN, element: Main },
    { path: RouteNames.PROJECT + '/id=:id', element: Project },
    { path: RouteNames.OPPORTUNITIES, element: Opportunities },
    { path: RouteNames.OPPORTUNITY + '/id=:id', element: Opportunity },
    { path: RouteNames.USER, element: User }
]
