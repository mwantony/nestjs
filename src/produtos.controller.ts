import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from './produto.module';

@Controller('produtos')
export class ProdutosController {
  produtos: Produto[] = [
    new Produto('Liv01', 'Livro TDD e BDD na prática', 29.9),
    new Produto('Liv02', 'Livro Iniciando com Flutter', 39.9),
    new Produto('Liv03', 'Livro Inteligência artificial como serviço', 29.9),
  ];
  @Get()
  obterTodos(): Produto[] {
    return this.produtos;
  }

  @Get(':id')
  obterUm(@Param() params): Produto {
    return this.produtos[params.id - 1];
  }

  @Post()
  criar(@Body() produto: Produto): Produto {
    console.log(produto);
    this.produtos.push(produto);
    return produto;
  }

  @Put()
  alterar(@Body() produto: Produto): Produto {
    console.log(produto);
    return produto;
  }

  @Delete(':id')
  apagar(@Param() params): Produto[] {
    this.produtos.pop();
    return this.produtos;
  }
}
