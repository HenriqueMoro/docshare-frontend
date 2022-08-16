import { api } from "../axios";

async function getInvitations(){
	const response = await api.get('/invitations')

	return response.data
}


export function useInvitation(){
	return getInvitations()
}