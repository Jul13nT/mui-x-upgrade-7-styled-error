import { Box, CircularProgress } from '@mui/material';
import  DataGrid  from './App/DataGrid';

const App = () => {

    return (
        <Box m={2}>
            <DataGrid columns={[]}/>
            <CircularProgress />
        </Box>
    );
};

export default App;
