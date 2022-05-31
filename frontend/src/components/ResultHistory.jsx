import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export const ResultHistory = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", bgcolor: "primary.main" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText
          primary="検索履歴"
          primaryTypographyProps={{
            color: "primary.contrastText",
            fontWeight: "medium",
            variant: "body2",
            align: "center",
          }}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.resultHistoryHashList.map((historyHash, index) => {
            return (
              <ListItemButton
                sx={{ pl: 4, backgroundColor: "#d5976a" }}
                onClick={() => {
                  window.open(historyHash.url);
                }}
              >
                <ListItemText
                  key={index}
                  primary={historyHash.name}
                  primaryTypographyProps={{
                    color: "primary.contrastText",
                    fontWeight: "medium",
                    variant: "body2",
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </List>
  );
};
