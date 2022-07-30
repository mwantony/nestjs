import { Livro } from './livro.module';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LivrosService {
  livros: Livro[] = [
    /*     new Livro('Liv01', 'Livro TDD e BDD na prática', 29.9),
    new Livro('Liv02', 'Livro Iniciando com Flutter', 39.9),
    new Livro('Liv03', 'Livro Inteligência artificial como serviço', 29.9), */
  ];

  obterTodos(): Livro[] {
    return this.livros;
  }

  obterUm(id: number): Livro {
    return this.livros[id - 1];
  }

  criar(livro: Livro): Livro {
    this.livros.push(livro);
    return livro;
  }

  alterar(livro: Livro): Livro {
    return livro;
  }

  apagar(id: number): Livro {
    const livro = this.livros[id - 1];
    this.livros.slice(id - 1, 1);
    return livro;
  }
}
