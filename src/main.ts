import axios from 'axios';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);

  console.log('starting!!!');
  try {
    const result = await axios.post(
      'http://aloha.olimpia.hu:4000/api',
      'tags',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    console.log(result.data);
  } catch (error) {
    console.log('error!!!!!!');
    console.log(error);
  }
}
bootstrap();
