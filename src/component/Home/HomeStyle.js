import { styled } from "@mui/material/styles";

const Responsibility = styled("div")(() => ({
    width : '430px',
    minWidth : '430px',
  height: "174px",
  borderRadius: "16px",
  backgroundColor: "#F2EEEB",
  padding: "20px 20px 20px 20px",
  fontFamily: 'Inter, sans-serif',
  lineHeight : '16px'
}));

const Header = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const Search = styled("div")(() => ({
  width: "200px",
  height: "36px",
  borderRadius: "28px",
  background:' #E1DBD2',
  display : 'flex',
  justifyContent : 'space-between',
  alignItems : 'center',
  padding : '4px'
}));
const PO = styled("div")(() => ({
    width: "125px",
    height: "36px",
    borderRadius: "28px",
    background:' #E1DBD2',
    display : 'flex',
    justifyContent : 'space-between ',
    alignItems : 'center',
    padding : '10px 4px'
}));
const Icon = styled("div")(() => ({
    width: "42px",
    height: "36px",
    borderRadius: "28px",
    background:' #E1DBD2',
    display : 'flex',
    justifyContent : 'space-between ',
    alignItems : 'center',
    backgroundColor : '#020A08' ,
    color : '#68DA6A'
}));

const Text = styled("div")(() => ({
    fontSize : '12px',
    fontWeight : '400',
   
  }));
  const Code = styled("div")(() => ({
    display : 'flex',
  
   marginTop : '15px'
  }));

  const Company = styled("div")(() => ({
    width: "100%",
    backgroundColor: "#F2EEEB",
    
  }));
  const Clean = styled("div")(() => ({
    display : 'flex',
    marginTop : '15px',
  }));

  const LabelClean = styled('div')(({theme}) => ({
    display : 'flex',
    justifyContent : 'space-between'
  }))
  const Label = styled('div')(() => ({
    display : 'flex',
    justifyContent : 'space-between',
    
  }))
  const Order = styled('div')(() => ({
    display : 'flex',
   marginTop : '20px'
    
  }))


export { Responsibility, Header, Search, PO, Icon,Text,Code ,Company,Label,Clean,LabelClean,Order};
