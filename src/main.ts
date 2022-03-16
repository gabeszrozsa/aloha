import axios from 'axios';

async function bootstrap() {
  await getSpecialTags();
}
bootstrap();

async function getTags() {
  console.log('Listing all tags...');
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

async function getSpecialTags() {
  console.log('Listing special tags...');
  try {
    const result = await axios.post(
      'http://aloha.olimpia.hu:4000/api',
      'lookup=["2014","kenu"]',
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
