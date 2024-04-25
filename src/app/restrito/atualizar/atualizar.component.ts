import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {

  public produtoId: number = 0;
  public produto: Produto = new Produto(0, "", "", "", 0);

  constructor(private _produtoService: ProdutoService, private _activatedRoute:
    ActivatedRoute, private _router: Router) {
    this._activatedRoute.params.subscribe(params => this.produtoId =
      params['id']);
  }

  ngOnInit(): void {
    this.listarProduto();
  }

  listarProduto(): void {
    this._produtoService.getProduto(this.produtoId).subscribe(
      (res: any) => {
        console.log(res[0].produto);
        this.produto = new Produto(
          res[0].id,
          res[0].produto,
          res[0].descricao,
          res[0].foto,
          res[0].preco);
      })
  }

  atualizar(id: number) {
    this._produtoService.atualizarProduto(id, this.produto).subscribe(
      produto => { this.produto = new Produto(0, "", "", "", 0) },
      err => { alert("Erro ao atualizar!") }
    );

    this._router.navigate(["/restrito/listar"]);
  }

}