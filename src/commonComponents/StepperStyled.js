import LinearProgress, { linearProgressClasses }  from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 4,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#8080804f",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:  'maroon',
    },
  }));