import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { log } from 'console';
import { Board } from './boards.model';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService){}

    @Get()
    getAllBoard(): Board[]{
        return this.boardsService.getAllBoards();
    }
    
    @Post()
    createBoard(
        @Body('title') title: string, 
        @Body('descripotion') description: string
        ): Board{
            return this.boardsService.createBoard(title, description);
    }
}