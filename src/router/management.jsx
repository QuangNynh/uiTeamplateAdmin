import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const ListingPage = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/management/users-listing').then((m) => ({
    default: m.Page,
  }))
);
const UserProfilePage = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/management/users-profile').then((m) => ({
    default: m.Page,
  }))
);
const ProjectsPage = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/management/projects').then((m) => ({
    default: m.Page,
  }))
);
const ShopFrontPage = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/management/shop-front').then((m) => ({
    default: m.Page,
  }))
);
const ShopListingPage = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/management/shop-listing').then((m) => ({
    default: m.Page,
  }))
);
const ProductDetailsPage = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/management/shop-product-details').then(
    (m) => ({
      default: m.Page,
    })
  )
);
const CreateProductPage = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/management/shop-product-create').then(
    (m) => ({
      default: m.Page,
    })
  )
);
const InvoicesListingPage = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/management/invoices-listing').then((m) => ({
    default: m.Page,
  }))
);
const InvoiceDetailsPage = lazy(() =>
  import('src/pages/blueprints/generic-admin-dashboard/management/invoices-details').then((m) => ({
    default: m.Page,
  }))
);
export const managementRoutes = [
  {
    path: 'blueprints/generic-admin-dashboard/management',
    children: [
      {
        path: 'users-listing',
        element: <ListingPage />,
      },
      {
        path: 'users-profile',
        element: <UserProfilePage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'shop-front',
        element: <ShopFrontPage />,
      },
      {
        path: 'shop-listing',
        element: <ShopListingPage />,
      },
      {
        path: 'shop-product-details',
        element: <ProductDetailsPage />,
      },
      {
        path: 'shop-product-create',
        element: <CreateProductPage />,
      },
      {
        path: 'invoices-listing',
        element: <InvoicesListingPage />,
      },
      {
        path: 'invoices-details',
        element: <InvoiceDetailsPage />,
      },
      {
        path: '*',
        element: <Navigate to="/404" />,
      },
    ],
  },
];
