import React from 'react';
import { IconButton, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png" alt="" />
            </div>

            <div className='header__middle'>
                <SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDownIcon />
            </div>

            <div className='header__right'>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar />
            </div>
        </div>
    )
}

export default Header
