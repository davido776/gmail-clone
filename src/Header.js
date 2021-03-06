import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton,Avatar } from '@material-ui/core';
import gmailogo from './gmaillogo.jpg'
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useSelector,useDispatch} from 'react-redux';
import {selectUser,logout} from './features/userSlice';
import { auth } from './firebase';
function Header(props) {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
     
    const Logout = ()=>{
        auth.signOut()
        .then(()=>{
            dispatch(logout())
        })
        
    }

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img 
                   src={gmailogo}
                   alt=""
                />
            </div>

            <div className="header__middle">
                <SearchIcon/>
                <input placeholder="search" type="text"  />
                <ArrowDropDownIcon/>
            </div>

             <div className="header__right">
                <IconButton>
                   <AppsIcon/>
                </IconButton>
               
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>

                <Avatar onClick={Logout} src={user?.photoURL}/>
            </div>  
        </div>
    );
}

export default Header;