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
    {id: '1',url: '/ochelari/img01.jpg', name: 'Ochelari 1', material: 'plastic', price: '152', width: '275', height: '155'},
    {id: '2',url: '/ochelari/img02.jpg', name: 'Ochelari 2', material: 'organic', price: '335', width: '652', height: '366'},
    {id: '3',url: '/ochelari/img03.jpg', name: 'Ochelari 3', material: 'plastic', price: '363', width: '1097', height: '617'},
    {id: '4',url: '/ochelari/img04.jpg', name: 'Ochelari 4', material: 'metal', price: '583', width: '1080', height: '607'},
    {id: '5',url: '/ochelari/img05.jpg', name: 'Ochelari 5', material: 'plastic', price: '641', width: '600', height: '338'},
    {id: '6',url: '/ochelari/img06.jpg', name: 'Ochelari 6', material: 'organic', price: '111', width: '540', height: '304'},
    {id: '7',url: '/ochelari/img07.jpg', name: 'Ochelari 7', material: 'metal', price: '913', width: '735', height: '414'},
    {id: '8',url: '/ochelari/img08.jpg', name: 'Ochelari 8', material: 'plastic', price: '767', width: '735', height: '413'},
    {id: '9',url: '/ochelari/img09.jpg', name: 'Ochelari 9', material: 'plastic', price: '193', width: '736', height: '414'},
    {id: '10',url: '/ochelari/img10.jpg', name: 'Ochelari 10', material: 'plastic', price: '557', width: '500', height: '282'},
    {id: '11',url: '/ochelari/img11.jpg', name: 'Ochelari 11', material: 'metal', price: '935', width: '736', height: '414'},
    {id: '12',url: '/ochelari/img12.jpg', name: 'Ochelari 12', material: 'plastic', price: '322', width: '453', height: '255'},
    {id: '13',url: '/ochelari/img13.jpg', name: 'Ochelari 13', material: 'plastic', price: '458', width: '370', height: '208'},
    {id: '14',url: '/ochelari/img14.jpg', name: 'Ochelari 14', material: 'plastic', price: '679', width: '350', height: '197'},
    {id: '15',url: '/ochelari/img15.jpg', name: 'Ochelari 15', material: 'metal', price: '788', width: '735', height: '413'},
    {id: '16',url: '/ochelari/img16.jpg', name: 'Ochelari 16', material: 'plastic', price: '640', width: '541', height: '305'},
    {id: '17',url: '/ochelari/img17.jpg', name: 'Ochelari 17', material: 'plastic', price: '915', width: '500', height: '282'},
    {id: '18',url: '/ochelari/img18.jpg', name: 'Ochelari 18', material: 'organic', price: '511', width: '600', height: '338'},
    {id: '19',url: '/ochelari/img19.jpg', name: 'Ochelari 19', material: 'plastic', price: '762', width: '626', height: '352'},
    {id: '20',url: '/ochelari/img20.jpg', name: 'Ochelari 20', material: 'plastic', price: '906', width: '310', height: '174'},
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