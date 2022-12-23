import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const Information = ({info}) => {
    const {_id,icon,title,phone,description} = info
    const theme = useTheme();
    return (
        <Card 
            sx={{ 
            width:"100%",
            display: 'flex' ,
            py:1,
            px:2,
            alignItems:'center',
            boxShadow:"0px 1px 16px 0px rgb(139 139 139 / 10%)",
            borderRadius:4,
            ":hover": {
                boxShadow:"0px 0px 20px 3px #0000002e",
                cursor: "pointer",
                scale:1,
                transition: "all 1s",
                "& .icon": {
                    rotate: "360deg",
                    transition: "all 3s",
                  },
              },
             }}>
            <Box className='icon'>
                <img src={icon} alt="" width={"100%"} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography 
                component="div"
                fontSize={"20px"}
                fontWeight={600}
                >
                {title}
                </Typography>
                <Typography fontSize={"17px"} color={"#606575"}>
                {phone}
                </Typography>
                <Typography fontSize={"17px"} color={"#606575"}>
                {description}
                </Typography>
            </CardContent>
            </Box>
        </Card>
    );
};

export default Information;