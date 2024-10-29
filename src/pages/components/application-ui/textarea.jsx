import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiTextareaBasic from 'src/components/application-ui/textarea/basic/basic';
import ApplicationUiTextareaWysiwygEditor from 'src/components/application-ui/textarea/wysiwyg-editor/wysiwyg-editor';
import { Helmet } from 'src/components/base/helmet';
import MarketingPageTitle from 'src/components/website/page-title';

const components = [
  {
    element: <ApplicationUiTextareaBasic />,
    title: 'Basic',
    isComplex: 'false',
    size: 'md',
    description:
      'A basic textarea component, providing a simple and straightforward area for text input.',
    height: '',
    category: 'textarea',
  },
  {
    element: <ApplicationUiTextareaWysiwygEditor />,
    title: 'WysiwygEditor',
    isComplex: 'false',
    size: 'md',
    description:
      'A What You See Is What You Get editor textarea, allowing for rich text formatting and content creation.',
    height: '',
    category: 'textarea',
  },
];
export function Page() {
  const { t } = useTranslation();
  const pageTitle = 'Textarea';
  const pageDescription =
    'Utilize our textarea fields for multiLine text input, accommodating longer user inputs like comments or messages.';
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
