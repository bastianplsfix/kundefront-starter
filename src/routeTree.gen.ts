/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as HomeImport } from './routes/home'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as UserIndexImport } from './routes/user/index'
import { Route as MiscIndexImport } from './routes/misc/index'
import { Route as UserIdImport } from './routes/user/$id'
import { Route as MiscQueryImport } from './routes/misc/query'
import { Route as MiscParamsImport } from './routes/misc/params'
import { Route as MiscErrorsImport } from './routes/misc/errors'
import { Route as MiscBlockingImport } from './routes/misc/blocking'

// Create/Update Routes

const HomeRoute = HomeImport.update({
  id: '/home',
  path: '/home',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const UserIndexRoute = UserIndexImport.update({
  id: '/user/',
  path: '/user/',
  getParentRoute: () => rootRoute,
} as any)

const MiscIndexRoute = MiscIndexImport.update({
  id: '/misc/',
  path: '/misc/',
  getParentRoute: () => rootRoute,
} as any)

const UserIdRoute = UserIdImport.update({
  id: '/user/$id',
  path: '/user/$id',
  getParentRoute: () => rootRoute,
} as any)

const MiscQueryRoute = MiscQueryImport.update({
  id: '/misc/query',
  path: '/misc/query',
  getParentRoute: () => rootRoute,
} as any)

const MiscParamsRoute = MiscParamsImport.update({
  id: '/misc/params',
  path: '/misc/params',
  getParentRoute: () => rootRoute,
} as any)

const MiscErrorsRoute = MiscErrorsImport.update({
  id: '/misc/errors',
  path: '/misc/errors',
  getParentRoute: () => rootRoute,
} as any)

const MiscBlockingRoute = MiscBlockingImport.update({
  id: '/misc/blocking',
  path: '/misc/blocking',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/home': {
      id: '/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeImport
      parentRoute: typeof rootRoute
    }
    '/misc/blocking': {
      id: '/misc/blocking'
      path: '/misc/blocking'
      fullPath: '/misc/blocking'
      preLoaderRoute: typeof MiscBlockingImport
      parentRoute: typeof rootRoute
    }
    '/misc/errors': {
      id: '/misc/errors'
      path: '/misc/errors'
      fullPath: '/misc/errors'
      preLoaderRoute: typeof MiscErrorsImport
      parentRoute: typeof rootRoute
    }
    '/misc/params': {
      id: '/misc/params'
      path: '/misc/params'
      fullPath: '/misc/params'
      preLoaderRoute: typeof MiscParamsImport
      parentRoute: typeof rootRoute
    }
    '/misc/query': {
      id: '/misc/query'
      path: '/misc/query'
      fullPath: '/misc/query'
      preLoaderRoute: typeof MiscQueryImport
      parentRoute: typeof rootRoute
    }
    '/user/$id': {
      id: '/user/$id'
      path: '/user/$id'
      fullPath: '/user/$id'
      preLoaderRoute: typeof UserIdImport
      parentRoute: typeof rootRoute
    }
    '/misc/': {
      id: '/misc/'
      path: '/misc'
      fullPath: '/misc'
      preLoaderRoute: typeof MiscIndexImport
      parentRoute: typeof rootRoute
    }
    '/user/': {
      id: '/user/'
      path: '/user'
      fullPath: '/user'
      preLoaderRoute: typeof UserIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/home': typeof HomeRoute
  '/misc/blocking': typeof MiscBlockingRoute
  '/misc/errors': typeof MiscErrorsRoute
  '/misc/params': typeof MiscParamsRoute
  '/misc/query': typeof MiscQueryRoute
  '/user/$id': typeof UserIdRoute
  '/misc': typeof MiscIndexRoute
  '/user': typeof UserIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/home': typeof HomeRoute
  '/misc/blocking': typeof MiscBlockingRoute
  '/misc/errors': typeof MiscErrorsRoute
  '/misc/params': typeof MiscParamsRoute
  '/misc/query': typeof MiscQueryRoute
  '/user/$id': typeof UserIdRoute
  '/misc': typeof MiscIndexRoute
  '/user': typeof UserIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/home': typeof HomeRoute
  '/misc/blocking': typeof MiscBlockingRoute
  '/misc/errors': typeof MiscErrorsRoute
  '/misc/params': typeof MiscParamsRoute
  '/misc/query': typeof MiscQueryRoute
  '/user/$id': typeof UserIdRoute
  '/misc/': typeof MiscIndexRoute
  '/user/': typeof UserIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/home'
    | '/misc/blocking'
    | '/misc/errors'
    | '/misc/params'
    | '/misc/query'
    | '/user/$id'
    | '/misc'
    | '/user'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/home'
    | '/misc/blocking'
    | '/misc/errors'
    | '/misc/params'
    | '/misc/query'
    | '/user/$id'
    | '/misc'
    | '/user'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/home'
    | '/misc/blocking'
    | '/misc/errors'
    | '/misc/params'
    | '/misc/query'
    | '/user/$id'
    | '/misc/'
    | '/user/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  HomeRoute: typeof HomeRoute
  MiscBlockingRoute: typeof MiscBlockingRoute
  MiscErrorsRoute: typeof MiscErrorsRoute
  MiscParamsRoute: typeof MiscParamsRoute
  MiscQueryRoute: typeof MiscQueryRoute
  UserIdRoute: typeof UserIdRoute
  MiscIndexRoute: typeof MiscIndexRoute
  UserIndexRoute: typeof UserIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  HomeRoute: HomeRoute,
  MiscBlockingRoute: MiscBlockingRoute,
  MiscErrorsRoute: MiscErrorsRoute,
  MiscParamsRoute: MiscParamsRoute,
  MiscQueryRoute: MiscQueryRoute,
  UserIdRoute: UserIdRoute,
  MiscIndexRoute: MiscIndexRoute,
  UserIndexRoute: UserIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/home",
        "/misc/blocking",
        "/misc/errors",
        "/misc/params",
        "/misc/query",
        "/user/$id",
        "/misc/",
        "/user/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/home": {
      "filePath": "home.tsx"
    },
    "/misc/blocking": {
      "filePath": "misc/blocking.tsx"
    },
    "/misc/errors": {
      "filePath": "misc/errors.tsx"
    },
    "/misc/params": {
      "filePath": "misc/params.tsx"
    },
    "/misc/query": {
      "filePath": "misc/query.tsx"
    },
    "/user/$id": {
      "filePath": "user/$id.tsx"
    },
    "/misc/": {
      "filePath": "misc/index.tsx"
    },
    "/user/": {
      "filePath": "user/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
