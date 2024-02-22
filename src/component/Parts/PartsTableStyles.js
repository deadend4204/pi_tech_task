// MuiDataGrid-columnHeaders
//D9D9D9
import { DataGrid } from '@mui/x-data-grid';
import { styled } from "@mui/material/styles";


export const CustomTable = styled(DataGrid)(() => ({
    backgroundColor: "white",
    ".MuiDataGrid-columnHeaders":{
        background:"#D9D9D9"
    }
  }));