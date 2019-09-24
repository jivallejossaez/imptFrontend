import { Component, OnInit } from '@angular/core';
import { LaboratorioService } from '../../services/laboratorio.service';
import { SolicitudService } from '../../services/solicitud.service';
import { HorarioService} from '../../services/horario.service';
import { Http, Response, Headers} from '@angular/http';
import { ResponsableService } from '../../services/responsable.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [LaboratorioService, HorarioService, SolicitudService, ResponsableService]
})
export class DashboardComponent implements OnInit {
  public identityresponsable;
  public tokenresponsable;
  public listadosolicitudes:any = [];
  public listadolaboratorios:any = [];
  public nombrelaboratorios:any = [];
  public datosgrafico:any = [];
  public usoDiario:any = [];
  public dias:any = ['Lunes','Martes','Miercoles','Jueves','Viernes'];
  public pieChartType:string = 'pie';
  public datoscargados = false;
  public dia;
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [];




  constructor(private http:Http, private _laboratorioService:LaboratorioService, private _horarioService:HorarioService, private _solicitudService:SolicitudService,private _responsableService:ResponsableService) {
    this.identityresponsable = _responsableService.getIdentity();
    this.tokenresponsable = _responsableService.getToken();
    this.obtenerSolicitudes();

   }

  ngOnInit() {
  }
  obtenerSolicitudes(){
    this._solicitudService.listadocompleto(this.tokenresponsable).subscribe(
      response =>{
        this.listadosolicitudes = response.data;
        this.obtenerLaboratorios();
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  obtenerLaboratorios(){
    this._laboratorioService.getLaboratorios(this.tokenresponsable).subscribe(
      response =>{
        this.listadolaboratorios = response.data;
        this.asignardatos();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  asignardatos(){
    for (let i = 0; i < this.listadolaboratorios.length; i++) {
        this.nombrelaboratorios.push(this.listadolaboratorios[i].nombre);
        this.datosgrafico.push(0);
        this.usoDiario.push([0,0,0,0,0]);
    }
    for (let i = 0; i < this.listadolaboratorios.length; i++) {
      for (let j = 0; j < this.listadosolicitudes.length; j++) {
        if(this.listadosolicitudes[j].refHorario.refLaboratorio.idLaboratorio == i+1  && this.listadosolicitudes[j].estado == 'aceptada'){
          this.datosgrafico[i]++;
          let correcto = this.listadosolicitudes[j].refHorario.dia.substr(5,2)+"-"+this.listadosolicitudes[j].refHorario.dia.substr(8,2)+"-"+this.listadosolicitudes[j].refHorario.dia.substr(0,4);
          let dia = new Date(correcto);
          this.usoDiario[i][dia.getDay()-1]++;
        }

      }
    }
    for (let i = 0; i < this.nombrelaboratorios.length; i++) {
      this.barChartData.push({data: this.usoDiario[i], label: this.nombrelaboratorios[i]});
    }
    this.datoscargados = true;
  }
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
