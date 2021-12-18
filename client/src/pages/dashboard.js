import * as React from 'react';

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
  const [pdata, setpData] = React.useState([]);
  const [repoInfo, setRepoInfo] = React.useState([]);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  async function getUserData(){
    await fetch('https://api.github.com/users/hector6921/repos')
    .then(res => res.json())
    // .then(data=>console.log(data.map(item=>item)))
    .then(data=>setuData(data))

    
  }

  async function getUserProfileData(){
    await fetch('https://api.github.com/users/hector6921')
    .then(res => res.json())
    // .then(data=>console.log(data.map(item=>item)))
    .then(data=>setpData(data))

    
  }
React.useEffect(()=>{getUserData()},[])
React.useEffect(()=>{getUserProfileData()},[])

function getRepoInfo(){
  setRepoInfo(udata.map((item,index)=>({"name":item.name,"clone_url":item.clone_url,"url":item.html_url})))
}
React.useEffect(()=>{getRepoInfo()},[udata])
console.log(repoInfo)
  return (
<Container style={{display:'flex',padding:'5%'}}> 

<BasicCard photo={pdata.avatar_url} name={pdata.name} userName={pdata.login} url={pdata.html_url}/>


<Container style={{height:'500px',width:'600px',overflow:'scroll'}}>
<DenseTable data={repoInfo} />

</Container>
 </Container>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
