'use client'
import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form'
 
export default function Page() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: object) => {
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    if (response.status == 401) {
      const result = await response.json()
      result["detail"].forEach((error:{field:string, message: string}) => {
        setError(error["field"], {
          type: "manual",
          message: error["message"]
        })
      })
    }
  }

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <TextField
        data-testid="username"
        label="username"
        {...register('username', {
          required: 'Username is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email address'
          }
        })}
        error={!!errors.username}
        helperText={errors.username?.message as string}
      />
      <Button data-testid="submit" type="submit">Register</Button>
    </Box>
  )
}