
//TEMPLATE STRING
const template = (num1, num2) => `La suma es :  ${num1 + num2}`;
const resultado = template(20, 30);

//FUNCIONES FLECHA
const multiplicador = (num1 = null, num2 = null) => {
    return num1 * num2;
}
const resultado2 = multiplicador(20, 50);

//OBJETOS Y ARRAYS
const persona = {
    nombre: 'Luis Miguel',
    edad: '21',
    sexo: '24',
    certificado: []
}
persona.certificado.push('js');

// DESTRUCTURING
const pikachu = {
    "abilities": 'trueno',
    "ability": {
        "name": "static",
        "url": "https://pokeapi.co/api/v2/ability/9/"
    },
    "is_hidden": false,
    "slot": 1
}

const { abilities } = pikachu;
const { name, url } = pikachu.ability

/*
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(data => {
        data.results.forEach(element => {
            console.log(element.name);
        });
    })
    .catch(error => console.log(error))
*/

/*
const btnEntrada = document.getElementById('btnEntrada');
const txtEntrada = document.getElementById('entrada');
const row = document.getElementById('row');

btnEntrada.addEventListener('click', (e) => {
    e.preventDefault();
    const entrada = txtEntrada.value;
    fetch('https://jsonplaceholder.typicode.com/' + `${entrada}`)
        .then((res) => {
            return res.json();
        })
        .then((data => {
            data.forEach(element => {
                delete element.address;
                delete element.company;
                const div = document.createElement('div');
                div.classList.add('col-sm-4');

                const divCard = document.createElement('div');
                divCard.classList.add('card');
                divCard.setAttribute("style", "width: 18rem; margin-top: 10px;");

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                const cardTitle = document.createElement('h5');
                cardTitle.classList.add('card-title');

                const listaUL = document.createElement('ul');

                cardTitle.textContent = element.name;
                cardBody.appendChild(cardTitle);

                delete element.name;
                delete element.id;

                for (const elementos in element) {
                        let li = document.createElement('li');
                        li.innerHTML= '<label style="font-weight: bold;">'+  elementos + '</label>' + ' : ' + element[elementos];
                        listaUL.appendChild(li);
                }
                cardBody.appendChild(listaUL);
                divCard.appendChild(cardBody);
                div.appendChild(divCard);
                row.appendChild(div);
            });
        }))
        .catch(error => {
            window.alert('Paramento Incorrecto !!');
            if(error && row.childElementCount > 0){
                while(row.lastChild){
                    row.removeChild(row.lastChild);
                }
            }
        });
    txtEntrada.value = "";
   
});
*/

//FETCH API

const getPokemons = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await res.json();
        console.log(data.results);
    } catch (error) {
        console.log(error)
    }
}

//getPokemons();
// Ejemplos de asyn await


/*
const countrys = function getCountrys(){
    return fetch('https://pkgstore.datahub.io/core/country-codes/country-codes_json/data/471a2e653140ecdd7243cdcacfd66608/country-codes_json.json');
}

const showCountrys = async () => {
    try {
        const res = await countrys();
        const data = await res.json();
        data.map(country => console.log(country['CLDR display name']))
        //console.log(data['CLDR display name']);
    } catch (error) {
        console.log(error);
    }
}

showCountrys();
*/

async function getCountrys() {
    const res = await fetch('https://pkgstore.datahub.io/core/country-codes/country-codes_json/data/471a2e653140ecdd7243cdcacfd66608/country-codes_json.json');
    const data = await res.json();
    return data.map(country => country['CLDR display name'])
}

//getCountrys();
/*
(async function(){
  const countrys = await getCountrys();
  console.log("Countrys => ", countrys );  
})()
*/

// API : https://api.github.com/users 
// Nombres

const body = document.body;
const listUsers = document.createElement('ul');
//listUsers.setAttribute('type','a');
body.appendChild(listUsers);
const aVocal = ['a', 'e', 'i', 'o', 'u'];

const getUsersGithubs = async function getUsersGithub() {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json()
    return data.map(users => users['login'])
}

const deleteUsers = async function deleteUsers(users) {
    
    const newUsers = await users;
    /*
    let aUsers = newUsers.map(element => {
        if (aVocal.includes(element.charAt(0))) {
            return element;
        }
    })
    */
    const aUsers = newUsers.filter( element => {
        if (aVocal.includes(element.charAt(0))) {
            return element;
        }
    })    
    return await aUsers.reserve();
    // .sort() metodo para odernar por letras
    /*
    newUsers.forEach(element => {
        if(aVocal.includes(element.charAt(0))){
            // delete element;  No funciona porque .map devuevle un array no un objeto
            aUsers.push(element);
        }
    });
    */
}

const showUsersGithub = async () => {
    try {
        const users = await deleteUsers(getUsersGithubs());
        users.forEach(users => {
            const elementUser = document.createElement('li');
            elementUser.innerHTML = users;
            listUsers.appendChild(elementUser);
            /*
            if ( typeof users != 'undefined') {
                const elementUser = document.createElement('li');
                elementUser.innerHTML = users;
                listUsers.appendChild(elementUser);
            }
            */
        });
    } catch (error) {
        window.alert(error);
    }
}

//deleteUsers(getUsersGithubs());
//showUsersGithub();





    const elements = await page.waitForSelector("#offersGridOfferContainer");
    const html = await page.evaluate(element => {
        const primeministers = [];
        let _element = element.querySelectorAll("article");
        _element.forEach((evaluate) => {
            console.log(evaluate);
            primeministers.push(evaluate.children[0].children[1].textContent);
        });
        return primeministers
    }, elements);
    console.log(html);

}