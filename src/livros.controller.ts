import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Livro } from './livro.module';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private livrosServices: LivrosService) {}

  @Get()
  obterTodos(): Livro[] {
    return this.livrosServices.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() params): Livro {
    return this.livrosServices.obterUm(params.id);
  }

  @Post()
  criar(@Body() livro: Livro): Livro {
    console.log(livro);
    this.livrosServices.criar(livro);
    return livro;
  }

  @Put()
  alterar(@Body() livro: Livro): Livro {
    return this.livrosServices.alterar(livro);
  }

  @Delete(':id')
  apagar(@Param() params): Livro[] {
    this.livrosServices.apagar(params.id);
    return this.livrosServices.obterTodos();
  }
}
