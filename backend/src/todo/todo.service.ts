import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepo: Repository<Todo>,
  ) {}

  create(dto: CreateTodoDto) {
    const todo = this.todoRepo.create(dto);
    return this.todoRepo.save(todo);
  }

  findAll() {
    return this.todoRepo.find({ order: { createdAt: 'DESC' } });
  }

  async update(id: number, dto: UpdateTodoDto) {
    const todo = await this.todoRepo.findOne({ where: { id } });
    if (!todo) throw new NotFoundException('Todo not found');

    // Assign only fields that were actually sent by frontend
    if (dto.title !== undefined) todo.title = dto.title;
    if (dto.description !== undefined) todo.description = dto.description;
    if (dto.isCompleted !== undefined) todo.isCompleted = dto.isCompleted;

    return this.todoRepo.save(todo);
  }

  async remove(id: number) {
    const result = await this.todoRepo.delete(id);
    if (!result.affected) throw new NotFoundException('Todo not found');

    return { message: 'Todo deleted successfully' };
  }
}
