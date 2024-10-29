import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiCardHeadingsAvatarActionsAlternate from 'src/components/application-ui/card-headings/avatar-actions-alternate/avatar-actions-alternate';
import ApplicationUiCardHeadingsAvatarActions from 'src/components/application-ui/card-headings/avatar-actions/avatar-actions';
import ApplicationUiCardHeadingsAvatar from 'src/components/application-ui/card-headings/avatar/avatar';
import ApplicationUiCardHeadingsCenteredTitleDescription from 'src/components/application-ui/card-headings/centered-title-description/centered-title-description';
import ApplicationUiCardHeadingsCenteredTitle from 'src/components/application-ui/card-headings/centered-title/centered-title';
import ApplicationUiCardHeadingsTitleAction from 'src/components/application-ui/card-headings/title-action/title-action';
import ApplicationUiCardHeadingsTitleChip from 'src/components/application-ui/card-headings/title-chip/title-chip';
import ApplicationUiCardHeadingsTitleDescriptionActions from 'src/components/application-ui/card-headings/title-description-actions/title-description-actions';
import ApplicationUiCardHeadingsTitleDescriptionCenteredReversed from 'src/components/application-ui/card-headings/title-description-centered-reversed/title-description-centered-reversed';
import ApplicationUiCardHeadingsTitleDescriptionReversedAvatar from 'src/components/application-ui/card-headings/title-description-reversed-avatar/title-description-reversed-avatar';
import ApplicationUiCardHeadingsTitleDescriptionReversedWell from 'src/components/application-ui/card-headings/title-description-reversed-well/title-description-reversed-well';
import ApplicationUiCardHeadingsTitleDescriptionReversed from 'src/components/application-ui/card-headings/title-description-reversed/title-description-reversed';
import ApplicationUiCardHeadingsTitleDescriptionTabs from 'src/components/application-ui/card-headings/title-description-tabs/title-description-tabs';
import ApplicationUiCardHeadingsTitleDescription from 'src/components/application-ui/card-headings/title-description/title-description';
import ApplicationUiCardHeadingsTitleLargeDescription from 'src/components/application-ui/card-headings/title-large-description/title-large-description';
import ApplicationUiCardHeadingsTitleLarge from 'src/components/application-ui/card-headings/title-large/title-large';
import ApplicationUiCardHeadingsTitle from 'src/components/application-ui/card-headings/title/title';
import { Helmet } from 'src/components/base/helmet';
import MarketingPageTitle from 'src/components/website/page-title';

const components = [
  {
    element: <ApplicationUiCardHeadingsAvatar />,
    title: 'Avatar',
    isComplex: 'false',
    size: 'sm',
    description: 'A simple card heading with an avatar.',
    height: '',
    category: 'card-headings',
  },
  {
    element: <ApplicationUiCardHeadingsAvatarActions />,
    title: 'AvatarActions',
    isComplex: 'false',
    size: 'md',
    description: 'A card heading featuring an avatar with associated actions.',
    height: '',
    category: 'card-headings',
  },
  {
    element: <ApplicationUiCardHeadingsAvatarActionsAlternate />,
    title: 'AvatarActionsAlternate',
    isComplex: 'false',
    size: 'sm',
    description: 'An alternate layout for the avatar card heading with actions.',
    height: '',
    category: 'card-headings',
  },
  {
    element: <ApplicationUiCardHeadingsCenteredTitle />,
    title: 'CenteredTitle',
    isComplex: 'false',
    size: 'sm',
    description: 'A card heading with a title centered within.',
    height: '',
    category: 'card-headings',
  },
  {
    element: <ApplicationUiCardHeadingsCenteredTitleDescription />,
    title: 'CenteredTitleDescription',
    isComplex: 'false',
    size: 'sm',
    description: 'A centered title card heading accompanied by a brief description.',
    height: '',
    category: 'card-headings',
  },
  {
    element: <ApplicationUiCardHeadingsTitle />,
    title: 'Title',
    isComplex: 'false',
    size: 'sm',
    description: 'A straightforward card heading with a title.',
    height: '',
    category: 'card-headings',
  },
  {
    element: <ApplicationUiCardHeadingsTitleAction />,
    title: 'TitleAction',
    isComplex: 'false',
    size: 'sm',
    description: 'A title-based card heading that includes an action button.',
    height: '',
    category: 'card-headings',
  },
  {
    element: <ApplicationUiCardHeadingsTitleChip />,
    title: 'TitleChip',
    isComplex: 'false',
    size: 'sm',
    description: 'Card heading featuring a title with an accompanying chip for added context.',
    height: '',
    category: 'card-headings',
  },
  {
    element: <ApplicationUiCardHeadingsTitleDescription />,
    title: 'TitleDescription',
    isComplex: 'false',
    size: 'sm',
    description: 'A card heading featuring a title followed by a short description.',
    height: '',
    category: 'card-headings',
  },
  {
    element: <ApplicationUiCardHeadingsTitleDescriptionActions />,
    title: 'TitleDescriptionActions',
    isComplex: 'false',
    size: 'sm',
    description: 'A card heading with a title, description, and associated actions.',
    height: '',
    category: 'card-headings',
  },
  {
    element: <ApplicationUiCardHeadingsTitleDescriptionCenteredReversed />,
    title: 'TitleDescriptionCenteredReversed',
    isComplex: 'false',
    size: 'sm',
    description:
      'Card heading with a centered title and reversed layout, accompanied by a description.',
    height: '',
    category: 'card-headings',
  },
  {
    element: <ApplicationUiCardHeadingsTitleDescriptionReversed />,
    title: 'TitleDescriptionReversed',
    isComplex: 'false',
    size: 'sm',
    description:
      'Card heading with a reversed layout, featuring a title followed by a description.',
    height: '',
    category: 'card-headings',
  },
  {
    element: <ApplicationUiCardHeadingsTitleDescriptionReversedAvatar />,
    title: 'TitleDescriptionReversedAvatar',
    isComplex: 'false',
    size: 'sm',
    description: 'A reversed layout card heading with a title, description, and an avatar.',
    height: '',
    category: 'card-headings',
  },
  {
    element: <ApplicationUiCardHeadingsTitleDescriptionReversedWell />,
    title: 'TitleDescriptionReversedWell',
    isComplex: 'false',
    size: 'sm',
    description:
      'Card heading with a reversed layout, title, and description, presented in a well-defined style.',
    height: '',
    category: 'card-headings',
  },
  {
    element: <ApplicationUiCardHeadingsTitleDescriptionTabs />,
    title: 'TitleDescriptionTabs',
    isComplex: 'false',
    size: 'sm',
    description: 'A card heading featuring a title, description, and tabbed navigation options.',
    height: '',
    category: 'card-headings',
  },
  {
    element: <ApplicationUiCardHeadingsTitleLarge />,
    title: 'TitleLarge',
    isComplex: 'false',
    size: 'sm',
    description: 'A card heading with a prominently displayed large title.',
    height: '',
    category: 'card-headings',
  },
  {
    element: <ApplicationUiCardHeadingsTitleLargeDescription />,
    title: 'TitleLargeDescription',
    isComplex: 'false',
    size: 'sm',
    description: 'A large title card heading accompanied by a description.',
    height: '',
    category: 'card-headings',
  },
];
export function Page() {
  const { t } = useTranslation();
  const pageTitle = 'CardHeadings';
  const pageDescription =
    'Explore our card headings, designed to capture attention and neatly categorize content within cardBased layouts.';
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
