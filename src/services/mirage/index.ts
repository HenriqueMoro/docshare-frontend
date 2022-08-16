import {createServer, Factory, Model} from 'miragejs'



export function makeServer(){
	const server = createServer({
		models: {
			invitation: Model.extend({})
		},

		factories: {
			invitation: Factory.extend({
				name(){
					return 'User'
				}
			})
		},

		seeds(server){
			server.createList('invitation',1)
		},

		routes(){
			this.namespace = 'api'
			this.timing = 30000
			this.get('/invitations')

			this.namespace = ''
			this.passthrough()
		}
	})

	return server;
}