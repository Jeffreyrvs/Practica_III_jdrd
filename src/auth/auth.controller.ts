import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiBadRequestResponse, ApiBody, ApiConflictResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOperation, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ResponseUserDto } from './dto/response-user-dto';
import { ResponseTokenDto } from './dto/response-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Registro de usuario'})
  @ApiBody({type: CreateUserDto})
  @ApiCreatedResponse({type: ResponseUserDto, description: 'Cuando el registro es exitoso'})
  @ApiBadRequestResponse({description: 'Cuando la solicitud es incorrecta'})
  @ApiConflictResponse({description: 'Cuando se encuentra un email duplicado'})
  @Post('/register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Iniciar sesion' })
  @ApiBody({type: LoginUserDto})
  @ApiCreatedResponse({type: ResponseTokenDto, description: 'Cuando el inicio de sesion es exitoso'})
  @ApiBadRequestResponse({description: 'Cuando la solicitud es incorrecta'})
  @ApiNotFoundResponse({description: 'Cuando el usuario no existe'})
  @ApiUnauthorizedResponse({description: 'Cuando la contraseña es invalida'})
  @Post('/login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

}
