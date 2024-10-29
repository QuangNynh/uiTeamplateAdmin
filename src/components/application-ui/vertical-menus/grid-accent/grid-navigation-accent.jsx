import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone';
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';
import { Card, CardActionArea, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const DASHBOARD_ITEMS = [
  {
    label: 'Projects',
    icon: <AccountTreeTwoToneIcon />,
    color: 'warning.main',
  },
  {
    label: 'Helpdesk',
    icon: <ContactSupportTwoToneIcon />,
    color: 'success.main',
  },
  {
    label: 'Dashboard',
    icon: <DashboardCustomizeTwoToneIcon />,
    color: 'primary.main',
  },
  {
    label: 'Customers',
    icon: <PeopleOutlineTwoToneIcon />,
    color: 'error.main',
  },
];
const GridNavigationAccent = () => {
  const { t } = useTranslation();
  return (
    <Grid
      container
      spacing={2}
    >
      {DASHBOARD_ITEMS.map((item) => (
        <Grid
          key={item.label}
          xs={12}
          sm={6}
        >
          <Card
            elevation={0}
            variant="outlined"
            sx={{
              borderWidth: 0,
            }}
          >
            <CardActionArea
              sx={{
                p: 2,
              }}
            >
              {React.cloneElement(item.icon, {
                sx: {
                  mb: 1,
                  color: item.color,
                },
              })}
              <Typography variant="h5">{t(item.label)}</Typography>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default GridNavigationAccent;
