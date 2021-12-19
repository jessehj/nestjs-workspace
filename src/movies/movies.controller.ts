import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly service: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.service.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number): Movie {
    console.log('id type: ', typeof id);
    return this.service.getOne(id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.service.create(movieData);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.deleteOne(id);
  }

  @Patch(':id')
  patch(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
    return this.service.update(id, updateData);
  }
}
