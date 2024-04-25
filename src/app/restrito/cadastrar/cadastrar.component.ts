import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {

  public produto: Produto = new Produto(0,"","","",0);

  constructor(private _produtoService: ProdutoService, private _router: Router){}

  cadastrar():void{
    this._produtoService.cadastrarProduto(this.produto).subscribe(
      produto => {
        this.produto = new Produto(0,"","","",0);
        alert("Cadastro efetuado com sucesso!");
      },
      err => {
        alert("Erro ao cadastrar!");
      }
    );

    this._router.navigate(["restrito/listar"]);
  }
}
