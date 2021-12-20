import * as React from 'react';
import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import DenseTable from '../components/densetable';
import Link from '@mui/material/Link';
import { Card, Container } from '@mui/material';
import BasicCard from '../components/profileCard';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const [udata, setuData] = React.useState([]);
  // const [pdata, setpData] = React.useState([]);
  const [repoInfo, setRepoInfo] = React.useState([]);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  async function getUserData(){
    await fetch('http://localhost:5000/dashboard')
    .then(res => res.json())
    // .then(data=>console.log(data.map(item=>item)))
    .then(data=>setuData(data))

    
  }
  
React.useEffect(()=>{getUserData()},[])
// React.useEffect(()=>{getUserProfileData()},[])

// useEffect(()=>{getToken()},[])

// function getRepoInfo(){
//   setRepoInfo(udata.map((item,index)=>({"name":item.name,"clone_url":item.clone_url,"url":item.html_url})))
// }
// React.useEffect(()=>{getRepoInfo()},[udata])
// console.log(repoInfo)
  return (
<Container style={{display:'flex',padding:'5%'}}> 

<BasicCard photo={udata.avatar_url} name={udata.name} userName={udata.login} url={udata.html_url}/>


<Container style={{height:'500px',width:'600px',overflow:'scroll'}}>
{/* <DenseTable data={repoInfo} /> */}

</Container>
 </Container>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
