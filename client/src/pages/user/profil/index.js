import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { useState } from 'react'
import Link from 'next/link'
import { CreateDivision } from 'src/service/divisionService'

function Profil() {
      // ** States
  const [values, setValues] = useState({
    privilege:"",
    description:""
  })

  const [values_, setValues_] = useState({
    name: '',
    acronym: '',
    status: '',
    level:''
  })
  const handleChange_ = event => {
    setValues_({ ...values, [event.target.name]: event.target.value })
  }
  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  
  const handleSubmitProfil_ = (e)=>{
    e.preventDefault()
    console.log(values_);
    CreateDivision(values_)
        .then(res =>{
            if(res.error){
                console.log(res.error)
                console.log("an error on submit")
            }else{
                console.log("success")
            }
        } )
  }

    return ( 
        <div>
            
            <Card>
                <CardHeader title='Division' />
                <CardContent>
                    <form onSubmit={handleSubmitProfil_}>
                        <Grid container spacing={5}>
                            <Grid item xs={12}>
                            <TextField
                                value={values_.name}
                                onChange={handleChange_}
                                name='name'
                                fullWidth label='Name' placeholder='Name' />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name='acronym'
                                value={values_.acronym}
                                onChange={handleChange_}
                                type='text'
                                label='Acronym'
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                value={values_.status}
                                onChange={handleChange_}
                                name='status'
                                fullWidth label='Status' />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name='level'
                                value={values_.level}
                                onChange={handleChange_}
                                type='text'
                                label='Level'
                            />
                            </Grid>
                            
                            <Grid item xs={12}>
                            <Box
                                sx={{
                                gap: 5,
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                                }}
                            >
                                <Button type='submit' variant='contained' size='large'>
                                create division
                                </Button>
                                
                            </Box>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div> 
    );
}

export default Profil;