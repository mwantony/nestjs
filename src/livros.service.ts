import { Livro } from './livro.module';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class LivrosService {
  constructor(
    @InjectModel(Livro)
    private livroModel: typeof Livro,
  ) {}

  async obterTodos(): Promise<Livro[]> {
    return await this.livroModel.findAll();
  }

  async obterUm(id: number): Promise<Livro> {
    return await this.livroModel.findByPk(id);
  }

  async criar(livro: Livro): Promise<Livro> {
    await this.livroModel.create(livro);
    return livro;
  }

  async alterar(livro: Livro): Promise<Livro> {
    await this.livroModel.update(livro, {
      where: {
        id: livro.id,
      },
    });
    return livro;
  }

  async apagar(id: number) {
    const livro: Livro = await this.obterUm(id);
    livro.destroy();
  }
}
