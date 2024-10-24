import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
};

(async () => {
  try {
    await bootstrap();
  } catch (error) {
    console.log(error);
  }
})();