import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, NotFoundException } from '@nestjs/common';
import { PaisService } from './pais.service';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBadRequestResponse, ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ResponsePaisDto } from './dto/response-pais.dto';

@Controller('pais')
export class PaisController {
  constructor(private readonly paisService: PaisService) {}

  @UseGuards(AuthGuard) // Ruta protegida
  @ApiOperation({ summary: 'Registrar un nuevo pais' })
  @ApiBody({type: CreatePaisDto})
  @ApiBearerAuth()
  @ApiCreatedResponse( {type: ResponsePaisDto, description: 'Cuando la creacion es exitosa'} )
  @ApiBadRequestResponse( {description: 'Cuando se envia mal una solicitud'} )
  @ApiUnauthorizedResponse( {description: 'Cuando falta el token de acceso'} )
  @Post()
  create(@Body() createPaisDto: CreatePaisDto) {
    return this.paisService.create(createPaisDto);
  }

  @ApiOperation({ summary: 'Obtener todos los paises'})
  @ApiOkResponse({ description: 'Lista de todos los paises registrados', type: ResponsePaisDto, isArray: true})
  @Get()
  findAll() {
    return this.paisService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un pais registrado'})
  @ApiOkResponse({ description: 'Cuando el pais es encontrado', type:ResponsePaisDto})
  @ApiNotFoundResponse({ description: 'Cuando el pais no es encontrado'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paisService.findOne(+id);
  }

  @UseGuards(AuthGuard) // Ruta protegida
  @ApiBearerAuth() 
  @ApiOperation({ summary: 'Actualizar un pais'})
  @ApiBody({type: UpdatePaisDto})
  @ApiOkResponse({type: ResponsePaisDto})
  @ApiNotFoundResponse({description: 'Cuando no se especifica el id a actualizar'})
  @ApiBadRequestResponse({description: 'Cuando se envia mal la solicitud'})
  @ApiUnauthorizedResponse({description: 'Cuando falta el token de acceso'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaisDto: UpdatePaisDto) {
    return this.paisService.update(+id, updatePaisDto);
  }

  @UseGuards(AuthGuard) // Ruta protegida
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Eliminar un pais'})
  @ApiOkResponse({ description: 'Cuando el pais se ha eliminado correctamente'})
  @ApiNotFoundResponse({ description: 'Cuando no se especifica el id a borrar'})
  @ApiUnauthorizedResponse({description: 'Cuando falta el token de acceso'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paisService.remove(+id);
  }
}
