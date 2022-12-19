import { Component, OnInit } from '@angular/core';
import { CompraPlanModel } from 'src/app/models/compra-plan.model';
import { CompraModel } from 'src/app/models/compra.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UsuarioLogicService } from 'src/app/services/parameters/usuario-logic.service';
import { CompraService } from 'src/app/services/purchase/compra.service';

@Component({
  selector: 'app-list-compra-plan',
  templateUrl: './list-compra-plan.component.html',
  styleUrls: ['./list-compra-plan.component.css']
})
export class ListCompraPlanComponent implements OnInit {
  usuarioCorreo:string = '';
  usuarioId: number = 0;
  compras: CompraModel[] = [];
  comprasPlanes: CompraPlanModel[] = [];
  totalCompra: number = 0; 

  constructor(
    private ls: LocalStorageService,
    private usuarioLogicService: UsuarioLogicService,
    private compraService: CompraService
  ) { }

  ngOnInit(): void {
    this.buscarUsuarioId();
  }

  buscarUsuarioId() {
    let userData = this.ls.GetSessionData();
    if (userData) {
      this.usuarioCorreo = userData.user.correo;
      this.usuarioLogicService.buscarCorreo(this.usuarioCorreo).subscribe({
        next: (data) => {
          this.usuarioId = data.id;
          //console.log(this.usuarioId);

          this.usuarioLogicService.getUsuarioCompras(this.usuarioId).subscribe({
            next: (data) => {
              this.compras = data;
              console.log(data);

              this.compras.forEach(compra => {
                this.compraService.getComprasPlanes(compra.id).subscribe({
                  next: (data) => {
                    this.comprasPlanes = data;

                    this.comprasPlanes.forEach(compraPlan => {
                      this.totalCompra = compraPlan.total;
                    });
                    console.log(data);
                  }
                });
              });
            }
          });

          
        }
      });
    } else {
      alert("Error obteniendo correo");
    }
  }
}
