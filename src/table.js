import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

function Demotable() {
    const [tdata, setTdata] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => setTdata(res.data))
    }, []);

    console.log(tdata);

    const tcolumns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'First name', width: 130 },
        { field: 'username', headerName: 'Last name', width: 130 },
        { field: 'email', headerName: 'Email' }
    ];

    return (
        <>
            <div className="main">
                <DataGrid
                    rows={tdata}
                    columns={tcolumns}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </>
    );
}

export default Demotable;
