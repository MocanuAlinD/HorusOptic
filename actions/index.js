const INDEX_DATA = [
  {
    id: 1,
    title: 'Cu ce ne ocupam',
    text: 'Consultatii optica medicala gratuite indiferent daca se achizitioneaza sau nu produsele companiei. Furnizarea de produse si servicii de calitate superioara si la preturi minime.',
    button: 'Citeste mai mult',
    url: '/Ocupa'
  },
  {
    id: 2,
    title: 'Consultanță',
    text: 'HORUS TOP OPTIC se adreseaza persoanelor care sunt in cautarea unor servicii prompte si de calitate, totul pentru un pret corect.',
    button: 'Citeste mai mult',
    url: '/Consultanta'
  },
  {
    id: 3,
    title: 'Despre noi',
    text: 'HORUS TOP OPTIC desfasoara programul de servicii de optica medicala si protectia vederii pentru angajatii companiilor. Ochelari de vedere, rame, lentile de contact, ochelari de soare.',
    button: 'Citeste mai mult',
    url: '/DespreNoi'
  },

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