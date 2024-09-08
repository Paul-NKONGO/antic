// ** React Imports
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
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
import { MenuItem, Select } from '@mui/material'
export const getStaticProps = async () => {
    const res = await fetch(`http://192.168.1.132:5001/api/division`,{
      headers :{
        'Content-Type': 'application/json',
      }
    })
    const data = await res.json()
    return {
      props: {
        data: data,
      }
    }
  }
function CreateUser({data}) {
    // ** States
    const [division, setDivision] = useState(data)
    const [profil, setProfil] = useState(['PERSONNEL', 'COMPTABLE MATIERE', 'DIRECTEUR GENERAL', 'ADMINISTRATEUR' ])
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    status: '',
    progileId:"",
    divisionId:""
  })

  const [confirmPassValues, setConfirmPassValues] = useState({
    password: '',
    showPassword: false
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleConfirmPassChange = prop => event => {
    setConfirmPassValues({ ...confirmPassValues, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleClickConfirmPassShow = () => {
    setConfirmPassValues({ ...confirmPassValues, showPassword: !confirmPassValues.showPassword })
  }
  const handleSubmit = e =>{
    e.preventDefault()
    console.log(values);
    CreateUser(values)
  }
    return ( 
        <Card>
            <CardHeader title='Create User' />
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={5}>
                        <Grid item xs={6}>
                            <TextField
                                value={values.firstName}
                                onChange={handleChange("firstName")} 
                                fullWidth label='FirsName' placeholder='Leonard Carter' />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                value={values.lastName}
                                onChange={handleChange("lastName")} 
                                fullWidth label='LastName' placeholder='Leonard Carter' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={values.phone}
                                onChange={handleChange("phone")} 
                                type='number'
                                fullWidth label='Phone number' placeholder='xxx xxx xxx' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                value={values.email}
                                onChange={handleChange("email")} 
                                type='email'
                                label='Email'
                                placeholder='carterleonard@gmail.com'
                                helperText='You can use letters, numbers & periods'
                            />
                        </Grid>
                        <Grid item xs={12} className='d-flex'>
                            <FormControl className='w-100'>
                                <InputLabel id='demo-simple-select-outlined-label'>Division</InputLabel>
                                <Select
                                label='Division'
                                value={values.divisionId}
                                onChange={handleChange("divisionId")} 
                                id='demo-simple-select-outlined'
                                labelId='demo-simple-select-outlined-label'
                                >
                                    {division.map(e=>(
                                        <MenuItem value={e.id}>
                                            {e.acronym}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl className='w-100'>
                                <InputLabel id='demo-simple-select-outlined-label'>Profile</InputLabel>
                                <Select
                                label='Division'
                                value={values.progileId}
                                onChange={handleChange("progileId")} 
                                id='demo-simple-select-outlined'
                                labelId='demo-simple-select-outlined-label'
                                >
                                    {profil.map(e=>(
                                        <MenuItem value={e}>
                                            {e}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor='form-layouts-basic-password'>Password</InputLabel>
                            <OutlinedInput
                            label='Password'
                            value={values.password}
                            id='form-layouts-basic-password'
                            onChange={handleChange('password')}
                            type={values.showPassword ? 'text' : 'password'}
                            aria-describedby='form-layouts-basic-password-helper'
                            endAdornment={
                                <InputAdornment position='end'>
                                <IconButton
                                    edge='end'
                                    onClick={handleClickShowPassword}
                                    onMouseDown={e => e.preventDefault()}
                                    aria-label='toggle password visibility'
                                >
                                    <Icon icon={values.showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                                </IconButton>
                                </InputAdornment>
                            }
                            />
                            <FormHelperText id='form-layouts-basic-password-helper'>
                            Use 8 or more characters with a mix of letters, numbers & symbols
                            </FormHelperText>
                        </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor='form-layouts-confirm-password'>Confirm Password</InputLabel>
                            <OutlinedInput
                            label='Confirm Password'
                            value={confirmPassValues.password}
                            id='form-layouts-confirm-password'
                            onChange={handleConfirmPassChange('password')}
                            aria-describedby='form-layouts-confirm-password-helper'
                            type={confirmPassValues.showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position='end'>
                                <IconButton
                                    edge='end'
                                    onClick={handleClickConfirmPassShow}
                                    onMouseDown={e => e.preventDefault()}
                                    aria-label='toggle password visibility'
                                >
                                    <Icon icon={confirmPassValues.showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                                </IconButton>
                                </InputAdornment>
                            }
                            />
                            <FormHelperText id='form-layouts-confirm-password-helper'>
                            Make sure to type the same password as above
                            </FormHelperText>
                        </FormControl>
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
                            create
                            </Button>
                            
                        </Box>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
     );
}

export default CreateUser;