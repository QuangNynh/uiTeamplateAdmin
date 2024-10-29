import React, { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout as MainLayout } from 'src/layouts';
import { Layout as LayoutBase } from 'src/layouts/base';
import { MarketingLayout } from 'src/layouts/marketing';
import Error404Page from 'src/pages/404';
import { applicationsRoutes } from './applications';
import { authenticationRoutes } from './authentication';
import { componentsRoutes } from './components';
import { dashboardsRoutes } from './dashboards';
import { managementRoutes } from './management';

const HomePage = lazy(() =>
  import('src/pages').then((m) => ({
    default: m.Page,
  }))
);
const BlueprintsPage = lazy(() =>
  import('src/pages/blueprints').then((m) => ({
    default: m.Page,
  }))
);
const PricingPage = lazy(() =>
  import('src/pages/pricing').then((m) => ({
    default: m.Page,
  }))
);
const ComponentsHome = lazy(() =>
  import('src/pages/components').then((m) => ({
    default: m.Page,
  }))
);

export const routesOutlets = [
  {
    element: (
      <MarketingLayout>
        <Outlet />
      </MarketingLayout>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'blueprints',
        element: <BlueprintsPage />,
      },
      {
        path: 'pricing',
        element: <PricingPage />,
      },
      {
        path: 'components',
        children: [
          {
            index: true,
            element: <ComponentsHome />,
          },
          {
            path: 'application-ui',
            children: [...componentsRoutes],
          },
        ],
      },
    ],
  },
  {
    element: (
      <LayoutBase>
        <Outlet />
      </LayoutBase>
    ),
    children: [
      {
        path: 'auth',
        children: [...authenticationRoutes],
      },
    ],
  },
  {
    path: '*',
    element: <Error404Page />,
  },
  {
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [...dashboardsRoutes, ...applicationsRoutes, ...managementRoutes],
  },
];
