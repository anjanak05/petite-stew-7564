import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../Style/Navbar.module.css';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
} from '@chakra-ui/react';

const links = [
  {
    to: '/',
    name: 'Fantasy Center',
    linkLogo: 'https://www.cricket.com/svgs/icons/frc.svg',
  },
  {
    to: '/Criclytics',
    name: 'Criclytics',
    linkLogo: 'https://www.cricket.com/svgs/icons/criclytics-icon.svg',
  },
  {
    to: '/Schedule',
    name: 'Schedule',
    linkLogo: 'https://www.cricket.com/svgs/icons/schedule-icon.svg',
  },
  {
    to: '/Series',
    name: 'Series',
    linkLogo: 'https://www.cricket.com/svgs/icons/series-icon.svg',
  },
  {
    to: '/News',
    name: 'News',
    linkLogo: 'https://www.cricket.com/svgs/icons/news-and-articles-icon.svg',
  },
  {
    to: '/Videos',
    name: 'Videos',
    linkLogo: 'https://www.cricket.com/svgs/icons/video-icon.svg',
  },

  {
    to: '/Players',
    name: 'Players',
    linkLogo: 'https://www.cricket.com/svgs/icons/players-icon.svg',
  },
  {
    to: '/Teams',
    name: 'Teams',
    linkLogo: 'https://www.cricket.com/svgs/icons/teams-icon.svg',
  },
];

const logoLinks = [
  { to:"/",
    image: 'https://www.cricket.com/svgs/icons/stadium-icon.svg',
    name: 'Stadiums',
  },
  { to:"/",
    image: 'https://www.cricket.com/svgs/icons/rankings-icon.svg',
    name: 'Rankings',
  },
  { to:"/",
    image: 'https://www.cricket.com/svgs/GroupArchive.svg',
    name: 'Archives',
  },
  { to:"/",
    image: 'https://www.cricket.com/svgs/icons/records-icon.svg',
    name: 'Records',
  },
  { to:"/",
    image: 'https://www.cricket.com/svgs/fantasynav.svg',
    name: 'Season Fantasy',
  },
  { to:"/Profile",
    image: 'https://www.cricket.com/svgs/icons/profile.svg',
    name: 'Profile',
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.crickLogo} src="https://www.cricket.com/cricket.com.svg" alt ="logosvg"/>
        {links.map(item => (
          <div className={styles.linkDiv}>
            <NavLink to={item.to} className={styles.navlink}>
              <div>
                <img
                  className={styles.linkLogo}
                  src={item.linkLogo}
                  alt="logoLinks"
                ></img>
                <p>{item.name}</p>
              </div>
            </NavLink>
          </div>
        ))}

        <div className={styles.menuBar}>
          <img
            src="https://www.cricket.com/svgs/icons/more.svg"
            alt="logoLinks"
          ></img>
          <Menu>
            <MenuButton
              colorScheme="black"
              size="xs"
              color="#b9bcc1"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              More
            </MenuButton>

            <MenuList background="black">
              {logoLinks.map(e => (
                <MenuItem background="black" fontSize="13px">
                  <Image
                    boxSize="1.4rem"
                    borderRadius="full"
                    src={e.image}
                    alt="Fluffybuns the destroyer"
                    mr="10px"
                  />
                  
                    <Link to={e.to}>{e.name}</Link>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
