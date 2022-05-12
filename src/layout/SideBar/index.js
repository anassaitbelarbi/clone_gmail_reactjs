import React from 'react';
import SideBarOption from '../../components/SideBarOption';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { IconButton } from '@mui/material';

import './SideBar.css';


const SideBar = () => {
    return (
        <div className="sidebar">
            <Button
                startIcon={<AddIcon fontSize="large" />}
                className="sidebar__compose"
            >
                Compose
            </Button>

            <SideBarOption Icon={InboxIcon} title={'Inbox'} number={45} selected={true} />
            <SideBarOption Icon={StarIcon} title={'Starred'} number={45} />
            <SideBarOption Icon={AccessTimeIcon} title={'Snoozed'} number={56} />
            <SideBarOption Icon={LabelImportantIcon} title={'Important'} number={23} />
            <SideBarOption Icon={NearMeIcon} title={'Sent'} number={68} />
            <SideBarOption Icon={NoteIcon} title={'Drafts'} number={12} />
            <SideBarOption Icon={ExpandMoreIcon} title={'More'} number={35} />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
