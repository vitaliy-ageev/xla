import React from "react";
import Main from "../pages/Main";
import Opportunities from "../pages/Opportunities";
import Opportunity from "../pages/Opportuniti";
import Project from "../pages/Project";
import User from "../pages/User";
import Admin from "../pages/LoginAdmin";
import LoginAdmin from "../pages/LoginAdmin";
import CreateProject from "../pages/CreateProject";
import EditProject from "../pages/EditProject";

export interface IRoute {
    path: string;
    element: React.ComponentType;
}

export enum RouteNames {
    MAIN = '/metamall',
    PROJECT = '/metamall/project',
    OPPORTUNITIES = '/metamall/opportunities',
    OPPORTUNITY = '/metamall/opportunity',
    USER = '/metamall/user',
    LOGIN_ADMIN = '/metamall/login/admin',
    CREATE_PROJECT = '/metamall/project/create',
    EDIT_PROJECT = '/metamall/project/edit'
}

export const PublicRoutes: IRoute[] = [
    { path: RouteNames.MAIN, element: Main },
    { path: RouteNames.PROJECT + '/id=:id', element: Project },
    { path: RouteNames.OPPORTUNITIES, element: Opportunities },
    { path: RouteNames.OPPORTUNITY + '/id=:id', element: Opportunity },
]

export const PrivateRoutes: IRoute[] = [
    { path: RouteNames.USER, element: User },
]

export const AdminRoutes: IRoute[] = [
    { path: RouteNames.CREATE_PROJECT, element: CreateProject },
    { path: RouteNames.EDIT_PROJECT, element: EditProject },
]

export const LoginRoutes: IRoute[] = [
    { path: RouteNames.LOGIN_ADMIN, element: LoginAdmin }
]