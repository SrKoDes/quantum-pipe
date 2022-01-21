import * as React from 'react';
import { useEffect, useLayoutEffect } from 'react';
import Typography from '@mui/material/Typography';
import DenseTable from '../components/densetable';
import Link from '@mui/material/Link';
import { Card, Container } from '@mui/material';
import BasicCard from '../components/profileCard';
import loadingLogo from '../images/pipelogogif.gif'
import ipAddress from '../client_ip.txt'

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
  const [isUdataReady, setUdataReady] = React.useState(false)
  // const [pdata, setpData] = React.useState([]);
  const [repoInfo, setRepoInfo] = React.useState([]);

  const [currentIp, setCurrentIp] = React.useState('');
  const toggleDrawer = () => {
    setOpen(!open);
  };

  function getIp(){
    fetch(ipAddress)
    .then(response => response.text())
    .then(text => setCurrentIp(text))
  
  }
  useEffect(()=>{getIp()},[])

  async function getUserData(){
    await fetch(`http://${currentIp}:5000/dashboard`)
    .then(res => res.json())
    // .then(data=>console.log(data.map(item=>item)))
    .then(data=>setuData(data))
    .then(data=>console.log(data))
    setUdataReady(true)

    
  }
  
React.useLayoutEffect(()=>{getUserData()},[])
console.log(udata.repos)
// React.useEffect(()=>{getUserProfileData()},[])

// useEffect(()=>{getToken()},[])

// function getRepoInfo(){
//   setRepoInfo(udata.map((item,index)=>({"name":item.name,"clone_url":item.clone_url,"url":item.html_url})))
// }
// React.useEffect(()=>{getRepoInfo()},[udata])
// console.log(repoInfo)

if(isUdataReady===true){

  return (
<Container style={{display:'flex',padding:'5%'}}> 

<BasicCard photo={udata.user_info[0]} name={udata.user_info[1]} userName={udata.user_info[2]} url={udata.user_info[3]}/>


<Container style={{height:'500px',width:'600px',overflow:'scroll'}}>
<DenseTable data={udata.repos} />

</Container>
 </Container>
  );
}else{
  return(
<Container>
  <Typography>Loading...</Typography>
  <img style={{width:'300px'}} src={loadingLogo} />
</Container>
  );
}
}



export default function Dashboard() {
  return <DashboardContent />;
}
