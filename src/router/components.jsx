import { lazy } from 'react';

const Foundation = lazy(() =>
  import('src/pages/components/application-ui/foundation').then((m) => ({
    default: m.Page,
  }))
);
const ContentGrids = lazy(() =>
  import('src/pages/components/application-ui/content-grids').then((m) => ({
    default: m.Page,
  }))
);
const ContentShells = lazy(() =>
  import('src/pages/components/application-ui/content-shells').then((m) => ({
    default: m.Page,
  }))
);
const CardShells = lazy(() =>
  import('src/pages/components/application-ui/card-shells').then((m) => ({
    default: m.Page,
  }))
);
const ListContainers = lazy(() =>
  import('src/pages/components/application-ui/list-containers').then((m) => ({
    default: m.Page,
  }))
);
const Dividers = lazy(() =>
  import('src/pages/components/application-ui/dividers').then((m) => ({
    default: m.Page,
  }))
);
const PageHeadings = lazy(() =>
  import('src/pages/components/application-ui/page-headings').then((m) => ({
    default: m.Page,
  }))
);
const CardHeadings = lazy(() =>
  import('src/pages/components/application-ui/card-headings').then((m) => ({
    default: m.Page,
  }))
);
const SectionHeadings = lazy(() =>
  import('src/pages/components/application-ui/section-headings').then((m) => ({
    default: m.Page,
  }))
);
const Buttons = lazy(() =>
  import('src/pages/components/application-ui/buttons').then((m) => ({
    default: m.Page,
  }))
);
const ButtonGroups = lazy(() =>
  import('src/pages/components/application-ui/button-groups').then((m) => ({
    default: m.Page,
  }))
);
const ToggleButtons = lazy(() =>
  import('src/pages/components/application-ui/toggle-buttons').then((m) => ({
    default: m.Page,
  }))
);
const Badges = lazy(() =>
  import('src/pages/components/application-ui/badges').then((m) => ({
    default: m.Page,
  }))
);
const Chips = lazy(() =>
  import('src/pages/components/application-ui/chips').then((m) => ({
    default: m.Page,
  }))
);
const Avatars = lazy(() =>
  import('src/pages/components/application-ui/avatars').then((m) => ({
    default: m.Page,
  }))
);
const Dropdowns = lazy(() =>
  import('src/pages/components/application-ui/dropdowns').then((m) => ({
    default: m.Page,
  }))
);
const Ratings = lazy(() =>
  import('src/pages/components/application-ui/ratings').then((m) => ({
    default: m.Page,
  }))
);
const Accordions = lazy(() =>
  import('src/pages/components/application-ui/accordions').then((m) => ({
    default: m.Page,
  }))
);
const ProgressIndicators = lazy(() =>
  import('src/pages/components/application-ui/progress-indicators').then((m) => ({
    default: m.Page,
  }))
);
const HorizontalMenus = lazy(() =>
  import('src/pages/components/application-ui/horizontal-menus').then((m) => ({
    default: m.Page,
  }))
);
const VerticalMenus = lazy(() =>
  import('src/pages/components/application-ui/vertical-menus').then((m) => ({
    default: m.Page,
  }))
);
const Pagination = lazy(() =>
  import('src/pages/components/application-ui/pagination').then((m) => ({
    default: m.Page,
  }))
);
const Tabs = lazy(() =>
  import('src/pages/components/application-ui/tabs').then((m) => ({
    default: m.Page,
  }))
);
const Steppers = lazy(() =>
  import('src/pages/components/application-ui/steppers').then((m) => ({
    default: m.Page,
  }))
);
const Breadcrumbs = lazy(() =>
  import('src/pages/components/application-ui/breadcrumbs').then((m) => ({
    default: m.Page,
  }))
);
const SpeedDials = lazy(() =>
  import('src/pages/components/application-ui/speed-dials').then((m) => ({
    default: m.Page,
  }))
);
const Alerts = lazy(() =>
  import('src/pages/components/application-ui/alerts').then((m) => ({
    default: m.Page,
  }))
);
const EmptyStates = lazy(() =>
  import('src/pages/components/application-ui/empty-states').then((m) => ({
    default: m.Page,
  }))
);
const Skeleton = lazy(() =>
  import('src/pages/components/application-ui/skeleton').then((m) => ({
    default: m.Page,
  }))
);
const Popovers = lazy(() =>
  import('src/pages/components/application-ui/popovers').then((m) => ({
    default: m.Page,
  }))
);
const Tooltips = lazy(() =>
  import('src/pages/components/application-ui/tooltips').then((m) => ({
    default: m.Page,
  }))
);
const Notifications = lazy(() =>
  import('src/pages/components/application-ui/notifications').then((m) => ({
    default: m.Page,
  }))
);
const Dialogs = lazy(() =>
  import('src/pages/components/application-ui/dialogs').then((m) => ({
    default: m.Page,
  }))
);
const Drawers = lazy(() =>
  import('src/pages/components/application-ui/drawers').then((m) => ({
    default: m.Page,
  }))
);
const NavigationOverlays = lazy(() =>
  import('src/pages/components/application-ui/navigation-overlays').then((m) => ({
    default: m.Page,
  }))
);
const StackedLists = lazy(() =>
  import('src/pages/components/application-ui/stacked-lists').then((m) => ({
    default: m.Page,
  }))
);
const HorizontalLists = lazy(() =>
  import('src/pages/components/application-ui/horizontal-lists').then((m) => ({
    default: m.Page,
  }))
);
const Tables = lazy(() =>
  import('src/pages/components/application-ui/tables').then((m) => ({
    default: m.Page,
  }))
);
const Timelines = lazy(() =>
  import('src/pages/components/application-ui/timelines').then((m) => ({
    default: m.Page,
  }))
);
const DataGridLists = lazy(() =>
  import('src/pages/components/application-ui/data-grid-lists').then((m) => ({
    default: m.Page,
  }))
);
const StatsGridLists = lazy(() =>
  import('src/pages/components/application-ui/stats-grid-lists').then((m) => ({
    default: m.Page,
  }))
);
const DescriptionGridLists = lazy(() =>
  import('src/pages/components/application-ui/description-grid-lists').then((m) => ({
    default: m.Page,
  }))
);
const ProgressGridLists = lazy(() =>
  import('src/pages/components/application-ui/progress-grid-lists').then((m) => ({
    default: m.Page,
  }))
);
const ImageGridLists = lazy(() =>
  import('src/pages/components/application-ui/image-grid-lists').then((m) => ({
    default: m.Page,
  }))
);
const IconGridLists = lazy(() =>
  import('src/pages/components/application-ui/icon-grid-lists').then((m) => ({
    default: m.Page,
  }))
);
const ComposedBlocks = lazy(() =>
  import('src/pages/components/application-ui/composed-blocks').then((m) => ({
    default: m.Page,
  }))
);
const AreaCharts = lazy(() =>
  import('src/pages/components/application-ui/area-charts').then((m) => ({
    default: m.Page,
  }))
);
const BarCharts = lazy(() =>
  import('src/pages/components/application-ui/bar-charts').then((m) => ({
    default: m.Page,
  }))
);
const LineCharts = lazy(() =>
  import('src/pages/components/application-ui/line-charts').then((m) => ({
    default: m.Page,
  }))
);
const PieDoughnutCharts = lazy(() =>
  import('src/pages/components/application-ui/pie-doughnut-charts').then((m) => ({
    default: m.Page,
  }))
);
const SparklineCharts = lazy(() =>
  import('src/pages/components/application-ui/sparkline-charts').then((m) => ({
    default: m.Page,
  }))
);
const GaugeIndicators = lazy(() =>
  import('src/pages/components/application-ui/gauge-indicators').then((m) => ({
    default: m.Page,
  }))
);
const ComposedVisualizationBlocks = lazy(() =>
  import('src/pages/components/application-ui/composed-visualization-blocks').then((m) => ({
    default: m.Page,
  }))
);
const FormLayouts = lazy(() =>
  import('src/pages/components/application-ui/form-layouts').then((m) => ({
    default: m.Page,
  }))
);
const UserAuth = lazy(() =>
  import('src/pages/components/application-ui/user-auth').then((m) => ({
    default: m.Page,
  }))
);
const Autocomplete = lazy(() =>
  import('src/pages/components/application-ui/autocomplete').then((m) => ({
    default: m.Page,
  }))
);
const Checkboxes = lazy(() =>
  import('src/pages/components/application-ui/checkboxes').then((m) => ({
    default: m.Page,
  }))
);
const RadioGroups = lazy(() =>
  import('src/pages/components/application-ui/radio-groups').then((m) => ({
    default: m.Page,
  }))
);
const Select = lazy(() =>
  import('src/pages/components/application-ui/select').then((m) => ({
    default: m.Page,
  }))
);
const Switches = lazy(() =>
  import('src/pages/components/application-ui/switches').then((m) => ({
    default: m.Page,
  }))
);
const Textarea = lazy(() =>
  import('src/pages/components/application-ui/textarea').then((m) => ({
    default: m.Page,
  }))
);
const Input = lazy(() =>
  import('src/pages/components/application-ui/input').then((m) => ({
    default: m.Page,
  }))
);
const Slider = lazy(() =>
  import('src/pages/components/application-ui/slider').then((m) => ({
    default: m.Page,
  }))
);
const Upload = lazy(() =>
  import('src/pages/components/application-ui/upload').then((m) => ({
    default: m.Page,
  }))
);
const Datepicker = lazy(() =>
  import('src/pages/components/application-ui/datepicker').then((m) => ({
    default: m.Page,
  }))
);
export const componentsRoutes = [
  {
    path: 'foundation',
    element: <Foundation />,
  },
  {
    path: 'content-grids',
    element: <ContentGrids />,
  },
  {
    path: 'content-shells',
    element: <ContentShells />,
  },
  {
    path: 'card-shells',
    element: <CardShells />,
  },
  {
    path: 'list-containers',
    element: <ListContainers />,
  },
  {
    path: 'dividers',
    element: <Dividers />,
  },
  {
    path: 'page-headings',
    element: <PageHeadings />,
  },
  {
    path: 'card-headings',
    element: <CardHeadings />,
  },
  {
    path: 'section-headings',
    element: <SectionHeadings />,
  },
  {
    path: 'buttons',
    element: <Buttons />,
  },
  {
    path: 'button-groups',
    element: <ButtonGroups />,
  },
  {
    path: 'toggle-buttons',
    element: <ToggleButtons />,
  },
  {
    path: 'badges',
    element: <Badges />,
  },
  {
    path: 'chips',
    element: <Chips />,
  },
  {
    path: 'avatars',
    element: <Avatars />,
  },
  {
    path: 'dropdowns',
    element: <Dropdowns />,
  },
  {
    path: 'ratings',
    element: <Ratings />,
  },
  {
    path: 'accordions',
    element: <Accordions />,
  },
  {
    path: 'progress-indicators',
    element: <ProgressIndicators />,
  },
  {
    path: 'horizontal-menus',
    element: <HorizontalMenus />,
  },
  {
    path: 'vertical-menus',
    element: <VerticalMenus />,
  },
  {
    path: 'pagination',
    element: <Pagination />,
  },
  {
    path: 'tabs',
    element: <Tabs />,
  },
  {
    path: 'steppers',
    element: <Steppers />,
  },
  {
    path: 'breadcrumbs',
    element: <Breadcrumbs />,
  },
  {
    path: 'speed-dials',
    element: <SpeedDials />,
  },
  {
    path: 'alerts',
    element: <Alerts />,
  },
  {
    path: 'empty-states',
    element: <EmptyStates />,
  },
  {
    path: 'skeleton',
    element: <Skeleton />,
  },
  {
    path: 'popovers',
    element: <Popovers />,
  },
  {
    path: 'tooltips',
    element: <Tooltips />,
  },
  {
    path: 'notifications',
    element: <Notifications />,
  },
  {
    path: 'dialogs',
    element: <Dialogs />,
  },
  {
    path: 'drawers',
    element: <Drawers />,
  },
  {
    path: 'navigation-overlays',
    element: <NavigationOverlays />,
  },
  {
    path: 'stacked-lists',
    element: <StackedLists />,
  },
  {
    path: 'horizontal-lists',
    element: <HorizontalLists />,
  },
  {
    path: 'tables',
    element: <Tables />,
  },
  {
    path: 'timelines',
    element: <Timelines />,
  },
  {
    path: 'data-grid-lists',
    element: <DataGridLists />,
  },
  {
    path: 'stats-grid-lists',
    element: <StatsGridLists />,
  },
  {
    path: 'description-grid-lists',
    element: <DescriptionGridLists />,
  },
  {
    path: 'progress-grid-lists',
    element: <ProgressGridLists />,
  },
  {
    path: 'image-grid-lists',
    element: <ImageGridLists />,
  },
  {
    path: 'icon-grid-lists',
    element: <IconGridLists />,
  },
  {
    path: 'composed-blocks',
    element: <ComposedBlocks />,
  },
  {
    path: 'area-charts',
    element: <AreaCharts />,
  },
  {
    path: 'bar-charts',
    element: <BarCharts />,
  },
  {
    path: 'line-charts',
    element: <LineCharts />,
  },
  {
    path: 'pie-doughnut-charts',
    element: <PieDoughnutCharts />,
  },
  {
    path: 'sparkline-charts',
    element: <SparklineCharts />,
  },
  {
    path: 'gauge-indicators',
    element: <GaugeIndicators />,
  },
  {
    path: 'composed-visualization-blocks',
    element: <ComposedVisualizationBlocks />,
  },
  {
    path: 'form-layouts',
    element: <FormLayouts />,
  },
  {
    path: 'user-auth',
    element: <UserAuth />,
  },
  {
    path: 'autocomplete',
    element: <Autocomplete />,
  },
  {
    path: 'checkboxes',
    element: <Checkboxes />,
  },
  {
    path: 'radio-groups',
    element: <RadioGroups />,
  },
  {
    path: 'select',
    element: <Select />,
  },
  {
    path: 'switches',
    element: <Switches />,
  },
  {
    path: 'textarea',
    element: <Textarea />,
  },
  {
    path: 'input',
    element: <Input />,
  },
  {
    path: 'slider',
    element: <Slider />,
  },
  {
    path: 'upload',
    element: <Upload />,
  },
  {
    path: 'datepicker',
    element: <Datepicker />,
  },
];
