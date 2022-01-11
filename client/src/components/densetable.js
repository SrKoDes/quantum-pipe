import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, Link,Fab } from '@mui/material';


export default function DenseTable(props) {

  async function addRepo(repo) {
    // Default options are marked with *
    const response = await fetch(`http://localhost:5000/repoWorkingStation`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      redirected: 'follow',
      body: repo // body data type must match "Content-Type" header
    });
    
    
    console.log(response.body)
    if(response.redirected){
      window.location.href = response.url
    }
  }

  return (
    <Container maxWidth="sm">
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 500 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Repositories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{display:"flex",justifyContent:"space-between"}} >
               <Link href={item.html_url}>{item.name}</Link> 
              <Fab variant="extended" size="small" color="primary" onClick={()=>addRepo(item.html_url)}>Add</Fab>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}