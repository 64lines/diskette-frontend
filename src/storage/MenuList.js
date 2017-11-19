import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import CapacityProgress from './CapacityProgress'
import AccessTime from 'material-ui/svg-icons/device/access-time.js';
import Delete from 'material-ui/svg-icons/action/delete.js';
import Storage from 'material-ui/svg-icons/device/storage.js';

const style = {
  margin: 12,
};

const MenuList = () => (
  <div>
    <List>
      <RaisedButton label="Upload Files" primary={true} style={style} />
      <CapacityProgress />
      <ListItem primaryText="Recent" leftIcon={<AccessTime />} />
      <ListItem primaryText="Trash" leftIcon={<Delete />} />
    </List>
    <Divider />
    <List>
      <ListItem primaryText="Buy more Diskettes" leftIcon={<Storage />} />
    </List>
  </div>
);

export default MenuList;