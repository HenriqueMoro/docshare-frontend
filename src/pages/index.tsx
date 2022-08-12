import {Flex, Button, Stack} from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function Home() {
  return (
   <Flex width='100vw'
   height='100vh'
   alignItems='center'
   justifyContent='center'
  >
    <Flex 
    as='form'
    width='100%'
    maxWidth={360}
    backgroundColor='gray.800'
    padding='8'
    borderRadius={8}
    flexDirection='column'
    >
      <Stack spacing='4'>
        
        <Input name='email' type='email' label='E-mail'></Input>
        <Input name='password' type='password' label='Senha'></Input>
        
      </Stack>

      <Button type='submit' mt='6' colorScheme='pink'>Entrar</Button>
    </Flex>
   
  </Flex> 
  )
}
