import React from 'react';
import AppBar from 'material-ui/AppBar';
import MenuList from './MenuList';
import FilesList from './FilesList';
import Drawer from 'material-ui/Drawer';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import IconButton from 'material-ui/IconButton';
import LoginMenu from './LoginMenu';

const styles = {
  title: {
    cursor: 'pointer',
  },
  avatar: {
    margin: 12
  }
};

class StoragePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  
  render() { 
    return (
      <div>
        <AppBar
          title={<span style={styles.title}>Diskette</span>}
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={<LoginMenu />}
        />
        <FilesList />
        <Drawer width={400} open={this.state.open}>
          <AppBar 
            title="Menu"
            iconElementLeft={<IconButton><ArrowBack /></IconButton>}
            onTitleTouchTap={this.handleToggle}
            onLeftIconButtonTouchTap={this.handleToggle}/>
          <MenuList />
        </Drawer>
      </div>
    );
  }
}
export default StoragePanel;