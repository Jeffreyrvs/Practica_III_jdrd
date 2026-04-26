import { ApiProperty } from "@nestjs/swagger";

export class ResponsePaisDto {
    @ApiProperty()
    id!: number;

    @ApiProperty()
    nombre!: string;

    @ApiProperty()
    habitantes!: number;

    @ApiProperty()
    presidente!: string;

    @ApiProperty()
    moneda!: string;

    @ApiProperty()
    capital!: string;
}