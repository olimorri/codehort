import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HintService } from './hint/hint.service';
import { LessonService } from './lesson/lesson.service';
import { SolutionService } from './solution/solution.service';
import { SummaryService } from './summary/summary.service';
import { TaskService } from './task/task.service';
import { UserTestService } from './user-test/user-test.service';

@Injectable()
export class AppService {
  async createLesson(lesson: any): Promise<string> {
    try {
      const newLesson = new LessonService();
      await newLesson.createLesson(lesson.lesson);

      const newSolution = new SolutionService();
      await newSolution.createSolution(lesson.solution);

      const newTasks = new TaskService();
      await newTasks.createTasks(lesson.tasks);

      const newHints = new HintService();
      await newHints.createHints(lesson.hints);

      const newSummaries = new SummaryService();
      await newSummaries.createSummaries(lesson.summaries);

      const newTests = new UserTestService();
      await newTests.createUserTests(lesson.tests);

      return 'Lesson saved!';
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(`Lesson could not be saved. Error: ${error}`);
    }
  }
}
