import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import {
  alpha,
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  styled,
  useMediaQuery,
} from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { RouterLink } from 'src/components/base/router-link';
import { usePathname } from 'src/hooks/use-pathname';

const ListSubheaderWrapper = styled(ListSubheader)(({ theme }) => ({
  background: theme.palette.background.default,
  textTransform: 'uppercase',
  fontWeight: 600,
  fontSize: 13,
  color: theme.palette.mode === 'dark' ? theme.palette.neutral[300] : theme.palette.neutral[800],
  lineHeight: theme.spacing(5),
  padding: theme.spacing(0, 2),
}));
export const ListItemButtonWrapper = styled(ListItemButton)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.neutral[700] : theme.palette.neutral[500],
  borderRadius: theme.shape.borderRadius * 4,
  transition: 'none',
  fontWeight: 600,
  fontSize: 14,
  marginBottom: '3px',
  padding: theme.spacing(0.8, 1, 0.8, 2),
  '& .MuiListItemIcon-root': {
    color: theme.palette.mode === 'dark' ? theme.palette.neutral[700] : theme.palette.neutral[800],
    minWidth: 38,
  },
  '& .MuiListItemText-root': {
    color: theme.palette.mode === 'dark' ? theme.palette.neutral[500] : theme.palette.neutral[800],
  },
  '&:hover': {
    color: theme.palette.mode === 'dark' ? theme.palette.neutral[500] : theme.palette.primary.dark,
    background:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.common.white, 0.04)
        : alpha(theme.palette.common.white, 0.8),
    '& .MuiListItemIcon-root': {
      color:
        theme.palette.mode === 'dark' ? theme.palette.neutral[300] : theme.palette.primary.main,
    },
    '& .MuiListItemText-root': {
      color: theme.palette.mode === 'dark' ? theme.palette.neutral[50] : theme.palette.primary.main,
    },
  },
  '&.Mui-selected, &.Mui-selected:hover': {
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
    '& .MuiListItemIcon-root': {
      color: alpha(theme.palette.common.white, 0.95),
    },
    '& .MuiListItemText-root': {
      color: alpha(theme.palette.common.white, 0.95),
    },
  },
}));
const SubMenu = styled(List)(({ theme }) => ({
  '& .MuiListItemButton-root': {
    padding: theme.spacing(0.8, 1, 0.8, 6),
    fontWeight: 500,
    '&::before': {
      content: '" "',
      background: theme.palette.primary.main,
      opacity: 0,
      position: 'absolute',
      left: theme.spacing(3),
      borderRadius: 4,
      top: '50%',
      height: '6px',
      width: '6px',
      transform: 'scale(0)',
      marginTop: '-3px',
      transition: theme.transitions.create(['transform', 'opacity']),
    },
    '&.Mui-selected, &.Mui-selected:hover': {
      color: theme.palette.primary.dark,
      background: alpha(theme.palette.common.white, 0.8),
      '& .MuiListItemIcon-root': {
        color: theme.palette.primary.main,
      },
      '& .MuiListItemText-root': {
        color: theme.palette.primary.main,
      },
    },
    '&.Mui-selected, &:hover': {
      '&::before': {
        opacity: 1,
        transform: 'scale(1)',
      },
    },
    '& .MuiListItemText-root': {
      margin: 0,
    },
  },
}));
const NavItem = ({ item }) => {
  const { title, icon, route, subMenu } = item;
  const pathname = usePathname();
  const isActive = route && pathname.includes(route);
  const isSubMenuActive = subMenu?.some((sub) => sub.route && pathname.includes(sub.route));
  const [open, setOpen] = useState(isSubMenuActive);
  const handleToggle = () => {
    if (subMenu) {
      setOpen(!open);
    }
  };
  return (
    <Box px={2}>
      <ListItemButtonWrapper
        selected={isActive || isSubMenuActive}
        onClick={handleToggle}
        //@ts-ignore
        component={route ? RouterLink : 'a'}
        href={route ? route : undefined}
      >
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText
          disableTypography
          primary={title}
        />
        {subMenu && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: (theme) => theme.transitions.create(['transform']),
            }}
          >
            <KeyboardArrowRightTwoToneIcon fontSize="small" />
          </Box>
        )}
      </ListItemButtonWrapper>
      {subMenu && (
        <Collapse in={open}>
          <SubMenu
            component="div"
            sx={{
              mx: -2,
            }}
            disablePadding
          >
            {subMenu.map((subItem) => (
              <NavItem
                key={subItem.title}
                item={subItem}
              />
            ))}
          </SubMenu>
        </Collapse>
      )}
    </Box>
  );
};
export const SidebarNavMenu = ({ menuItems = [] }) => {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  return (
    <Box>
      {menuItems.map((menuItem) => (
        <div key={menuItem.title}>
          <List
            component="nav"
            subheader={
              <ListSubheaderWrapper
                component="div"
                disableSticky={!mdUp}
              >
                {menuItem.title}
              </ListSubheaderWrapper>
            }
          >
            {menuItem.subMenu?.map((subItem) => (
              <NavItem
                key={subItem.title}
                item={subItem}
              />
            ))}
          </List>
        </div>
      ))}
    </Box>
  );
};
SidebarNavMenu.propTypes = {
  menuItems: PropTypes.array,
};
