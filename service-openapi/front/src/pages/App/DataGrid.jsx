import { Box } from '@mui/material';
import { DataGridPremium as DataGridMui } from '@mui/x-data-grid-premium';
import PropTypes from 'prop-types';

const DataGrid = ({
    columns,
}) => {
    return (
        <Box display='flex' width='100%' height='100%' >
                <DataGridMui
                    columns={columns}
                />
        </Box>
    );
};

DataGrid.propTypes = {
    columns: PropTypes.array.isRequired,
};

export default DataGrid;
