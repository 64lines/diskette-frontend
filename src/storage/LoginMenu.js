import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import RaisedButton from 'material-ui/RaisedButton';
import {CardHeader} from 'material-ui/Card';

const style = {
    margin: 12,
};

const LoginMenu = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <CardHeader
        title="Dayana Lopez"
        subtitle="dayana.lopez@ping.com"
        avatar="http://www.material-ui.com/images/uxceo-128.jpg"
        />
        <RaisedButton label="My Account" primary={true} style={style}/>
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

LoginMenu.muiName = 'IconMenu';

export default LoginMenu;
