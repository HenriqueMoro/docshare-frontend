import { Box, Button, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useInvitation } from "../../services/hooks/useInvitation";

export default function InvitationList(){
	const data = useInvitation()
	console.log(data)
	
	return (
	<Box>
		<Flex width='100%' marginY='6' maxWidth={1480} paddingX='6'>
			<Box flex='1' borderRadius={8} backgroundColor='gray.800' padding='8'>
				<Flex marginBottom='8' justifyContent='space-between' alignItems='center'>
					<Heading size='lg' fontWeight='normal'>Modelos de Convites</Heading>

					<Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon as={RiAddLine}/>}>
						Criar Novo
					</Button>

				</Flex>
				<Table colorScheme="whiteAlpha">
					<Thead>
						<Tr>
							<Th>Modelos</Th>
							<Th>Situação</Th>
							<Th>Ações</Th>
						</Tr>	
					</Thead>
					<Tbody>
						<Tr>
							<Td>Estagiarios</Td>
							<Td>Ativo</Td>
							<Td>
								<Button 
								as='a' 
								size='sm' 
								fontSize='sm' 
								colorScheme='purple' 
								leftIcon={<Icon as={RiPencilLine}/>}>
									Ações
								</Button>
							</Td>
						</Tr>
					</Tbody>

				</Table>
			</Box>
		</Flex>
	</Box>	
	)
}