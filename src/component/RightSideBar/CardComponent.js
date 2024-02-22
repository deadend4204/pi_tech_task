import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { LoremButton } from './RightSideBarStyles';
import LockIcon from '@mui/icons-material/Lock';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 350,borderRadius:"16px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
        <LoremButton
                variant="text"
         
                startIcon={<LockIcon sx={{width:"14px"}}/>}
              >
               Lorem ipsum
              </LoremButton>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
