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

const PRODUSE_RAME = [
    {id: '1', name: 'Alin1', material: 'plastic', price: '152'},
    {id: '2', name: 'Alin2', material: 'organic', price: '335'},
    {id: '3', name: 'Alin3', material: 'plastic', price: '363'},
    {id: '4', name: 'Alin4', material: 'metal', price: '583'},
    {id: '5', name: 'Alin5', material: 'plastic', price: '641'},
    {id: '6', name: 'Alin6', material: 'organic', price: '111'},
    {id: '7', name: 'Alin7', material: 'metal', price: '913'},
    {id: '8', name: 'Alin8', material: 'plastic', price: '767'},
    {id: '9', name: 'Alin9', material: 'plastic', price: '193'},
    {id: '10', name: 'Alin10', material: 'plastic', price: '557'},
    {id: '11', name: 'Alin11', material: 'metal', price: '935'},
    {id: '12', name: 'Alin12', material: 'plastic', price: '322'},
    {id: '13', name: 'Alin13', material: 'plastic', price: '458'},
    {id: '14', name: 'Alin14', material: 'plastic', price: '679'},
    {id: '15', name: 'Alin15', material: 'metal', price: '788'},
    {id: '16', name: 'Alin16', material: 'plastic', price: '640'},
    {id: '17', name: 'Alin17', material: 'plastic', price: '915'},
    {id: '18', name: 'Alin18', material: 'organic', price: '511'},
    {id: '19', name: 'Alin19', material: 'plastic', price: '762'},
    {id: '20', name: 'Alin20', material: 'plastic', price: '906'},
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