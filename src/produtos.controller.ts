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
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Get()
  obterTodos(): Produto[] {
    return this.produtosService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() params): Produto {
    return this.produtosService.obterUm(params.id);
  }

  @Post()
  criar(@Body() produto: Produto): Produto {
    console.log(produto);
    this.produtosService.criar(produto);
    return produto;
  }

  @Put()
  alterar(@Body() produto: Produto): Produto {
    return this.produtosService.alterar(produto);
  }

  @Delete(':id')
  apagar(@Param() params): Produto[] {
    this.produtosService.apagar(params.id);
    return this.produtosService.obterTodos();
  }
}
