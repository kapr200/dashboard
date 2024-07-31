/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ResultsImport } from './routes/results'
import { Route as JobsRouteImport } from './routes/jobs/route'
import { Route as IndexImport } from './routes/index'
import { Route as JobsIndexImport } from './routes/jobs/index'
import { Route as JobsKojiImport } from './routes/jobs/koji'
import { Route as JobsCoprBuildsImport } from './routes/jobs/copr-builds'
import { Route as JobsCoprImport } from './routes/jobs/copr'
import { Route as JobsCoprIdImport } from './routes/jobs_/copr.$id'

// Create Virtual Routes

const UsageLazyImport = createFileRoute('/usage')()
const ProjectsIndexLazyImport = createFileRoute('/projects/')()
const ProjectsForgeNamespaceLazyImport = createFileRoute(
  '/projects/$forge/$namespace',
)()
const ProjectsForgeNamespaceRepoLazyImport = createFileRoute(
  '/projects/$forge/$namespace/$repo',
)()

// Create/Update Routes

const UsageLazyRoute = UsageLazyImport.update({
  path: '/usage',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/usage.lazy').then((d) => d.Route))

const ResultsRoute = ResultsImport.update({
  path: '/results',
  getParentRoute: () => rootRoute,
} as any)

const JobsRouteRoute = JobsRouteImport.update({
  path: '/jobs',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsIndexLazyRoute = ProjectsIndexLazyImport.update({
  path: '/projects/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/projects/index.lazy').then((d) => d.Route),
)

const JobsIndexRoute = JobsIndexImport.update({
  path: '/',
  getParentRoute: () => JobsRouteRoute,
} as any)

const JobsKojiRoute = JobsKojiImport.update({
  path: '/koji',
  getParentRoute: () => JobsRouteRoute,
} as any)

const JobsCoprBuildsRoute = JobsCoprBuildsImport.update({
  path: '/copr-builds',
  getParentRoute: () => JobsRouteRoute,
} as any)

const JobsCoprRoute = JobsCoprImport.update({
  path: '/copr',
  getParentRoute: () => JobsRouteRoute,
} as any)

const ProjectsForgeNamespaceLazyRoute = ProjectsForgeNamespaceLazyImport.update(
  {
    path: '/projects/$forge/$namespace',
    getParentRoute: () => rootRoute,
  } as any,
).lazy(() =>
  import('./routes/projects/$forge.$namespace_.lazy').then((d) => d.Route),
)

const JobsCoprIdRoute = JobsCoprIdImport.update({
  path: '/jobs/copr/$id',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsForgeNamespaceRepoLazyRoute =
  ProjectsForgeNamespaceRepoLazyImport.update({
    path: '/projects/$forge/$namespace/$repo',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/projects/$forge.$namespace.$repo.lazy').then(
      (d) => d.Route,
    ),
  )

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
    '/jobs': {
      id: '/jobs'
      path: '/jobs'
      fullPath: '/jobs'
      preLoaderRoute: typeof JobsRouteImport
      parentRoute: typeof rootRoute
    }
    '/results': {
      id: '/results'
      path: '/results'
      fullPath: '/results'
      preLoaderRoute: typeof ResultsImport
      parentRoute: typeof rootRoute
    }
    '/usage': {
      id: '/usage'
      path: '/usage'
      fullPath: '/usage'
      preLoaderRoute: typeof UsageLazyImport
      parentRoute: typeof rootRoute
    }
    '/jobs/copr': {
      id: '/jobs/copr'
      path: '/copr'
      fullPath: '/jobs/copr'
      preLoaderRoute: typeof JobsCoprImport
      parentRoute: typeof JobsRouteImport
    }
    '/jobs/copr-builds': {
      id: '/jobs/copr-builds'
      path: '/copr-builds'
      fullPath: '/jobs/copr-builds'
      preLoaderRoute: typeof JobsCoprBuildsImport
      parentRoute: typeof JobsRouteImport
    }
    '/jobs/koji': {
      id: '/jobs/koji'
      path: '/koji'
      fullPath: '/jobs/koji'
      preLoaderRoute: typeof JobsKojiImport
      parentRoute: typeof JobsRouteImport
    }
    '/jobs/': {
      id: '/jobs/'
      path: '/'
      fullPath: '/jobs/'
      preLoaderRoute: typeof JobsIndexImport
      parentRoute: typeof JobsRouteImport
    }
    '/projects/': {
      id: '/projects/'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/jobs/copr/$id': {
      id: '/jobs/copr/$id'
      path: '/jobs/copr/$id'
      fullPath: '/jobs/copr/$id'
      preLoaderRoute: typeof JobsCoprIdImport
      parentRoute: typeof rootRoute
    }
    '/projects/$forge/$namespace': {
      id: '/projects/$forge/$namespace'
      path: '/projects/$forge/$namespace'
      fullPath: '/projects/$forge/$namespace'
      preLoaderRoute: typeof ProjectsForgeNamespaceLazyImport
      parentRoute: typeof rootRoute
    }
    '/projects/$forge/$namespace/$repo': {
      id: '/projects/$forge/$namespace/$repo'
      path: '/projects/$forge/$namespace/$repo'
      fullPath: '/projects/$forge/$namespace/$repo'
      preLoaderRoute: typeof ProjectsForgeNamespaceRepoLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  JobsRouteRoute: JobsRouteRoute.addChildren({
    JobsCoprRoute,
    JobsCoprBuildsRoute,
    JobsKojiRoute,
    JobsIndexRoute,
  }),
  ResultsRoute,
  UsageLazyRoute,
  ProjectsIndexLazyRoute,
  JobsCoprIdRoute,
  ProjectsForgeNamespaceLazyRoute,
  ProjectsForgeNamespaceRepoLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/jobs",
        "/results",
        "/usage",
        "/projects/",
        "/jobs/copr/$id",
        "/projects/$forge/$namespace",
        "/projects/$forge/$namespace/$repo"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/jobs": {
      "filePath": "jobs/route.tsx",
      "children": [
        "/jobs/copr",
        "/jobs/copr-builds",
        "/jobs/koji",
        "/jobs/"
      ]
    },
    "/results": {
      "filePath": "results.tsx"
    },
    "/usage": {
      "filePath": "usage.lazy.tsx"
    },
    "/jobs/copr": {
      "filePath": "jobs/copr.tsx",
      "parent": "/jobs"
    },
    "/jobs/copr-builds": {
      "filePath": "jobs/copr-builds.tsx",
      "parent": "/jobs"
    },
    "/jobs/koji": {
      "filePath": "jobs/koji.tsx",
      "parent": "/jobs"
    },
    "/jobs/": {
      "filePath": "jobs/index.tsx",
      "parent": "/jobs"
    },
    "/projects/": {
      "filePath": "projects/index.lazy.tsx"
    },
    "/jobs/copr/$id": {
      "filePath": "jobs_/copr.$id.tsx"
    },
    "/projects/$forge/$namespace": {
      "filePath": "projects/$forge.$namespace_.lazy.tsx"
    },
    "/projects/$forge/$namespace/$repo": {
      "filePath": "projects/$forge.$namespace.$repo.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
