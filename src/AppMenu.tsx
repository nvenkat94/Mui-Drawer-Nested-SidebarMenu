import React from 'react'
import { makeStyles, createStyles } from '@mui/styles'

import List from '@mui/material/List'

import IconDashboard from '@mui/icons-material/Dashboard'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';import IconPeople from '@mui/icons-material/People'
import IconBarChart from '@mui/icons-material/BarChart'
import IconLibraryBooks from '@mui/icons-material/LibraryBooks';
import InBoxIcon from "@mui/icons-material/MoveToInbox";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";

import AppMenuItem from './AppMenuItem'

interface proptypee{
    handle:any
}
const appMenuItems1 = [
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

const appMenuItems = [
    {
      name: "Dashboard",
      link: "/dashboard/app",
    //   Icon: Boost,
    },
    {
      name: "Admin Setting",
    //   Icon: Boost,
      items: [
        {
          name: "User List",
          link: "/dashboard/customer/user",
        },
        {
          name: "User Roles/Group",
          link: "/dashboard/customer/list",
          // Icon: ArrowBackIcon,
        },
        {
          name: "Audit Logs",
          link: "/dashboard/customer/user3",
          // Icon: ArrowBackIcon,
        },
      ],
    },
    {
      name: "Customer Onboarding",
      link: "/dashboard/customer/list",
    //   Icon: Sidenav,
    },
    // {
    //   name: "Customers Deatils",
    //   link: "/dashboard/customer/2023020314512238022506/review",
    //   Icon: Sidenav,
    // }
  ];

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
