import React, { lazy } from 'react';

const ExpensesDashboard = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/dashboards/expenses').then((m) => ({
    default: m.Page,
  }))
);
const StatisticsDashboard = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/dashboards/statistics').then((m) => ({
    default: m.Page,
  }))
);
const AutomationDashboard = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/dashboards/automation').then((m) => ({
    default: m.Page,
  }))
);
const AnalyticsDashboard = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/dashboards/analytics').then((m) => ({
    default: m.Page,
  }))
);
const HospitalDashboard = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/dashboards/hospital').then((m) => ({
    default: m.Page,
  }))
);
const HelpdeskDashboard = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/dashboards/helpdesk').then((m) => ({
    default: m.Page,
  }))
);
const MonitoringDashboard = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/dashboards/monitoring').then((m) => ({
    default: m.Page,
  }))
);
const ReportsDashboard = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/dashboards/reports').then((m) => ({
    default: m.Page,
  }))
);
export const dashboardsRoutes = [
  {
    path: 'blueprints/generic-admin-dashboard/dashboards',
    children: [
      {
        index: true,
        path: 'reports',
        element: <ReportsDashboard />,
      },
      {
        path: 'expenses',
        element: <ExpensesDashboard />,
      },
      {
        path: 'statistics',
        element: <StatisticsDashboard />,
      },
      {
        path: 'automation',
        element: <AutomationDashboard />,
      },
      {
        path: 'analytics',
        element: <AnalyticsDashboard />,
      },
      {
        path: 'hospital',
        element: <HospitalDashboard />,
      },
      {
        path: 'helpdesk',
        element: <HelpdeskDashboard />,
      },
      {
        path: 'monitoring',
        element: <MonitoringDashboard />,
      },
    ],
  },
];
