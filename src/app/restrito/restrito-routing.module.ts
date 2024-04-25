import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { RestritoComponent } from './restrito.component';
import { GuardGuard } from '../guard.guard';

const restritoRoutes: Routes = [
{ 
    path: 'restrito', component: RestritoComponent, children: [
        { path: 'cadastrar', component: CadastrarComponent, canActivate: [GuardGuard]},
        { path: 'listar', component: ListarComponent, canActivate: [GuardGuard] },
        { path: 'atualizar/:id', component: AtualizarComponent, canActivate: [GuardGuard] },
    ]
},

    { path: '', redirectTo: 'restrito/listar', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forChild(restritoRoutes)],
  exports: [RouterModule]
})
export class RestritoRoutingModule { }