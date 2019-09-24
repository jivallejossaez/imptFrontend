export class Usuario{
	constructor(
		public rut: string,
		public nombre: string,
		public apellido: string,
		public correo: string,
		public numeroTelefono: number,
		public dependencia: string,
		public tipoPersona: string,
		public clave:string,
		public nivel: number,
		public borrado: number
		){}
}
