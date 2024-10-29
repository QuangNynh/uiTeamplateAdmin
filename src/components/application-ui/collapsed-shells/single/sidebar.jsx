import {
  alpha,
  Box,
  Drawer,
  lighten,
  styled,
  SwipeableDrawer,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import { SidebarNavMenu } from 'src/components/application-ui/vertical-shells/dark/sidebar-nav-menu';
import { Logo } from 'src/components/base/logo';
import { Scrollbar } from 'src/components/base/scrollbar';
import { neutral } from 'src/theme/colors';
import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_COLLAPSED } from 'src/theme/utils';
import { NavMenu } from './menu';

const SidebarWrapper = styled(Box)({
  height: '100vh',
  color: neutral[200],
  display: 'flex',
  flexDirection: 'column',
});
export const Sidebar = (props) => {
  const { onClose, onOpen, menuItems, open, ...other } = props;
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const theme = useTheme();
  const sidebarContentMobile = (
    <SidebarWrapper
      component="nav"
      role="navigation"
      sx={{
        width: SIDEBAR_WIDTH,
      }}
    >
      <Box
        p={2}
        display="flex"
        justifyContent={{
          xs: 'flex-start',
          lg: 'space-between',
        }}
        alignItems="center"
      >
        <Logo
          dark
          isLinkStatic
        />
      </Box>

      <Box
        flex={1}
        overflow="auto"
        position="relative"
        zIndex={6}
      >
        <Scrollbar dark>
          <SidebarNavMenu menuItems={menuItems} />
        </Scrollbar>
      </Box>
    </SidebarWrapper>
  );
  const sidebarContent = (
    <SidebarWrapper
      component="nav"
      role="navigation"
      sx={{
        width: SIDEBAR_WIDTH_COLLAPSED,
      }}
    >
      <Box
        flex={1}
        position="relative"
        zIndex={6}
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <Box
          display="flex"
          flexDirection="column"
        >
          <NavMenu menuItems={menuItems} />
        </Box>
      </Box>
    </SidebarWrapper>
  );
  if (mdUp) {
    return (
      <Drawer
        anchor="left"
        open
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          backgroundColor: 'neutral.900',
        }}
        PaperProps={{
          sx: {
            border: 0,
            background: alpha(lighten(neutral[900], 0.1), 0.2),
            width: SIDEBAR_WIDTH_COLLAPSED,
            borderRight:
              theme.palette.mode === 'dark' &&
              `1px solid ${alpha(theme.palette.neutral[800], 0.5)}`,
            position: 'sticky',
            overflow: 'initial',
            height: '100vh',
            transition: (theme) => theme.transitions.create(['width', 'box-shadow']),
          },
        }}
        variant="persistent"
        {...other}
      >
        {sidebarContent}
      </Drawer>
    );
  }
  return (
    <SwipeableDrawer
      anchor="left"
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      ModalProps={{
        keepMounted: true,
      }}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          overflow: 'hidden',
          boxShadow: (theme) => theme.shadows[24],
        },
      }}
      variant="temporary"
      {...other}
    >
      {sidebarContentMobile}
    </SwipeableDrawer>
  );
};
Sidebar.propTypes = {
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
};
