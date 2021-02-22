let datas = []
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    axios.get('https://covid19-api.org/api/status')
        .then((info) => {
            datas = info.data
            console.log(datas)
        })
        .catch((err) => {
            console.log('OHH NO!!!! ERROR', err)
        })

    for (let data of datas) {
        document.querySelector('main').innerHTML += `country: ${data.country} <br> recovered: ${data.recovered}<hr>`;
    }


})