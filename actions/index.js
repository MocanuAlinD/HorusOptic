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

const PRODUSE = [
    { id: '1', clasa: 'rame', url: '/ochelari/img01.jpg', code: '9427426', name: 'Guci Space', material: 'plastic', price: 152, width: '275', height: '155' },
    { id: '2', clasa: 'rame', url: '/ochelari/img02.jpg', code: '1966720', name: 'Arnette', material: 'organic', price: 335, width: '652', height: '366' },
    { id: '3', clasa: 'rame', url: '/ochelari/img03.jpg', code: '3910376', name: 'Ochelari 3', material: 'plastic', price: 363, width: '1097', height: '617' },
    { id: '4', clasa: 'rame', url: '/ochelari/img04.jpg', code: '4066760', name: 'Arnette', material: 'metal', price: 583, width: '1080', height: '607' },
    { id: '5', clasa: 'rame', url: '/ochelari/img05.jpg', code: '3263893', name: 'Ochelari 5', material: 'plastic', price: 641, width: '600', height: '338' },
    { id: '6', clasa: 'rame', url: '/ochelari/img06.jpg', code: '0280617', name: 'Police night', material: 'organic', price: 311, width: '540', height: '304' },
    { id: '7', clasa: 'rame', url: '/ochelari/img07.jpg', code: '8100572', name: 'Arnette', material: 'metal', price: 913, width: '735', height: '414' },
    { id: '8', clasa: 'rame', url: '/ochelari/img08.jpg', code: '1605970', name: 'Guci Knight 8', material: 'plastic', price: 767, width: '735', height: '413' },
    { id: '9', clasa: 'rame', url: '/ochelari/img09.jpg', code: '6543541', name: 'Police Dark Blue', material: 'plastic', price: 193, width: '736', height: '414' },
    { id: '10', clasa: 'rame', url: '/ochelari/img10.jpg', code: '1978434', name: 'Costa City', material: 'plastic', price: 557, width: '500', height: '282' },
    { id: '11', clasa: 'rame', url: '/ochelari/img11.jpg', code: '2067532', name: 'Day Police blue', material: 'metal', price: 935, width: '736', height: '414' },
    { id: '12', clasa: 'rame', url: '/ochelari/img12.jpg', code: '3574542', name: 'Costa Jungle', material: 'plastic', price: 322, width: '453', height: '255' },
    { id: '13', clasa: 'rame', url: '/ochelari/img13.jpg', code: '0938051', name: 'Police Space', material: 'plastic', price: 458, width: '370', height: '208' },
    { id: '14', clasa: 'rame', url: '/ochelari/img14.jpg', code: '1118921', name: 'Guci', material: 'plastic', price: 679, width: '350', height: '197' },
    { id: '15', clasa: 'rame', url: '/ochelari/img15.jpg', code: '7398459', name: 'Rainbow Arnette', material: 'metal', price: 788, width: '735', height: '413' },
    { id: '16', clasa: 'rame', url: '/ochelari/img16.jpg', code: '5403267', name: 'Ochelari 16', material: 'plastic', price: 640, width: '541', height: '305' },
    { id: '17', clasa: 'rame', url: '/ochelari/img17.jpg', code: '3613298', name: 'Ochelari 17', material: 'plastic', price: 915, width: '500', height: '282' },
    { id: '18', clasa: 'rame', url: '/ochelari/img18.jpg', code: '5367668', name: 'Ochelari 18', material: 'organic', price: 511, width: '600', height: '338' },
    { id: '19', clasa: 'rame', url: '/ochelari/img19.jpg', code: '4100258', name: 'Costa Rica', material: 'plastic', price: 762, width: '626', height: '352' },
    { id: '20', clasa: 'rame', url: '/ochelari/img20.jpg', code: '4343445', name: 'Ochelari 20', material: 'plastic', price: 906, width: '310', height: '174' },
    { id: '21', clasa: 'accesorii', culoare: 'verde', url: '/accesorii/laveta1.jpg', code: '49374', material: 'bumbac', name: 'Laveta1', price: 42, width: '2000', height: '1125' },
    { id: '22', clasa: 'accesorii', culoare: 'rosu', url: '/accesorii/laveta2.jpg', code: '75629', material: 'lana', name: 'Laveta2', price: 79, width: '800', height: '450' },
    { id: '23', clasa: 'accesorii', culoare: 'albastru', url: '/accesorii/laveta3.jpg', code: '54976', material: 'bumbac', name: 'Laveta3', price: 48, width: '800', height: '450' },
    { id: '24', clasa: 'accesorii', culoare: 'verde', url: '/accesorii/laveta4.jpg', code: '92809', material: 'bumbac', name: 'Laveta4', price: 91, width: '1200', height: '675' },
    { id: '25', clasa: 'accesorii', culoare: 'verde', url: '/accesorii/laveta5.jpg', code: '92981', material: 'lana', name: 'Laveta5', price: 17, width: '800', height: '450' },
    { id: '26', clasa: 'accesorii', culoare: 'verde', url: '/accesorii/laveta6.jpg', code: '58565', material: 'bumbac', name: 'Laveta6', price: 48, width: '1200', height: '675' },
    { id: '27', clasa: 'accesorii', culoare: 'verde', url: '/accesorii/laveta7.jpg', code: '81986', material: 'lana', name: 'Laveta7', price: 94, width: '1000', height: '562' },
    { id: '28', clasa: 'accesorii', culoare: 'verde', url: '/accesorii/laveta8.jpg', code: '52561', material: 'bumbac', name: 'Laveta8', price: 45, width: '485', height: '273' },
    { id: '29', clasa: 'lentile', url: '/lentile/lens1.jpg', code: '52562', material: 'sticla', name: 'Lentila convexa', price: 142, width: '1000', height: '562' },
    { id: '30', clasa: 'lentile', url: '/lentile/lens2.jpg', code: '52563', material: 'organica', name: 'Lentila concava', price: 250, width: '900', height: '506' },
]


const LENTILE = [
    {id: '', name: '', tip: '', dioptrie: ''},
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