import { Produto } from './produto.module';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutosService {
  produtos: Produto[] = [
    new Produto('Liv01', 'Livro TDD e BDD na prática', 29.9),
    new Produto('Liv02', 'Livro Iniciando com Flutter', 39.9),
    new Produto('Liv03', 'Livro Inteligência artificial como serviço', 29.9),
  ];

  obterTodos(): Produto[] {
    return this.produtos;
  }

  obterUm(id: number): Produto {
    return this.produtos[id - 1];
  }

  criar(produto: Produto): Produto {
    this.produtos.push(produto);
    return produto;
  }

  alterar(produto: Produto): Produto {
    return produto;
  }

  apagar(id: number): Produto {
    const produto = this.produtos[id - 1];
    this.produtos.slice(id - 1, 1);
    return produto;
  }
}
