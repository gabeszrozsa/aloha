import axios from 'axios';

async function bootstrap() {
  await getLowResImage();
}
bootstrap();

interface IAllTagsResponse {
  tags: string[];
}

async function getTags() {
  console.log('Listing all tags...');
  try {
    const { data } = await axios.post<IAllTagsResponse>(
      'http://aloha.olimpia.hu:4000/api',
      'tags',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    console.log(data.tags);
  } catch (error) {
    console.log('error!!!!!!');
    console.log(error);
  }
}

interface ISpecialTagsResponse {
  results: string[];
}

// {
//   tags: [
//     'Diaz',
//     '1956',
//     '2014',
//     '2014.08.01',
//     '2014.08.03',
//   ]
// }
async function getSpecialTags() {
  console.log('Listing special tags...');
  try {
    const { data } = await axios.post<ISpecialTagsResponse>(
      'http://aloha.olimpia.hu:4000/api',
      'lookup=["2014","kenu"]',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    console.log(data.results);
  } catch (error) {
    console.log('error!!!!!!');
    console.log(error);
  }
}

// {
//   results: [
//     '20140922_ute_kajak_kenu_avatas/20140922_ute_kajak_kenu_nevado_007.jpg',
//     '20140922_ute_kajak_kenu_avatas/20140922_ute_kajak_kenu_nevado_008.jpg',
//     '20140922_ute_kajak_kenu_avatas/20140922_ute_kajak_kenu_nevado_009.jpg',
//     '20140922_ute_kajak_kenu_avatas/20140922_ute_kajak_kenu_nevado_015.jpg'
//   ]
// }
async function getLowResImage() {
  console.log('Listing low res image...');
  try {
    const { data, headers } = await axios.post<ISpecialTagsResponse>(
      'http://aloha.olimpia.hu:4000/api',
      'preview=20140922_ute_kajak_kenu_avatas/20140922_ute_kajak_kenu_nevado_015.jpg',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    console.log({ data });
    console.log({ headers });
  } catch (error) {
    console.log('error!!!!!!');
    console.log(error);
  }
}
