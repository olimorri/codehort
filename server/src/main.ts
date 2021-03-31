import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/* Req'd for https implementation */
// import fs from 'fs';

/* Req'd for https implementation */
// const httpsOptions = {
//   key: fs.readFileSync(''),
//   cert: fs.readFileSync(''),
// };

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* Req'd for https implementation */
  // const app = await NestFactory.create(AppModule, {
  //   httpsOptions,
  // });
  app.enableCors();
  await app.listen(process.env.PORT);
}
bootstrap();
