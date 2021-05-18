import axios from 'axios'

const BASE_URL = 'http://localhost:3000'


const INDEX_DATA = [
  {
    id: 1,
    title: 'Horus Top Optic se ocupa cu:',
    text: 'Consultatii optica medicala gratuite indiferent daca se achizitioneaza sau nu produsele companiei. Furnizarea de produse si servicii de calitate superioara si la preturi minime.',
    button: 'Citeste mai mult',
    url: './Ocupa'
  },
  {
    id: 2,
    title: 'Consultanță',
    text: 'HORUS TOP OPTIC se adreseaza persoanelor care sunt in cautarea unor servicii prompte si de calitate, totul pentru un pret corect. Oferim: Prescriptie ocheari de vedere, gama variata de ochelari.',
    button: 'Citeste mai mult',
    url: './Consultanta'
  },
  {
    id: 3,
    title: 'Despre noi',
    text: 'HORUS TOP OPTIC desfasoara programul de servicii de optica medicala si protectia vederii pentru angajatii companiilor. Ochelari de vedere, rame, lentile de contact, ochelari de soare.',
    button: 'Citeste mai mult',
    url: './DespreNoi'
  },

]

// const PRODUSE = [
//   {
//     id: '1',
//     clasa: 'rame',
//     url: '/DSC_0001.jpg',
//     code: '9427426',
//     name: 'Guci Space',
//     material: 'plastic',
//     price: 152, width: '1920',
//     height: '1080'
//   },
//   {
//     id: '2',
//     clasa: 'rame',
//     url: ['/ochelari/2/DSC_0003.jpg', '/ochelari/2/DSC_0004.jpg'],
//     code: '1966720',
//     name: 'Arnette',
//     material: 'organic',
//     price: 335, width: '1920',
//     height: '1080'
//   },
//   {
//     id: '3',
//     clasa: 'rame',
//     url: ['/ochelari/3/DSC_0005.jpg', '/ochelari/3/DSC_0006.jpg'],
//     code: '3910376',
//     name: 'Ochelari 3',
//     material: 'plastic',
//     price: 363, width: '1920',
//     height: '1080'
//   },
//   {
//     id: '4',
//     clasa: 'rame',
//     url: ['/ochelari/4/DSC_0007.jpg', '/ochelari/4/DSC_0008.jpg'],
//     code: '4066760',
//     name: 'Arnette',
//     material: 'metal',
//     price: 583, width: '1920',
//     height: '1080'
//   },
//   {
//     id: '5',
//     clasa: 'rame',
//     url: ['/ochelari/5/DSC_0009.jpg', '/ochelari/5/DSC_0010.jpg'],
//     code: '3263893',
//     name: 'Ochelari 5',
//     material: 'plastic',
//     price: 641, width: '1920',
//     height: '1080'
//   },
//   {
//     id: '6',
//     clasa: 'rame',
//     url: ['/ochelari/6/DSC_0011.jpg', '/ochelari/6/DSC_0012.jpg'],
//     code: '0280617',
//     name: 'Police night',
//     material: 'organic',
//     price: 311, width: '1920',
//     height: '1080'
//   },
//   {
//     id: '7',
//     clasa: 'rame',
//     url: ['/ochelari/7/DSC_0013.jpg', '/ochelari/7/DSC_0014.jpg'],
//     code: '8100572',
//     name: 'Arnette',
//     material: 'metal',
//     price: 913, width: '1920',
//     height: '1080'
//   },
//   {
//     id: '8',
//     clasa: 'rame',
//     url: ['/ochelari/8/DSC_0015.jpg', '/ochelari/8/DSC_0016.jpg'],
//     code: '1605970',
//     name: 'Guci Knight 8',
//     material: 'plastic',
//     price: 767, width: '1920',
//     height: '1080'
//   },
//   {
//     id: '9',
//     clasa: 'rame',
//     url: ['/ochelari/9/DSC_0017.jpg', '/ochelari/9/DSC_0018.jpg'],
//     code: '6543541',
//     name: 'Police Dark Blue',
//     material: 'plastic',
//     price: 193, width: '1920',
//     height: '1080'
//   },
//   {
//     id: '10',
//     clasa: 'rame',
//     url: ['/ochelari/10/DSC_0019.jpg', '/ochelari/10/DSC_0021.jpg'],
//     code: '1978434',
//     name: 'Costa City',
//     material: 'plastic',
//     price: 557, width: '1920',
//     height: '1080'
//   },
//   {
//     id: '11',
//     clasa: 'rame',
//     url: ['/ochelari/11/DSC_0022.jpg', '/ochelari/11/DSC_0023.jpg'],
//     code: '2067532',
//     name: 'Day Police blue',
//     material: 'metal',
//     price: 935, width: '1920',
//     height: '1080'
//   },
//   {
//     id: '12',
//     clasa: 'rame',
//     url: ['/ochelari/12/DSC_0024.jpg', '/ochelari/12/DSC_0025.jpg'],
//     code: '3574542',
//     name: 'Costa Jungle',
//     material: 'plastic',
//     price: 322, width: '1920',
//     height: '1080'
//   },
//   {
//     id: '13',
//     clasa: 'rame',
//     url: ['/ochelari/13/DSC_0026.jpg', '/ochelari/13/DSC_0027.jpg'],
//     code: '0938051',
//     name: 'Police Space',
//     material: 'plastic',
//     price: 458, width: '1920',
//     height: '1080'
//   },
//   {
//     id: '14',
//     clasa: 'rame',
//     url: ['/ochelari/14/DSC_0028.jpg', '/ochelari/14/DSC_0029.jpg'],
//     code: '1118921',
//     name: 'Guci',
//     material: 'plastic',
//     price: 679, width: '1920',
//     height: '1080'
//   },
//   {
//     id: '15',
//     clasa: 'rame',
//     url: ['/ochelari/15/DSC_0030.jpg', '/ochelari/15/DSC_0031.jpg'],
//     code: '7398459',
//     name: 'Rainbow Arnette',
//     material: 'metal',
//     price: 788, width: '1920',
//     height: '1080'
//   },
//   {
//     id: '16',
//     clasa: 'rame',
//     url: ['/ochelari/16/DSC_0032.jpg', '/ochelari/16/DSC_0033.jpg'],
//     code: '5403267',
//     name: 'Ochelari 16',
//     material: 'plastic',
//     price: 640, width: '1920',
//     height: '1080'
//   },
//   {
//     id: '17',
//     clasa: 'rame',
//     url: ['/ochelari/17/DSC_0034.jpg', '/ochelari/17/DSC_0035.jpg'],
//     code: '3613298',
//     name: 'Ochelari 17',
//     material: 'plastic',
//     price: 915, width: '1920',
//     height: '1080'
//   },
//   {
//     id: '18',
//     clasa: 'rame',
//     url: ['/ochelari/18/DSC_0036.jpg', '/ochelari/18/DSC_0037.jpg'],
//     code: '5367668',
//     name: 'Ochelari 18',
//     material: 'organic',
//     price: 511, width: '1920',
//     height: '1080'
//   },
//   {
//     id: '19',
//     clasa: 'rame',
//     url: ['/ochelari/19/DSC_0038.jpg', '/ochelari/19/DSC_0039.jpg'],
//     code: '4100258',
//     name: 'Costa Rica',
//     material: 'plastic',
//     price: 762, width: '1920',
//     height: '1080'
//   },
//   {
//     id: '20',
//     clasa: 'rame',
//     url: ['/ochelari/20/DSC_0040.jpg', '/ochelari/20/DSC_0041.jpg'],
//     code: '4343445',
//     name: 'Ochelari 20',
//     material: 'plastic',
//     price: 906, width: '1920',
//     height: '1080'
//   },
//   {
//     id: '21',
//     clasa: 'accesorii',
//     culoare: 'verde',
//     url: ['/accesorii/laveta1.jpg'],
//     code: '49374',
//     material: 'bumbac',
//     name: 'Laveta1',
//     price: 42,
//     width: '2000',
//     height: '1125'
//   },
//   {
//     id: '22',
//     clasa: 'accesorii',
//     culoare: 'rosu',
//     url: ['/accesorii/laveta2.jpg'],
//     code: '75629', 
//     material: 'lana', 
//     name: 'Laveta2', 
//     price: 79, 
//     width: '800', 
//     height: '450'
//   },
//   {
//     id: '23',
//     clasa: 'accesorii',
//     culoare: 'albastru',
//     url: ['/accesorii/laveta3.jpg'],
//     code: '54976', 
//     material: 'bumbac', 
//     name: 'Laveta3', 
//     price: 48, 
//     width: '800', 
//     height: '450'
//   },
//   {
//     id: '24',
//     clasa: 'accesorii',
//     culoare: 'verde',
//     url: ['/accesorii/laveta4.jpg'],
//     code: '92809', 
//     material: 'bumbac', 
//     name: 'Laveta4', 
//     price: 91, 
//     width: '1200', 
//     height: '675'
//   },
//   {
//     id: '25',
//     clasa: 'accesorii',
//     culoare: 'portocaliu',
//     url: ['/accesorii/laveta5.jpg'],
//     code: '92981', 
//     material: 'lana', 
//     name: 'Laveta5', 
//     price: 17, 
//     width: '800', 
//     height: '450'
//   },
//   {
//     id: '26',
//     clasa: 'accesorii',
//     culoare: 'verde',
//     url: ['/accesorii/laveta6.jpg'],
//     code: '58565', 
//     material: 'bumbac', 
//     name: 'Laveta6', 
//     price: 48, 
//     width: '1200', 
//     height: '675'
//   },
//   {
//     id: '27',
//     clasa: 'accesorii',
//     culoare: 'verde',
//     url: ['/accesorii/laveta7.jpg'],
//     code: '81986', 
//     material: 'lana', 
//     name: 'Laveta7', 
//     price: 94, 
//     width: '1000', 
//     height: '562'
//   },
//   {
//     id: '28',
//     clasa: 'accesorii',
//     culoare: 'verde',
//     url: ['/accesorii/laveta8.jpg'],
//     code: '52561', 
//     material: 'bumbac', 
//     name: 'Laveta8', 
//     price: 45, 
//     width: '485', 
//     height: '273'
//   },
//   {
//     id: '29',
//     clasa: 'lentile',
//     url: ['/lentile/lens1.jpg'],
//     code: '52562', 
//     material: 'sticla', 
//     name: 'Lentila convexa', 
//     price: 142, 
//     width: '1000', 
//     height: '562'
//   },
//   {
//     id: '30',
//     clasa: 'lentile',
//     url: ['/lentile/lens2.jpg'],
//     code: '52563', 
//     material: 'organica', 
//     name: 'Lentila concava', 
//     price: 250, 
//     width: '900', 
//     height: '506'
//   },
// ]


const PRODUSE = [
  {
    id: '1',
    clasa: 'rame',
    url: '/ochelari/1/DSC_0001.jpg',
    carousel: ['/ochelari/1/DSC_0001.jpg', '/ochelari/1/DSC_0002.jpg', '/ochelari/1/DSC_0003.jpg', '/ochelari/1/DSC_0004.jpg'],
    code: '9427426',
    name: 'Guci Space',
    material: 'plastic',
    price: 152, 
    width: '1920',
    height: '1080'
  },
  {
    id: '2',
    clasa: 'rame',
    url: '/ochelari/2/DSC_0003.jpg',
    carousel: ['/ochelari/2/DSC_0003.jpg', '/ochelari/2/DSC_0004.jpg'],
    code: '1966720',
    name: 'Arnette',
    material: 'organic',
    price: 335, 
    width: '1920',
    height: '1080'
  },
  {
    id: '3',
    clasa: 'rame',
    url: '/ochelari/3/DSC_0005.jpg',
    carousel: ['/ochelari/3/DSC_0005.jpg', '/ochelari/3/DSC_0006.jpg'],
    code: '3910376',
    name: 'Ochelari 3',
    material: 'plastic',
    price: 363, 
    width: '1920',
    height: '1080'
  },
  {
    id: '4',
    clasa: 'rame',
    url: '/ochelari/4/DSC_0007.jpg',
    carousel: ['/ochelari/4/DSC_0007.jpg', '/ochelari/4/DSC_0008.jpg'],
    code: '4066760',
    name: 'Arnette',
    material: 'metal',
    price: 583, 
    width: '1920',
    height: '1080'
  },
  {
    id: '5',
    clasa: 'rame',
    url: '/ochelari/5/DSC_0009.jpg',
    carousel: ['/ochelari/5/DSC_0009.jpg', '/ochelari/5/DSC_0010.jpg'],
    code: '3263893',
    name: 'Ochelari 5',
    material: 'plastic',
    price: 641, 
    width: '1920',
    height: '1080'
  },
  {
    id: '6',
    clasa: 'rame',
    url: '/ochelari/6/DSC_0011.jpg',
    carousel: ['/ochelari/6/DSC_0011.jpg', '/ochelari/6/DSC_0012.jpg'],
    code: '0280617',
    name: 'Police night',
    material: 'organic',
    price: 311, 
    width: '1920',
    height: '1080'
  },
  {
    id: '7',
    clasa: 'rame',
    url: '/ochelari/7/DSC_0013.jpg',
    carousel: ['/ochelari/7/DSC_0013.jpg', '/ochelari/7/DSC_0014.jpg'],
    code: '8100572',
    name: 'Arnette',
    material: 'metal',
    price: 913, 
    width: '1920',
    height: '1080'
  },
  {
    id: '8',
    clasa: 'rame',
    url: '/ochelari/8/DSC_0015.jpg',
    carousel: ['/ochelari/8/DSC_0015.jpg', '/ochelari/8/DSC_0016.jpg'],
    code: '1605970',
    name: 'Guci Knight 8',
    material: 'plastic',
    price: 767, 
    width: '1920',
    height: '1080'
  },
  {
    id: '9',
    clasa: 'rame',
    url: '/ochelari/9/DSC_0017.jpg',
    carousel: ['/ochelari/9/DSC_0017.jpg', '/ochelari/9/DSC_0018.jpg'],
    code: '6543541',
    name: 'Police Dark Blue',
    material: 'plastic',
    price: 193, 
    width: '1920',
    height: '1080'
  },
  {
    id: '10',
    clasa: 'rame',
    url: '/ochelari/10/DSC_0019.jpg',
    carousel: ['/ochelari/10/DSC_0019.jpg', '/ochelari/10/DSC_0021.jpg'],
    code: '1978434',
    name: 'Costa City',
    material: 'plastic',
    price: 557, 
    width: '1920',
    height: '1080'
  },
  {
    id: '11',
    clasa: 'rame',
    url: '/ochelari/11/DSC_0022.jpg',
    carousel: ['/ochelari/11/DSC_0022.jpg', '/ochelari/11/DSC_0023.jpg'],
    code: '2067532',
    name: 'Day Police blue',
    material: 'metal',
    price: 935, 
    width: '1920',
    height: '1080'
  },
  {
    id: '12',
    clasa: 'rame',
    url: '/ochelari/12/DSC_0024.jpg',
    carousel: ['/ochelari/12/DSC_0024.jpg', '/ochelari/12/DSC_0025.jpg'],
    code: '3574542',
    name: 'Costa Jungle',
    material: 'plastic',
    price: 322, 
    width: '1920',
    height: '1080'
  },
  {
    id: '13',
    clasa: 'rame',
    url: '/ochelari/13/DSC_0026.jpg',
    carousel: ['/ochelari/13/DSC_0026.jpg', '/ochelari/13/DSC_0027.jpg'],
    code: '0938051',
    name: 'Police Space',
    material: 'plastic',
    price: 458, 
    width: '1920',
    height: '1080'
  },
  {
    id: '14',
    clasa: 'rame',
    url: '/ochelari/14/DSC_0028.jpg',
    carousel: ['/ochelari/14/DSC_0028.jpg', '/ochelari/14/DSC_0029.jpg'],
    code: '1118921',
    name: 'Guci',
    material: 'plastic',
    price: 679, 
    width: '1920',
    height: '1080'
  },
  {
    id: '15',
    clasa: 'rame',
    url: '/ochelari/15/DSC_0030.jpg',
    carousel: ['/ochelari/15/DSC_0030.jpg', '/ochelari/15/DSC_0031.jpg'],
    code: '7398459',
    name: 'Rainbow Arnette',
    material: 'metal',
    price: 788, 
    width: '1920',
    height: '1080'
  },
  {
    id: '16',
    clasa: 'rame',
    url: '/ochelari/16/DSC_0032.jpg',
    carousel: ['/ochelari/16/DSC_0032.jpg', '/ochelari/16/DSC_0033.jpg'],
    code: '5403267',
    name: 'Ochelari 16',
    material: 'plastic',
    price: 640, 
    width: '1920',
    height: '1080'
  },
  {
    id: '17',
    clasa: 'rame',
    url: '/ochelari/17/DSC_0034.jpg',
    carousel: ['/ochelari/17/DSC_0034.jpg', '/ochelari/17/DSC_0035.jpg'],
    code: '3613298',
    name: 'Ochelari 17',
    material: 'plastic',
    price: 915, 
    width: '1920',
    height: '1080'
  },
  {
    id: '18',
    clasa: 'rame',
    url: '/ochelari/18/DSC_0036.jpg',
    carousel: ['/ochelari/18/DSC_0036.jpg', '/ochelari/18/DSC_0037.jpg'],
    code: '5367668',
    name: 'Ochelari 18',
    material: 'organic',
    price: 511,
    width: '1920',
    height: '1080'
  },
  {
    id: '19',
    clasa: 'rame',
    url: '/ochelari/19/DSC_0038.jpg',
    carousel: ['/ochelari/19/DSC_0038.jpg', '/ochelari/19/DSC_0039.jpg'],
    code: '4100258',
    name: 'Costa Rica',
    material: 'plastic',
    price: 762, 
    width: '1920',
    height: '1080'
  },
  {
    id: '20',
    clasa: 'rame',
    url: '/ochelari/20/DSC_0040.jpg',
    carousel: ['/ochelari/20/DSC_0040.jpg', '/ochelari/20/DSC_0041.jpg'],
    code: '4343445',
    name: 'Ochelari 20',
    material: 'plastic',
    price: 906, 
    width: '1920',
    height: '1080'
  },
  { id: '21', clasa: 'accesorii', culoare: 'verde', url: '/accesorii/laveta1.jpg', carousel: ['/accesorii/laveta1.jpg'], code: '49374', material: 'bumbac', name: 'Laveta1', price: 42, width: '2000', height: '1125' },
  { id: '22', clasa: 'accesorii', culoare: 'rosu', url: '/accesorii/laveta2.jpg', carousel: ['/accesorii/laveta2.jpg'], code: '75629', material: 'lana', name: 'Laveta2', price: 79, width: '800', height: '450' },
  { id: '23', clasa: 'accesorii', culoare: 'albastru', url: '/accesorii/laveta3.jpg', carousel: ['/accesorii/laveta3.jpg'], code: '54976', material: 'bumbac', name: 'Laveta3', price: 48, width: '800', height: '450' },
  { id: '24', clasa: 'accesorii', culoare: 'verde', url: '/accesorii/laveta4.jpg', carousel: ['/accesorii/laveta4.jpg'], code: '92809', material: 'bumbac', name: 'Laveta4', price: 91, width: '1200', height: '675' },
  { id: '25', clasa: 'accesorii', culoare: 'portocaliu', url: '/accesorii/laveta5.jpg', carousel: ['/accesorii/laveta5.jpg'], code: '92981', material: 'lana', name: 'Laveta5', price: 17, width: '800', height: '450' },
  { id: '26', clasa: 'accesorii', culoare: 'verde', url: '/accesorii/laveta6.jpg', carousel: ['/accesorii/laveta6.jpg'], code: '58565', material: 'bumbac', name: 'Laveta6', price: 48, width: '1200', height: '675' },
  { id: '27', clasa: 'accesorii', culoare: 'verde', url: '/accesorii/laveta7.jpg', carousel: ['/accesorii/laveta7.jpg'], code: '81986', material: 'lana', name: 'Laveta7', price: 94, width: '1000', height: '562' },
  { id: '28', clasa: 'accesorii', culoare: 'verde', url: '/accesorii/laveta8.jpg', carousel: ['/accesorii/laveta8.jpg'], code: '52561', material: 'bumbac', name: 'Laveta8', price: 45, width: '485', height: '273' },
  { id: '29', clasa: 'lentile', url: '/lentile/lens1.jpg', carousel: ['/lentile/lens1.jpg'], code: '52562', material: 'sticla', name: 'Lentila convexa', price: 142, width: '1000', height: '562' },
  { id: '30', clasa: 'lentile', url: '/lentile/lens2.jpg', carousel: ['/lentile/lens2.jpg'], code: '52563', material: 'organica', name: 'Lentila concava', price: 250, width: '900', height: '506' },
]

const LENTILE = [
  { id: '', name: '', tip: '', dioptrie: '' },
]


export const getIndexData = () => {
    return new Promise((resolve, reject) => {
        // first arg is a function, second arg is the time
        setTimeout(() => {
            resolve(INDEX_DATA)
            // reject('Cannot fetch data.')
        }, 50)
    })
}

export const getProduse = () => {
    return new Promise((resolve, reject) => {
        // first arg is a function, second arg is the time
        setTimeout(() => {
            resolve(PRODUSE)
            // reject('Cannot fetch data.')
        }, 50)
    })
}

/*
export const getIndexData = () => {
  return new Promise((resolve, reject) => {
    // first arg is a function, second arg is the time
    setTimeout(() => {
      resolve(INDEX_DATA)
      // reject('Cannot fetch data.')
    }, 50)
  })
}

export const getProduse = () => {
  return axios.get(`${BASE_URL}/api/Prods`).then(res => res.data)
}
*/
