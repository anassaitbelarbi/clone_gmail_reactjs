import React from 'react';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import './EmailRow.css';

function EmailRow({ id, title, subject, description, time }) {
    const history = useNavigate();
    return (
        <div onClick={() => history('/mail')} className='emailRow'>
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>

            <h3 className="emailRow__title">
                {title}
            </h3>

            <div className="emailRow__message">
                <h4>
                    {subject}{" "}
                    <span className='emailRow__description'>- {description}</span>
                </h4>
            </div>

            <p className="emailRow__time">
                {time}
            </p>
        </div>
    )
}

export default EmailRow;
