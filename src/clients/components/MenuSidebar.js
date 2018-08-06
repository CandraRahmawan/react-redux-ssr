import React, { Component } from "react";
import {
  MenuList,
  MenuItem,
  Paper,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import MoveToInbox from "@material-ui/icons/MoveToInbox";
import Drafts from "@material-ui/icons/Drafts";
import Send from "@material-ui/icons/Send";

export default class MenuSidebar extends Component {
  render() {
    return (
      <Paper>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <Send />
            </ListItemIcon>
            <ListItemText inset primary="Menu 1" />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Drafts />
            </ListItemIcon>
            <ListItemText inset primary="Menu 2" />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <MoveToInbox />
            </ListItemIcon>
            <ListItemText inset primary="Menu 3" />
          </MenuItem>
        </MenuList>
      </Paper>
    );
  }
}
