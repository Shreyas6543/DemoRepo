import React, { useState } from "react";
import { Box, Button, Grid, InputAdornment, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";
import demo from './demo.json'

export default function Demo() {
  var data = demo.fields;
  data.sort(function (a, b) {
    return a.order - b.order;
  });
  console.log(data)
  function Submit() {

  }
  return (
    <Box sx={{ marginLeft: '20%', width: '60%', height: '95vh', backgroundColor: 'aliceblue' }}>
      <Typography sx={{ py: 2, fontSize: '25px', fontWeight: '600' }}>
        Form Details
      </Typography>
      <form onSubmit={Submit()}>
        {data.map((item, key) => {
          var isreq;
          if (item.isRequired != undefined) {
            isreq = item.isRequired;
          }
          else {
            isreq = false;
          }
          if (item.unit != undefined) {
            return (
              <Grid container spacing={2} sx={{ my: 1 }} key={item.key}>
                <Grid item xs={4} sx={{ textAlign: 'right', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                  {item.label}:
                </Grid>
                <Grid item xs={8}>
                  <OutlinedInput
                    required={isreq}
                    disabled={item.isReadonly}
                    endAdornment={<InputAdornment position="end">{item.unit}</InputAdornment>}
                    sx={{ width: '60%' }}
                    type={item.type}
                  />
                </Grid>
              </Grid>
            )
          }
          else if (item.type == 'dropdown') {
            return (
              <Grid container spacing={2} sx={{ my: 1 }} key={item.key}>
                <Grid item xs={4} sx={{ textAlign: 'right', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                  {item.label}:
                </Grid>
                <Grid item xs={8}>
                  <Select sx={{width:'60%'}}>
                    {item.items.map((item2, key)=>{
                      return(<MenuItem value={item2.value} key={key}>{item2.text}</MenuItem>)
                    })}
                  </Select>
                </Grid>
              </Grid>
            )
          }
          else {
            return (
              <Grid container spacing={2} sx={{ my: 1 }} key={item.key}>
                <Grid item xs={4} sx={{ textAlign: 'right', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                  {item.label}:
                </Grid>
                <Grid item xs={8}>
                  <OutlinedInput
                    required={isreq}
                    disabled={item.isReadonly}
                    sx={{ width: '60%' }}
                    type={item.type}
                  />
                </Grid>
              </Grid>
            )
          }
        })}
        <Button variant="contained" type="submit" sx={{ my: 3 }}>Submit</Button>
      </form>
    </Box>
  );
}



