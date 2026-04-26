import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { Pais } from './entities/pais.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PaisService {
  constructor (@InjectRepository(Pais) private repoPais: Repository<Pais>,) { }

  create(createPaisDto: CreatePaisDto): Promise <Pais> {
    const pais = this.repoPais.create(createPaisDto);
    return this.repoPais.save(pais);
  }

  findAll(): Promise <Pais []> {
    return this.repoPais.find();
  }

  async findOne(id: number): Promise <Pais> {
    const pais = await this.repoPais.findOneBy( { id } );
    if (!pais) {
      throw new NotFoundException('Pais no encontrado');
    }
    return pais;
  }

  async update(id: number, updatePaisDto: UpdatePaisDto): Promise <Pais | null> {
    await this.repoPais.update(id, updatePaisDto);
    return this.repoPais.findOneBy( {id} );
  }

  async remove(id: number): Promise <void> {
    await this.repoPais.delete(id);
  }
}
