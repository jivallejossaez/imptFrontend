export class Laboratorio{
        constructor(
          public borrado: boolean,
          public descripcion: string,
          public equipos: string,
          public equipotrabajo: string,
        	public idLaboratorio: number,
          public instituto: string,
          public nombre: string,
          public perfil: string,
          public refResponsable:{
            apellido:string,
            borrado:boolean,
            clave:string,
            correo:string,
            idResponsable: number,
            nivel: number,
            nombre:string,
            numeroTelefono:number,
            rut: number,
          },
          public tiposexperimentos: string,
          public ubicacion: string
        ){}
}
