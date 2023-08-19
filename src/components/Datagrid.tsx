import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 600 },
];


interface Post {
  id: number;
  title: string;
  body: string;
}

const Datagrid:React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] =useState<boolean>(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(true);
      });
  }, []);

  return (
    <div className='component'>
    <h1>Component 1</h1>
    {loading?<h1>Fetching data please wait...</h1>:<div className='grid-container' >
      <DataGrid
        rows={posts}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5,10]}
      />
    </div>}
    
    </div>
  );
}

export default Datagrid