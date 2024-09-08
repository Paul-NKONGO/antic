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
import { MenuItem, Select } from '@mui/material'
function Prestataire() {
    const [values, setValues] = useState({
        name:"",
        taxNumber:"",
        headquarters: '',
        businessType: "",
        phone: '',
        email: '',
        postalBox: '',
      })
    
      const handleChange = event => {
        setValues({ ...values, [event.target.name]: event.target.value })
      }
    
      const handleSubmitProfil = (e)=>{
        e.preventDefault()
        console.log(values);
        CreatePro
      }
      
    return ( 
        <div>
            <Card>
                <CardHeader title='Prestataire' />
                <CardContent>
                    <form onSubmit={handleSubmitProfil}>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                        <TextField
                            value={values.name}
                            onChange={handleChange}
                            name='name'
                            fullWidth label='Name' placeholder='Leonard Carter' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name='taxNumber'
                                value={values.taxNumber}
                                onChange={handleChange}
                                type='number'
                                label='Tax Number'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name='headquarters'
                                value={values.headquarters}
                                onChange={handleChange}
                                type='text'
                                label='Head quarters'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                name='phone'
                                value={values.phone}
                                onChange={handleChange}
                                type='number'
                                label='Phone'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                name='postalBox'
                                value={values.postalBox}
                                onChange={handleChange}
                                type='text'
                                label='postalBox'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className='w-100'>
                                <InputLabel id='demo-simple-select-outlined-label'>Business type</InputLabel>
                                <Select
                                label='Business Type'
                                name='businessType'
                                value={values.businessType}
                                onChange={handleChange} 
                                id='demo-simple-select-outlined'
                                labelId='demo-simple-select-outlined-label'
                                >
                                    {['SA', 'SARL', 'ESTABLISHMENT'].map(e=>(
                                        <MenuItem value={e}>
                                            {e}
                                        </MenuItem>
                                    ))}
                                </Select>
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
        </div>
     );
}

export default Prestataire;