import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import DCandidateForm from "./DCandidateForm";

const DCandidates = (props) => {
  //const [x, setX]= useState(0)
  //setX(5)
  useEffect(()=>{
    props.fetchAllDCandidates()
  },[props])//componentDidMount

  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <Paper>
      <Grid container>
        <Grid item xs={6}>
          <DCandidateForm />
        </Grid>
        <Grid item xs={6}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Blood Group</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  props.dCandidatList.map((record,index)=>{
                    return (<TableRow key={index}>
                      <TableCell>{record.fullName}</TableCell>
                      <TableCell>{record.mobile}</TableCell>
                      <TableCell>{record.bloodGroup}</TableCell>
                    </TableRow>)
                  })
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
}
const mapStateToProps = state => ({
  dCandidatList: state.dCandidate.list
})

const mapActionToProps = {
  fetchAllDCandidates: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(DCandidates);