import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiNavigationOverlaysBasic from 'src/components/application-ui/navigation-overlays/basic/basic';
import ApplicationUiNavigationOverlaysSearchAlternate from 'src/components/application-ui/navigation-overlays/search-alternate/search-alternate';
import ApplicationUiNavigationOverlaysTabs from 'src/components/application-ui/navigation-overlays/tabs/tabs';
import { Helmet } from 'src/components/base/helmet';
import MarketingPageTitle from 'src/components/website/page-title';

const components = [
  {
    element: <ApplicationUiNavigationOverlaysBasic />,
    title: 'Basic',
    isComplex: 'false',
    size: 'sm',
    description:
      'A straightforward navigation overlay, providing essential navigation elements in a clear layout.',
    height: 'full',
    category: 'navigation-overlays',
  },
  {
    element: <ApplicationUiNavigationOverlaysSearchAlternate />,
    title: 'SearchAlternate',
    isComplex: 'false',
    size: 'sm',
    description:
      'An alternate design for a search-focused navigation overlay, possibly featuring enhanced functionality or styling.',
    height: 'full',
    category: 'navigation-overlays',
  },
  {
    element: <ApplicationUiNavigationOverlaysTabs />,
    title: 'Tabs',
    isComplex: 'false',
    size: 'sm',
    description:
      'Navigation overlay utilizing a tabbed interface for organized and accessible content.',
    height: 'full',
    category: 'navigation-overlays',
  },
];
export function Page() {
  const { t } = useTranslation();
  const pageTitle = 'NavigationOverlays';
  const pageDescription =
    'Explore navigation overlays for an innovative approach to website navigation, offering a modern and interactive experience.';
  const formatTitle = (title) => {
    return title.replace(/([A-Z])/g, ' $1');
  };
  const pageTitleDisplay = formatTitle(pageTitle);
  function generateSrcPath(title, category) {
    const processString = (str) => {
      return str
        .replace(/([A-Z])/g, ' $1')
        .trim()
        .toLowerCase()
        .replace(/[\s]+/g, '-');
    };
    const processedTitle = processString(title);
    let processedCategory = category && processString(category);
    return `/src/components/application-ui/${processedTitle}/${processedCategory}/`;
  }
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
    toast.success('Component path copied to clipboard');
  };
  return (
    <>
      <Helmet heading={t(pageTitleDisplay)} />
      <MarketingPageTitle
        title={t(pageTitleDisplay)}
        subheading={t(pageDescription)}
      />
      <Box
        py={{
          xs: 2,
          md: 3,
        }}
      >
        <Container maxWidth="xl">
          <Stack
            spacing={{
              xs: 3,
              sm: 4,
              md: 5,
            }}
            divider={<Divider />}
          >
            {components.map((component) => (
              <Card
                key={component.title}
                elevation={0}
                variant="outlined"
                sx={{
                  borderWidth: 2,
                  boxShadow: (theme) => `0 0 0 6px ${theme.palette.divider}`,
                  borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'neutral.700' : 'neutral.500',
                  pb:
                    component.size !== 'xl'
                      ? {
                          xs: 2,
                          sm: 3,
                        }
                      : undefined,
                }}
              >
                <Box
                  p={{
                    xs: 2,
                    sm: 3,
                  }}
                  mb={
                    component.size !== 'xl'
                      ? {
                          xs: 2,
                          sm: 3,
                        }
                      : undefined
                  }
                  sx={{
                    backgroundColor: 'background.default',
                  }}
                >
                  <Typography variant="h4">{formatTitle(component.title)}</Typography>
                  {component.description && (
                    <Typography
                      variant="h5"
                      fontWeight={400}
                      color="text.secondary"
                    >
                      {component.description}
                    </Typography>
                  )}
                  <Box
                    mt={{
                      xs: 1,
                      sm: 2,
                    }}
                    display="flex"
                  >
                    <Card
                      elevation={0}
                      variant="outlined"
                    >
                      <CopyToClipboard
                        text={generateSrcPath(component.category, component.title)}
                        onCopy={handleCopy}
                      >
                        <CardActionArea
                          sx={{
                            py: 1,
                            px: 1.5,
                          }}
                        >
                          <Typography
                            variant="h6"
                            component="span"
                          >
                            {generateSrcPath(component.category, component.title)}
                          </Typography>
                        </CardActionArea>
                      </CopyToClipboard>
                    </Card>
                  </Box>
                </Box>
                <Container
                  disableGutters
                  maxWidth={component.size}
                >
                  {component.element}
                </Container>
              </Card>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
}
