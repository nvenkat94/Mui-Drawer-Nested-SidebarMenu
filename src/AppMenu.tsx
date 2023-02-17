import React from 'react'
import { makeStyles, createStyles } from '@mui/styles'

import List from '@mui/material/List'

import IconDashboard from '@mui/icons-material/Dashboard'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';import IconPeople from '@mui/icons-material/People'
import IconBarChart from '@mui/icons-material/BarChart'
import IconLibraryBooks from '@mui/icons-material/LibraryBooks'

import AppMenuItem from './AppMenuItem'

interface proptypee{
    handle:any
}
const appMenuItems = [
  {
    name: 'Dashboard',
    link: '/',
    Icon: IconDashboard,
  },
  {
    name: 'Profile',
    link: '/profile',
    Icon: ManageAccountsIcon,
  },
  {
    name: 'Friends',
    link: '/friends',
    Icon: IconPeople,
  },
  {
    name: 'Reports',
    link: '/reports',
    Icon: IconBarChart,
  },
  {
    name: 'Nested Pages',
    Icon: IconLibraryBooks,
    items: [
      {
        name: 'Level 2',link:"/dkkk"
      },
      {
        name: 'Level 2',
        items: [
          {
            name: 'Level 3',
            link:"/ssss"
          },
          {
            name: 'Level 3',
            link:"/jhhvv"
          },
        ],
      },
    ],
  },
]

const AppMenu: React.FC<proptypee> = ({handle}) => {
    // const {handle}=props;
  const classes = useStyles()

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} handle={handle}/>
      ))}
    </List>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

export default AppMenu
