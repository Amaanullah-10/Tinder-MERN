import React from 'react'
import Person2Icon from '@mui/icons-material/Person2';
import tinder from './tinder.png'
import './Header.css'
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
function Header() {
  return (
    <div className="header">
        
        <IconButton>
        <Person2Icon fontSize="large" className="header__icon"/>
        </IconButton>
        <img className="header__logo" src={tinder}/>
        <IconButton>
        <ForumIcon fontSize="large" className="header__icon"/>
        </IconButton>
        
    </div>
  )
}

export default Header