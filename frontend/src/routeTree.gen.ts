/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UsageImport } from './routes/usage'
import { Route as ResultsImport } from './routes/results'
import { Route as PipelinesImport } from './routes/pipelines'
import { Route as PipelineImport } from './routes/pipeline'
import { Route as JobsImport } from './routes/jobs'
import { Route as IndexImport } from './routes/index'
import { Route as ProjectsIndexImport } from './routes/projects/index'
import { Route as JobsIndexImport } from './routes/jobs/index'
import { Route as PipelineIdImport } from './routes/pipeline_.$id'
import { Route as JobsTestingFarmRunsImport } from './routes/jobs/testing-farm-runs'
import { Route as JobsTestingFarmImport } from './routes/jobs/testing-farm'
import { Route as JobsSrpmBuildsImport } from './routes/jobs/srpm-builds'
import { Route as JobsSrpmImport } from './routes/jobs/srpm'
import { Route as JobsPullFromUpstreamsImport } from './routes/jobs/pull-from-upstreams'
import { Route as JobsProposeDownstreamsImport } from './routes/jobs/propose-downstreams'
import { Route as JobsKojiDownstreamImport } from './routes/jobs/koji-downstream'
import { Route as JobsKojiBuildsImport } from './routes/jobs/koji-builds'
import { Route as JobsKojiImport } from './routes/jobs/koji'
import { Route as JobsDownstreamKojiBuildsImport } from './routes/jobs/downstream-koji-builds'
import { Route as JobsCoprBuildsImport } from './routes/jobs/copr-builds'
import { Route as JobsCoprImport } from './routes/jobs/copr'
import { Route as JobsBodhiUpdatesImport } from './routes/jobs/bodhi-updates'
import { Route as JobsBodhiImport } from './routes/jobs/bodhi'
import { Route as JobsTestingFarmIdImport } from './routes/jobs_/testing-farm.$id'
import { Route as JobsSrpmIdImport } from './routes/jobs_/srpm.$id'
import { Route as JobsKojiIdImport } from './routes/jobs_/koji.$id'
import { Route as JobsKojiDownstreamIdImport } from './routes/jobs_/koji-downstream.$id'
import { Route as JobsCoprIdImport } from './routes/jobs_/copr.$id'
import { Route as JobsBodhiIdImport } from './routes/jobs_/bodhi.$id'
import { Route as JobsSyncReleaseUpstreamImport } from './routes/jobs/sync-release/upstream'
import { Route as JobsSyncReleaseDownstreamImport } from './routes/jobs/sync-release/downstream'
import { Route as ProjectsForgeNamespaceRepoImport } from './routes/projects/$forge.$namespace.$repo'
import { Route as JobsSyncReleaseUpstreamIdImport } from './routes/jobs_/sync-release.upstream.$id'
import { Route as JobsSyncReleaseDownstreamIdImport } from './routes/jobs_/sync-release.downstream.$id'

// Create Virtual Routes

const ProjectsForgeLazyImport = createFileRoute('/projects/$forge')()
const ProjectsForgeNamespaceLazyImport = createFileRoute(
  '/projects/$forge/$namespace',
)()

// Create/Update Routes

const UsageRoute = UsageImport.update({
  path: '/usage',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/usage.lazy').then((d) => d.Route))

const ResultsRoute = ResultsImport.update({
  path: '/results',
  getParentRoute: () => rootRoute,
} as any)

const PipelinesRoute = PipelinesImport.update({
  path: '/pipelines',
  getParentRoute: () => rootRoute,
} as any)

const PipelineRoute = PipelineImport.update({
  path: '/pipeline',
  getParentRoute: () => rootRoute,
} as any)

const JobsRoute = JobsImport.update({
  path: '/jobs',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsIndexRoute = ProjectsIndexImport.update({
  path: '/projects/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/projects/index.lazy').then((d) => d.Route),
)

const JobsIndexRoute = JobsIndexImport.update({
  path: '/',
  getParentRoute: () => JobsRoute,
} as any)

const ProjectsForgeLazyRoute = ProjectsForgeLazyImport.update({
  path: '/projects/$forge',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/projects/$forge_.lazy').then((d) => d.Route),
)

const PipelineIdRoute = PipelineIdImport.update({
  path: '/pipeline/$id',
  getParentRoute: () => rootRoute,
} as any)

const JobsTestingFarmRunsRoute = JobsTestingFarmRunsImport.update({
  path: '/testing-farm-runs',
  getParentRoute: () => JobsRoute,
} as any)

const JobsTestingFarmRoute = JobsTestingFarmImport.update({
  path: '/testing-farm',
  getParentRoute: () => JobsRoute,
} as any)

const JobsSrpmBuildsRoute = JobsSrpmBuildsImport.update({
  path: '/srpm-builds',
  getParentRoute: () => JobsRoute,
} as any)

const JobsSrpmRoute = JobsSrpmImport.update({
  path: '/srpm',
  getParentRoute: () => JobsRoute,
} as any)

const JobsPullFromUpstreamsRoute = JobsPullFromUpstreamsImport.update({
  path: '/pull-from-upstreams',
  getParentRoute: () => JobsRoute,
} as any)

const JobsProposeDownstreamsRoute = JobsProposeDownstreamsImport.update({
  path: '/propose-downstreams',
  getParentRoute: () => JobsRoute,
} as any)

const JobsKojiDownstreamRoute = JobsKojiDownstreamImport.update({
  path: '/koji-downstream',
  getParentRoute: () => JobsRoute,
} as any)

const JobsKojiBuildsRoute = JobsKojiBuildsImport.update({
  path: '/koji-builds',
  getParentRoute: () => JobsRoute,
} as any)

const JobsKojiRoute = JobsKojiImport.update({
  path: '/koji',
  getParentRoute: () => JobsRoute,
} as any)

const JobsDownstreamKojiBuildsRoute = JobsDownstreamKojiBuildsImport.update({
  path: '/downstream-koji-builds',
  getParentRoute: () => JobsRoute,
} as any)

const JobsCoprBuildsRoute = JobsCoprBuildsImport.update({
  path: '/copr-builds',
  getParentRoute: () => JobsRoute,
} as any)

const JobsCoprRoute = JobsCoprImport.update({
  path: '/copr',
  getParentRoute: () => JobsRoute,
} as any)

const JobsBodhiUpdatesRoute = JobsBodhiUpdatesImport.update({
  path: '/bodhi-updates',
  getParentRoute: () => JobsRoute,
} as any)

const JobsBodhiRoute = JobsBodhiImport.update({
  path: '/bodhi',
  getParentRoute: () => JobsRoute,
} as any)

const ProjectsForgeNamespaceLazyRoute = ProjectsForgeNamespaceLazyImport.update(
  {
    path: '/projects/$forge/$namespace',
    getParentRoute: () => rootRoute,
  } as any,
).lazy(() =>
  import('./routes/projects/$forge.$namespace_.lazy').then((d) => d.Route),
)

const JobsTestingFarmIdRoute = JobsTestingFarmIdImport.update({
  path: '/jobs/testing-farm/$id',
  getParentRoute: () => rootRoute,
} as any)

const JobsSrpmIdRoute = JobsSrpmIdImport.update({
  path: '/jobs/srpm/$id',
  getParentRoute: () => rootRoute,
} as any)

const JobsKojiIdRoute = JobsKojiIdImport.update({
  path: '/jobs/koji/$id',
  getParentRoute: () => rootRoute,
} as any)

const JobsKojiDownstreamIdRoute = JobsKojiDownstreamIdImport.update({
  path: '/jobs/koji-downstream/$id',
  getParentRoute: () => rootRoute,
} as any)

const JobsCoprIdRoute = JobsCoprIdImport.update({
  path: '/jobs/copr/$id',
  getParentRoute: () => rootRoute,
} as any)

const JobsBodhiIdRoute = JobsBodhiIdImport.update({
  path: '/jobs/bodhi/$id',
  getParentRoute: () => rootRoute,
} as any)

const JobsSyncReleaseUpstreamRoute = JobsSyncReleaseUpstreamImport.update({
  path: '/sync-release/upstream',
  getParentRoute: () => JobsRoute,
} as any)

const JobsSyncReleaseDownstreamRoute = JobsSyncReleaseDownstreamImport.update({
  path: '/sync-release/downstream',
  getParentRoute: () => JobsRoute,
} as any)

const ProjectsForgeNamespaceRepoRoute = ProjectsForgeNamespaceRepoImport.update(
  {
    path: '/projects/$forge/$namespace/$repo',
    getParentRoute: () => rootRoute,
  } as any,
).lazy(() =>
  import('./routes/projects/$forge.$namespace.$repo.lazy').then((d) => d.Route),
)

const JobsSyncReleaseUpstreamIdRoute = JobsSyncReleaseUpstreamIdImport.update({
  path: '/jobs/sync-release/upstream/$id',
  getParentRoute: () => rootRoute,
} as any)

const JobsSyncReleaseDownstreamIdRoute =
  JobsSyncReleaseDownstreamIdImport.update({
    path: '/jobs/sync-release/downstream/$id',
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
    '/jobs': {
      id: '/jobs'
      path: '/jobs'
      fullPath: '/jobs'
      preLoaderRoute: typeof JobsImport
      parentRoute: typeof rootRoute
    }
    '/pipeline': {
      id: '/pipeline'
      path: '/pipeline'
      fullPath: '/pipeline'
      preLoaderRoute: typeof PipelineImport
      parentRoute: typeof rootRoute
    }
    '/pipelines': {
      id: '/pipelines'
      path: '/pipelines'
      fullPath: '/pipelines'
      preLoaderRoute: typeof PipelinesImport
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
      preLoaderRoute: typeof UsageImport
      parentRoute: typeof rootRoute
    }
    '/jobs/bodhi': {
      id: '/jobs/bodhi'
      path: '/bodhi'
      fullPath: '/jobs/bodhi'
      preLoaderRoute: typeof JobsBodhiImport
      parentRoute: typeof JobsImport
    }
    '/jobs/bodhi-updates': {
      id: '/jobs/bodhi-updates'
      path: '/bodhi-updates'
      fullPath: '/jobs/bodhi-updates'
      preLoaderRoute: typeof JobsBodhiUpdatesImport
      parentRoute: typeof JobsImport
    }
    '/jobs/copr': {
      id: '/jobs/copr'
      path: '/copr'
      fullPath: '/jobs/copr'
      preLoaderRoute: typeof JobsCoprImport
      parentRoute: typeof JobsImport
    }
    '/jobs/copr-builds': {
      id: '/jobs/copr-builds'
      path: '/copr-builds'
      fullPath: '/jobs/copr-builds'
      preLoaderRoute: typeof JobsCoprBuildsImport
      parentRoute: typeof JobsImport
    }
    '/jobs/downstream-koji-builds': {
      id: '/jobs/downstream-koji-builds'
      path: '/downstream-koji-builds'
      fullPath: '/jobs/downstream-koji-builds'
      preLoaderRoute: typeof JobsDownstreamKojiBuildsImport
      parentRoute: typeof JobsImport
    }
    '/jobs/koji': {
      id: '/jobs/koji'
      path: '/koji'
      fullPath: '/jobs/koji'
      preLoaderRoute: typeof JobsKojiImport
      parentRoute: typeof JobsImport
    }
    '/jobs/koji-builds': {
      id: '/jobs/koji-builds'
      path: '/koji-builds'
      fullPath: '/jobs/koji-builds'
      preLoaderRoute: typeof JobsKojiBuildsImport
      parentRoute: typeof JobsImport
    }
    '/jobs/koji-downstream': {
      id: '/jobs/koji-downstream'
      path: '/koji-downstream'
      fullPath: '/jobs/koji-downstream'
      preLoaderRoute: typeof JobsKojiDownstreamImport
      parentRoute: typeof JobsImport
    }
    '/jobs/propose-downstreams': {
      id: '/jobs/propose-downstreams'
      path: '/propose-downstreams'
      fullPath: '/jobs/propose-downstreams'
      preLoaderRoute: typeof JobsProposeDownstreamsImport
      parentRoute: typeof JobsImport
    }
    '/jobs/pull-from-upstreams': {
      id: '/jobs/pull-from-upstreams'
      path: '/pull-from-upstreams'
      fullPath: '/jobs/pull-from-upstreams'
      preLoaderRoute: typeof JobsPullFromUpstreamsImport
      parentRoute: typeof JobsImport
    }
    '/jobs/srpm': {
      id: '/jobs/srpm'
      path: '/srpm'
      fullPath: '/jobs/srpm'
      preLoaderRoute: typeof JobsSrpmImport
      parentRoute: typeof JobsImport
    }
    '/jobs/srpm-builds': {
      id: '/jobs/srpm-builds'
      path: '/srpm-builds'
      fullPath: '/jobs/srpm-builds'
      preLoaderRoute: typeof JobsSrpmBuildsImport
      parentRoute: typeof JobsImport
    }
    '/jobs/testing-farm': {
      id: '/jobs/testing-farm'
      path: '/testing-farm'
      fullPath: '/jobs/testing-farm'
      preLoaderRoute: typeof JobsTestingFarmImport
      parentRoute: typeof JobsImport
    }
    '/jobs/testing-farm-runs': {
      id: '/jobs/testing-farm-runs'
      path: '/testing-farm-runs'
      fullPath: '/jobs/testing-farm-runs'
      preLoaderRoute: typeof JobsTestingFarmRunsImport
      parentRoute: typeof JobsImport
    }
    '/pipeline/$id': {
      id: '/pipeline/$id'
      path: '/pipeline/$id'
      fullPath: '/pipeline/$id'
      preLoaderRoute: typeof PipelineIdImport
      parentRoute: typeof rootRoute
    }
    '/projects/$forge': {
      id: '/projects/$forge'
      path: '/projects/$forge'
      fullPath: '/projects/$forge'
      preLoaderRoute: typeof ProjectsForgeLazyImport
      parentRoute: typeof rootRoute
    }
    '/jobs/': {
      id: '/jobs/'
      path: '/'
      fullPath: '/jobs/'
      preLoaderRoute: typeof JobsIndexImport
      parentRoute: typeof JobsImport
    }
    '/projects/': {
      id: '/projects/'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsIndexImport
      parentRoute: typeof rootRoute
    }
    '/jobs/sync-release/downstream': {
      id: '/jobs/sync-release/downstream'
      path: '/sync-release/downstream'
      fullPath: '/jobs/sync-release/downstream'
      preLoaderRoute: typeof JobsSyncReleaseDownstreamImport
      parentRoute: typeof JobsImport
    }
    '/jobs/sync-release/upstream': {
      id: '/jobs/sync-release/upstream'
      path: '/sync-release/upstream'
      fullPath: '/jobs/sync-release/upstream'
      preLoaderRoute: typeof JobsSyncReleaseUpstreamImport
      parentRoute: typeof JobsImport
    }
    '/jobs/bodhi/$id': {
      id: '/jobs/bodhi/$id'
      path: '/jobs/bodhi/$id'
      fullPath: '/jobs/bodhi/$id'
      preLoaderRoute: typeof JobsBodhiIdImport
      parentRoute: typeof rootRoute
    }
    '/jobs/copr/$id': {
      id: '/jobs/copr/$id'
      path: '/jobs/copr/$id'
      fullPath: '/jobs/copr/$id'
      preLoaderRoute: typeof JobsCoprIdImport
      parentRoute: typeof rootRoute
    }
    '/jobs/koji-downstream/$id': {
      id: '/jobs/koji-downstream/$id'
      path: '/jobs/koji-downstream/$id'
      fullPath: '/jobs/koji-downstream/$id'
      preLoaderRoute: typeof JobsKojiDownstreamIdImport
      parentRoute: typeof rootRoute
    }
    '/jobs/koji/$id': {
      id: '/jobs/koji/$id'
      path: '/jobs/koji/$id'
      fullPath: '/jobs/koji/$id'
      preLoaderRoute: typeof JobsKojiIdImport
      parentRoute: typeof rootRoute
    }
    '/jobs/srpm/$id': {
      id: '/jobs/srpm/$id'
      path: '/jobs/srpm/$id'
      fullPath: '/jobs/srpm/$id'
      preLoaderRoute: typeof JobsSrpmIdImport
      parentRoute: typeof rootRoute
    }
    '/jobs/testing-farm/$id': {
      id: '/jobs/testing-farm/$id'
      path: '/jobs/testing-farm/$id'
      fullPath: '/jobs/testing-farm/$id'
      preLoaderRoute: typeof JobsTestingFarmIdImport
      parentRoute: typeof rootRoute
    }
    '/projects/$forge/$namespace': {
      id: '/projects/$forge/$namespace'
      path: '/projects/$forge/$namespace'
      fullPath: '/projects/$forge/$namespace'
      preLoaderRoute: typeof ProjectsForgeNamespaceLazyImport
      parentRoute: typeof rootRoute
    }
    '/jobs/sync-release/downstream/$id': {
      id: '/jobs/sync-release/downstream/$id'
      path: '/jobs/sync-release/downstream/$id'
      fullPath: '/jobs/sync-release/downstream/$id'
      preLoaderRoute: typeof JobsSyncReleaseDownstreamIdImport
      parentRoute: typeof rootRoute
    }
    '/jobs/sync-release/upstream/$id': {
      id: '/jobs/sync-release/upstream/$id'
      path: '/jobs/sync-release/upstream/$id'
      fullPath: '/jobs/sync-release/upstream/$id'
      preLoaderRoute: typeof JobsSyncReleaseUpstreamIdImport
      parentRoute: typeof rootRoute
    }
    '/projects/$forge/$namespace/$repo': {
      id: '/projects/$forge/$namespace/$repo'
      path: '/projects/$forge/$namespace/$repo'
      fullPath: '/projects/$forge/$namespace/$repo'
      preLoaderRoute: typeof ProjectsForgeNamespaceRepoImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  JobsRoute: JobsRoute.addChildren({
    JobsBodhiRoute,
    JobsBodhiUpdatesRoute,
    JobsCoprRoute,
    JobsCoprBuildsRoute,
    JobsDownstreamKojiBuildsRoute,
    JobsKojiRoute,
    JobsKojiBuildsRoute,
    JobsKojiDownstreamRoute,
    JobsProposeDownstreamsRoute,
    JobsPullFromUpstreamsRoute,
    JobsSrpmRoute,
    JobsSrpmBuildsRoute,
    JobsTestingFarmRoute,
    JobsTestingFarmRunsRoute,
    JobsIndexRoute,
    JobsSyncReleaseDownstreamRoute,
    JobsSyncReleaseUpstreamRoute,
  }),
  PipelineRoute,
  PipelinesRoute,
  ResultsRoute,
  UsageRoute,
  PipelineIdRoute,
  ProjectsForgeLazyRoute,
  ProjectsIndexRoute,
  JobsBodhiIdRoute,
  JobsCoprIdRoute,
  JobsKojiDownstreamIdRoute,
  JobsKojiIdRoute,
  JobsSrpmIdRoute,
  JobsTestingFarmIdRoute,
  ProjectsForgeNamespaceLazyRoute,
  JobsSyncReleaseDownstreamIdRoute,
  JobsSyncReleaseUpstreamIdRoute,
  ProjectsForgeNamespaceRepoRoute,
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
        "/pipeline",
        "/pipelines",
        "/results",
        "/usage",
        "/pipeline/$id",
        "/projects/$forge",
        "/projects/",
        "/jobs/bodhi/$id",
        "/jobs/copr/$id",
        "/jobs/koji-downstream/$id",
        "/jobs/koji/$id",
        "/jobs/srpm/$id",
        "/jobs/testing-farm/$id",
        "/projects/$forge/$namespace",
        "/jobs/sync-release/downstream/$id",
        "/jobs/sync-release/upstream/$id",
        "/projects/$forge/$namespace/$repo"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/jobs": {
      "filePath": "jobs.tsx",
      "children": [
        "/jobs/bodhi",
        "/jobs/bodhi-updates",
        "/jobs/copr",
        "/jobs/copr-builds",
        "/jobs/downstream-koji-builds",
        "/jobs/koji",
        "/jobs/koji-builds",
        "/jobs/koji-downstream",
        "/jobs/propose-downstreams",
        "/jobs/pull-from-upstreams",
        "/jobs/srpm",
        "/jobs/srpm-builds",
        "/jobs/testing-farm",
        "/jobs/testing-farm-runs",
        "/jobs/",
        "/jobs/sync-release/downstream",
        "/jobs/sync-release/upstream"
      ]
    },
    "/pipeline": {
      "filePath": "pipeline.tsx"
    },
    "/pipelines": {
      "filePath": "pipelines.tsx"
    },
    "/results": {
      "filePath": "results.tsx"
    },
    "/usage": {
      "filePath": "usage.tsx"
    },
    "/jobs/bodhi": {
      "filePath": "jobs/bodhi.tsx",
      "parent": "/jobs"
    },
    "/jobs/bodhi-updates": {
      "filePath": "jobs/bodhi-updates.tsx",
      "parent": "/jobs"
    },
    "/jobs/copr": {
      "filePath": "jobs/copr.tsx",
      "parent": "/jobs"
    },
    "/jobs/copr-builds": {
      "filePath": "jobs/copr-builds.tsx",
      "parent": "/jobs"
    },
    "/jobs/downstream-koji-builds": {
      "filePath": "jobs/downstream-koji-builds.tsx",
      "parent": "/jobs"
    },
    "/jobs/koji": {
      "filePath": "jobs/koji.tsx",
      "parent": "/jobs"
    },
    "/jobs/koji-builds": {
      "filePath": "jobs/koji-builds.tsx",
      "parent": "/jobs"
    },
    "/jobs/koji-downstream": {
      "filePath": "jobs/koji-downstream.tsx",
      "parent": "/jobs"
    },
    "/jobs/propose-downstreams": {
      "filePath": "jobs/propose-downstreams.tsx",
      "parent": "/jobs"
    },
    "/jobs/pull-from-upstreams": {
      "filePath": "jobs/pull-from-upstreams.tsx",
      "parent": "/jobs"
    },
    "/jobs/srpm": {
      "filePath": "jobs/srpm.tsx",
      "parent": "/jobs"
    },
    "/jobs/srpm-builds": {
      "filePath": "jobs/srpm-builds.tsx",
      "parent": "/jobs"
    },
    "/jobs/testing-farm": {
      "filePath": "jobs/testing-farm.tsx",
      "parent": "/jobs"
    },
    "/jobs/testing-farm-runs": {
      "filePath": "jobs/testing-farm-runs.tsx",
      "parent": "/jobs"
    },
    "/pipeline/$id": {
      "filePath": "pipeline_.$id.tsx"
    },
    "/projects/$forge": {
      "filePath": "projects/$forge_.lazy.tsx"
    },
    "/jobs/": {
      "filePath": "jobs/index.tsx",
      "parent": "/jobs"
    },
    "/projects/": {
      "filePath": "projects/index.tsx"
    },
    "/jobs/sync-release/downstream": {
      "filePath": "jobs/sync-release/downstream.tsx",
      "parent": "/jobs"
    },
    "/jobs/sync-release/upstream": {
      "filePath": "jobs/sync-release/upstream.tsx",
      "parent": "/jobs"
    },
    "/jobs/bodhi/$id": {
      "filePath": "jobs_/bodhi.$id.tsx"
    },
    "/jobs/copr/$id": {
      "filePath": "jobs_/copr.$id.tsx"
    },
    "/jobs/koji-downstream/$id": {
      "filePath": "jobs_/koji-downstream.$id.tsx"
    },
    "/jobs/koji/$id": {
      "filePath": "jobs_/koji.$id.tsx"
    },
    "/jobs/srpm/$id": {
      "filePath": "jobs_/srpm.$id.tsx"
    },
    "/jobs/testing-farm/$id": {
      "filePath": "jobs_/testing-farm.$id.tsx"
    },
    "/projects/$forge/$namespace": {
      "filePath": "projects/$forge.$namespace_.lazy.tsx"
    },
    "/jobs/sync-release/downstream/$id": {
      "filePath": "jobs_/sync-release.downstream.$id.tsx"
    },
    "/jobs/sync-release/upstream/$id": {
      "filePath": "jobs_/sync-release.upstream.$id.tsx"
    },
    "/projects/$forge/$namespace/$repo": {
      "filePath": "projects/$forge.$namespace.$repo.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
