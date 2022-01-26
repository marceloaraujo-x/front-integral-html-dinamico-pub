const root = document.querySelector('body');
const input = document.querySelector('input');
const google = document.querySelector('h1');

fetch('https://restcountries.com/v2/all').then(function (resposta) {
    const promiseBody = resposta.json();

    promiseBody.then(function (body) {

        input.addEventListener('keydown', function (event) {

            if (event.key !== 'Enter' || event.key === '') return;
            root.innerText = "";

            root.append(google)
            root.append(input)

            const pais = body.find(x => x.name === input.value)

            const paises = document.createElement('div');
            paises.classList.add('paises');


            const nome = document.createElement('h2');
            nome.textContent = `Nome: ${pais.name}`;
            const regiao = document.createElement('span');
            regiao.textContent = `Região: ${pais.region}`;
            const capital = document.createElement('span');
            capital.textContent = `Capital: ${pais.capital}`;
            const populacao = document.createElement('p');
            populacao.textContent = `População ${pais.population}`;
            const bandeira = document.createElement('img');
            bandeira.setAttribute('src', pais.flag);

            paises.append(nome, regiao, capital, populacao, bandeira);
            root.append(paises);

            console.log(root)





            // input.value = ''
        })
    })
})



