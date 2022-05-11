import { Box, Collapse, Divider, Drawer, List, ListItemButton, ListItemText, Toolbar } from '@mui/material'
import { useEffect, useState } from 'react';
import primero from '../../resources/data/subjects/primero.json';
import segundo from '../../resources/data/subjects/segundo.json';
import tercero from '../../resources/data/subjects/tercero.json';
import cuarto from '../../resources/data/subjects/cuarto.json';
import quinto from '../../resources/data/subjects/quinto.json';
import sexto from '../../resources/data/subjects/sexto.json';
import septimo from '../../resources/data/subjects/septimo.json';
import octavo from '../../resources/data/subjects/octavo.json';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useAppSelector } from '../../app/hooks';
import { setSelectedSubject, subjectSelector, subjectsSelector } from '../../features/subjectSlice';
import { useDispatch } from 'react-redux';
import { Subject } from '../../../../backend/src/models/subject';


const drawerWidth = 200;

const subjects = [
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
  const dispatch = useDispatch();
  const subjects = useAppSelector(subjectsSelector);
  const subject = useAppSelector(subjectSelector);

  const [open, setOpen] = useState<any>({});



  const handleClick = (index: number) => {
    let id = index + 1;
    setOpen((prevState: any) => ({ ...prevState, [id]: !prevState[id] }));
  };

  const setSubject = (subject: Subject) => {
    dispatch(setSelectedSubject(subject));
  }

  useEffect(() => {
    console.log(subject);
  }, [subject])


  return (
    <Drawer
      variant="permanent"
      PaperProps={{ sx: { backgroundColor: '#212f44', color: '#fff' } }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {subjects.map((subject, index) => (
            <>
              <ListItemButton onClick={() => setSubject(subject)} key={`${subject.id}-${index}`}>
                <ListItemText primary={subject.title} />
              </ListItemButton>
              <Divider sx={{backgroundColor: 'white'}}/>
            </>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default SideDrawer

// return (
//   <Drawer
//     variant="permanent"
//     PaperProps={{ sx: { backgroundColor: '#002333', color: '#fff' } }}
//     sx={{
//       width: drawerWidth,
//       flexShrink: 0,
//       [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
//     }}
//   >
//     <Toolbar />
//     <Box sx={{ overflow: 'auto' }}>
//       <List>
//         {subjects.map((subject, index) => (
//           <>
//             <ListItemButton onClick={() => handleClick(index)} key={`${subject.key}${index}`}>
//               <ListItemText primary={subject.tab} />
//               {open ? <ExpandLess /> : <ExpandMore />}
//             </ListItemButton>
//             <Collapse in={open[subject.id]} timeout="auto" unmountOnExit>
//               <List disablePadding>
//                 {
//                 subject.data.map((item,index) => (
//                   <ListItemButton sx={{ pl: 4 }} key={`${index}${subject.key}`} onClick={() => console.log(`${index}${subject.key}`)}>
//                     <ListItemText primary={item.title}/>
//                   </ListItemButton>
//                 ))
//                 }
//               </List>
//             </Collapse>
//           </>
//         ))}
//       </List>
//     </Box>
//   </Drawer>
// )