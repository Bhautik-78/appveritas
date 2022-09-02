import React,{useState} from 'react';
import PropTypes from 'prop-types';

import './Navbar.css';
import Dropdown from './Dropdown';
import DropDown from './Dropdown1';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Navitem } from './Navitem';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const drawerWidth = 240;

// const navItems = ['Home', 'About', 'Contact'];


function DrawerAppBar(props) {

  const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

const[Dropdowns,setDropdowns]=useState(false);
const[open,setopen]=useState(false);


  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  
 
  const handleEvent = () =>{
    navigate('/Events');
  }
  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List sx={{color: "black"}}>
        {/* {Navitem.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}
         {Navitem.map((item)=>{
            return(
                <li key={item.id}>
                    <Link to={item.path} className={item.cName}
                     >
                        {item.title}
                    </Link>
                    {/* {Dropdowns &&<Dropdown/>}  */}
                </li>
            )
        })}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <Box >
       <AppBar sx={{ bgcolor: "#FFFFFF", color:"black",boxShadow: 'none',height:"4rem"}}>
        <Toolbar style= {{justifyContent:"space-between",padding:" 0px 102px 10px 102px" }}>
            <Toolbar  >
             
                <Link to="/Home" ><img  alt="logo" style={{width:"100px",height:"62px"}} />
                </Link>
                <p style={{fontWeight:600}}> Gardening Vlog</p>
            </Toolbar>
            <Typography
               
                variant="h6"
                component="img"
                sx={{ flexGrow: 1,  display: { xs: 'none', sm: 'block' } }}
            >
            </Typography>

            <Box sx={{ display: "flex", flexDirection:"row", gap:"7px" }}>
            

                
            <Button key="Home" className='hover' sx={{ color: 'black', textTransform: 'none', display: { xs: 'none', sm: 'block' }}}
                //  onClick={handleOnHome}
                        to="/Home"
                        
                        
                      >
                        
                      <strong style={{padding:" 10px"}}>Home</strong>
                   
                </Button>
                
                <Button key="services" sx={{ color: 'black', textTransform: 'none', display: { xs: 'none', sm: 'block' }}}
                        
                        onMouseEnter={()=> setDropdowns(true)}
                        onMouseLeave={()=> setDropdowns(false)}
                >
                    <strong style={{padding:"10px"}}>Solutions </strong>
                    {Dropdowns &&<Dropdown/>}
                </Button>
                <Button key="about" sx={{ color: 'black', textTransform: 'none', display: { xs: 'none', sm: 'block' }}}
                            onMouseEnter={()=> setopen(true)}
                            onMouseLeave={()=> setopen(false)}
                          
                        >
                    <strong style={{padding:"10px"}}>Resources
                    {open &&<DropDown/>}
</strong>
                </Button>
                <Button key="Event"  sx={{ color: 'black', textTransform: 'none', display: { xs: 'none', sm: 'block' }}}
                          onClick={handleEvent}
                          // to="/vidio"
                        >
                    <strong>Company
</strong>
                </Button>
               
                <Divider sx={{borderLeft: "1px solid black", margin:'5px'}}/>
                <Button sx={{ color: 'black', textTransform: 'none', display: { xs: 'none', sm: 'block' }}}><strong>Login</strong></Button>
            </Box>

            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
        </Toolbar>
    </AppBar>      
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" >
        <Toolbar />
       
      </Box>
    </Box>
    {/* <Dropdown/> */}
    </>
  );
}



export default DrawerAppBar;
