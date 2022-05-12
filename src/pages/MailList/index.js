import React from 'react';
import Section from './Section';
import EmailRow from './EmailRow';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import SettingsIcon from '@mui/icons-material/Settings';

import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import './MailList.css';

function MailList() {
    return (
        <div className="mailList">
            <div className="mailList__setting">
                <div className="mailList__settingLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>

                    <IconButton>
                        <RedoIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="mailList__settingRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>

                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>

                    <IconButton>
                        <KeyboardIcon />
                    </IconButton>

                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={InboxIcon} title={'Primary'} color={'red'} selected />
                <Section Icon={PeopleIcon} title={'Social'} color={'#1A73E8'} />
                <Section Icon={LocalOfferIcon} title={'Promotions'} color={'green'} />
            </div>
            <div className="emailList__list">
                <EmailRow id={''} title={'anassaitbemarbi@gmail.com'} subject={'test test subject'} description={'uioooo'} time={'4pm'} />
            </div>
        </div>
    )
}

export default MailList;
