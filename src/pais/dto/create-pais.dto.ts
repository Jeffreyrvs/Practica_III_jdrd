import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class CreatePaisDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nombre!: string;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    @Min(100)
    habitantes!: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    presidente!: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    moneda!: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    capital!: string;

}
