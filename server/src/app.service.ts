import { Injectable } from '@nestjs/common';
import { HintService } from './hint/hint.service';
import { LessonService } from './lesson/lesson.service';
import { SolutionService } from './solution/solution.service';
import { SummaryService } from './summary/summary.service';
import { TaskService } from './task/task.service';

@Injectable()
export class AppService {
  async createLesson(lesson: any): Promise<string> {
    try {
      const newLesson = new LessonService();
      newLesson.createLesson(lesson.lesson);

      const newTasks = new TaskService();
      newTasks.createTasks(lesson.tasks);

      const newSolution = new SolutionService();
      newSolution.createSolution(lesson.solution);

      const newHints = new HintService();
      newHints.createHints(lesson.hints);

      const newSummaries = new SummaryService();
      newSummaries.createSummaries(lesson.summaries);

      return 'Lesson saved!';
    } catch (error) {
      console.log(error);
    }
  }
}
