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
  async obterTodos(): Promise<Livro[]> {
    return await this.livrosServices.obterTodos();
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<Livro> {
    return await this.livrosServices.obterUm(params.id);
  }

  @Post()
  async criar(@Body() livro: Livro): Promise<Livro> {
    console.log(livro);
    await this.livrosServices.criar(livro);
    return livro;
  }

  @Put()
  async alterar(@Body() livro: Livro): Promise<Livro> {
    return await this.livrosServices.alterar(livro);
  }

  @Delete(':id')
  async apagar(@Param() params) {
    return await await this.livrosServices.apagar(params.id);
  }
}
