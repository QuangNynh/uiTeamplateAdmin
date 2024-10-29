import React, { lazy } from 'react';

const Calendar = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/applications/calendar').then((m) => ({
    default: m.Page,
  }))
);
const FileManager = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/applications/file-manager').then((m) => ({
    default: m.Page,
  }))
);
const JobsPlatform = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/applications/jobs-platform').then((m) => ({
    default: m.Page,
  }))
);
const Mailbox = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/applications/mailbox').then((m) => ({
    default: m.Page,
  }))
);
const Messenger = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/applications/messenger').then((m) => ({
    default: m.Page,
  }))
);
const ProjectsBoard = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/applications/projects-board').then((m) => ({
    default: m.Page,
  }))
);
const Tasks = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/applications/tasks').then((m) => ({
    default: m.Page,
  }))
);
export const applicationsRoutes = [
  {
    path: 'blueprints/generic-admin-dashboard/applications',
    children: [
      {
        path: 'calendar',
        element: <Calendar />,
      },
      {
        path: 'file-manager',
        element: <FileManager />,
      },
      {
        path: 'jobs-platform',
        element: <JobsPlatform />,
      },
      {
        path: 'mailbox',
        element: <Mailbox />,
      },
      {
        path: 'messenger',
        element: <Messenger />,
      },
      {
        path: 'projects-board',
        element: <ProjectsBoard />,
      },
      {
        path: 'tasks',
        element: <Tasks />,
      },
    ],
  },
];
