import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Container, Fab,Stack,Chip,Stepper,Step,StepLabel } from "@mui/material";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import buildInfo from '../build_progress.txt'
import { useSearchParams } from 'react-router-dom'

function createData(name, path, deploy) {
  return {
    name,
    path,
    deploy,
    history: [
      {
        date: "2020-01-05 12:24",
        result: "Success"
      },
      {
        date: "2020-01-02 20:15",
        result: "Failed"      
    }
    ]
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [choice, setSchoice] = React.useState("progress");
  const steps = [
    'Provisioning Resources',
    'Building',
    'Complete'
  ];

  const [buildProgress, setBuildProgress] = React.useState('');

  function getBuildInfo(){
    fetch(buildInfo)
    .then(response => response.text())
    .then(text => setBuildProgress(text))
  
  }
  React.useEffect(()=>{getBuildInfo()},[buildProgress])

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.path}</TableCell>
        
        <TableCell>
        <IconButton
            aria-label="expand row"
            
          >
            <PlayCircleFilledWhiteIcon fontSize="large" color="primary" />
          </IconButton>
          <IconButton
            aria-label="expand row"
            
          >
            <PauseCircleIcon fontSize="large" color="primary" />
          </IconButton>
          <IconButton
            aria-label="expand row"
            
          >
            <StopCircleIcon fontSize="large" color="primary" />
          </IconButton>
          </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>

            <Box sx={{ margin: 1 }}>

            <Stack direction="row" spacing={1}>
            <Chip label="Progress" color="primary" variant="outlined" />
            <Chip label="History" color="primary" variant="outlined" />
            </Stack>

                {choice==="progress"?(
                <div style={{display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
                <Stepper activeStep={1} alternativeLabel>
                 {steps.map((label) => (
                   <Step key={label}>
                     <StepLabel>{label}</StepLabel>
                   </Step>
                 ))}
               </Stepper>
                
                <Box
                sx={{
                  borderRadius: '1em',
                  margin: '2em',
                  width: 600,
                  height: 300,
                  backgroundColor: '#111111',
                  padding: '3%',
                  overflow: 'auto'
                }}
              >
            <Typography sx={{color:'#fff', width: '50%' }}>
            {buildProgress}
            </Typography>
              </Box>
            </div> )
                :
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Result</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.result}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
}
            </Box>
          </Collapse>
        </TableCell>
    
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    history: PropTypes.arrayOf(
      PropTypes.shape({
        result: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }).isRequired
};

export default function CollapsibleTable() {

  const [rows, setRows] = React.useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  React.useEffect(()=>{
    const repoURL = searchParams.get('repoUrl')
    const repoName = searchParams.get('repoName')
    setRows([createData(repoName, repoURL)])
  }, [])

  return (
    <Container>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Repo</TableCell>
            <TableCell>Path</TableCell>
            <TableCell align="right">Deploy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {rows.map((row) => (
            <Row key={row.name} row={row}></Row> 
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
