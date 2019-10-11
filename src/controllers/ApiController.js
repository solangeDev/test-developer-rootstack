import axios from 'axios'

export default {

  getUsersApi(cant, nat) {
    let route = `https://randomuser.me/api/`
    if (cant !== undefined && cant > 0) {
      route = `https://randomuser.me/api/?results=${cant}`
    }
    if (nat !== undefined) {
      if (route.search("/?/") !== -1) {
        route += "&";
      } else {
        route += "?";
      }
      route += `nat=${nat}`
    }
    return axios({
      method: 'GET',
      url: route,
      headers: {},
      data: {}
    })
  },

  getSwapi(route) {
    let routeAx = "https://swapi.co/api/starships/";
    if (route !== undefined) {
      routeAx = route;
    }
    return axios({
      method: 'GET',
      url: routeAx,
      headers: {},
      data: {}
    })
  },

  getUserOrderby(cant) {
    let values = [];
    let users = this.getUsersApi(cant).then(value => {
        let data = value.data.results;
        let dataOrderAsc = data.sort((a, b) => {
          if (a.name.first < b.name.first) {
            return -1;
          }
          if (a.name.first > b.name.first) {
            return 1;
          }
          return 0;
        });
        return dataOrderAsc;
      })
      .catch(error => {
        console.log(error);
      });
    return users;
  },

  getUserbyAge(age) {
    let users = this.getUsersApi(0).then(value => {
      let ageData = value.data.results[0].dob.age;
      if (ageData >= age) {
        return value.data.results[0];
      } else {
        this.getUserbyAge(age);
      }
    }).catch(error => {
      console.log(error);
    });
    return users;
  },

  async getUserCountString(cant, nat) {
    let users = await this.getUsersApi(cant, nat).then(value => {
      return value.data.results.map((b) => {
        let obj = {};
        obj.name = `${b.name.first} ${b.name.last}`.toLowerCase()
        let str = obj.name.replace(/\s/g, "");
        let calculations = {}
        for (let char in str) {
          if (str[char] in calculations) {
            calculations[str[char]] = calculations[str[char]] + 1
          } else {
            calculations[str[char]] = 1
          }
        }
        obj.result = calculations;
        let a = 0;
        let key = null;
        for (let i in calculations) {
          if (calculations[i] > a) {
            key = i;
            a = calculations[i];
          }
        }
        obj.maxCharacter = key
        return obj;
      })
    }).catch(error => {
      console.log(error);
    })
    return users;
  },

  async getDataPlanets(terrain) {
    let route = "https://swapi.co/api/planets/";
    return await this.getSwapi(route).then((c)=>{
      let data = c.data.results.filter((a) => {
        if (a.terrain.search(terrain) !== -1){
          return a;
        }
      })
      if(data.length > 1){
        let a = 0;
        let key = null
        for (let i in data) {
          if (data[i].population > a) {
            key = i;
            a = data[i].population
          }
        }
        data = data[key];  
      }
      return data;
    })
  },

  async fastestShip(capacity) {
    //years trilogy (4,5,6) 
    const year_ini = 1977;
    const year_end = 1983;
    let ships = await this.getSwapi().then((value) => {
      let data = value.data.results.filter((c) => { //Tiene la capacidad para transportar los pasajeros indicados
        if (((c.passengers) >= capacity)) {
          return c;
        }
      }).filter((c) => { //Fue parte de la trilogía original (4, 5, 6)
        const films = c.films;
        let filmsFilter = films.filter(async (c) => {
          let dataFilm = await this.getSwapi(c).then((a) => {
            let year = a.data.release_date.split("-");
            year = year[0];
            if (parseInt(year) >= year_ini && parseInt(year) <= year_end) {
              return c;
            }
          })
        })
        if (filmsFilter.length > 0) {
          return c;
        }
      }).filter((z) => { //Puede viajar por al menos 1 semana.
        let consumables = z.consumables.split(" ");
        if (consumables.length == 2) {
          if (consumables[1].indexOf(["days", "day"]) !== -1) {
            if (parseInt(consumables[1]) >= 7) {
              return z;
            }
          } else if (consumables[1].indexOf(["week", "weeks"]) !== -1) {
            if (parseInt(consumables[1]) >= 1) {
              return z;
            }
          } else {
            return z;
          }
        }
      })
      if (data.length > 1) { //si es mas de una buscar la mas rapida
        let a = 0;
        let key = null
        for (let i in data) {
          if (data[i].max_atmosphering_speed > a) {
            key = i;
            a = data[i].max_atmosphering_speed
          }
        }
        data = data[key];
      }
      return data;
    })
    return ships;
  }
}
