import { Box, Collapse, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Styles } from '../../theme/types';
import primero from '../../resources/data/subjects/primero.json';
import segundo from '../../resources/data/subjects/segundo.json';
import tercero from '../../resources/data/subjects/tercero.json';
import cuarto from '../../resources/data/subjects/cuarto.json';
import quinto from '../../resources/data/subjects/quinto.json';
import sexto from '../../resources/data/subjects/sexto.json';
import septimo from '../../resources/data/subjects/septimo.json';
import octavo from '../../resources/data/subjects/octavo.json';
import { ExpandLess, ExpandMore } from '@mui/icons-material';


const drawerWidth = 200;

const semesters = [
  { id: 1, tab: 'Primer Semestre', data: primero, key: 10 },
  { id: 2, tab: 'Segundo Semestre', data: segundo, key: 20 },
  { id: 3, tab: 'Tercero Semestre', data: tercero, key: 30 },
  { id: 4, tab: 'Cuarto Semestre', data: cuarto, key: 40 },
  { id: 5, tab: 'Quinto Semestre', data: quinto, key: 50 },
  { id: 6, tab: 'Sexto Semestre', data: sexto, key: 60 },
  { id: 7, tab: 'Septimo Semestre', data: septimo, key: 70 },
  { id: 8, tab: 'Octavo Semestre', data: octavo, key: 80 }
]

const SideDrawer = () => {
  const [open, setOpen] = useState<any>({});
  const [openTab, setOpenTab] = useState<number>(0);

  const handleClick = (index: number) => {
    let id = index + 1;
    setOpen((prevState: any) => ({ ...prevState, [id]: !prevState[id] }));
  };

  useEffect(() => {
  }, [open, openTab])


  return (
    <Drawer
      variant="permanent"
      PaperProps={{ sx: { backgroundColor: '#002333', color: '#fff' } }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {semesters.map((semester, index) => (
            <>
              <ListItemButton onClick={() => handleClick(index)} key={`${semester.key}${index}`}>
                <ListItemText primary={semester.tab} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open[semester.id]} timeout="auto" unmountOnExit>
                <List disablePadding>
                  {
                  semester.data.map((item,index) => (
                    <ListItemButton sx={{ pl: 4 }} key={`${index}${semester.key}`} onClick={() => console.log(`${index}${semester.key}`)}>
                      <ListItemText primary={item.title}/>
                    </ListItemButton>
                  ))
                  }
                </List>
              </Collapse>
            </>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default SideDrawer