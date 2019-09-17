

// handle stack, not permited duplicate items and no more than 5
export function addHistory(station) {
  if (localStorage) {
    let store = localStorage.getItem('stations')
    if (!store) store = []; else store = JSON.parse(store)
    if( undefined === store.find( item => Number(item.number)===Number(station.stationNumber) ) ) {
      store.push({name:station.name,number:station.stationNumber})
    }
    if (store.length>5) store.shift() // remove first
    localStorage.setItem('stations',JSON.stringify(store))
  }
}

export function getHistory() {
  if (localStorage) {
    let store = localStorage.getItem('stations')
    if (!store) store = []; else store = JSON.parse(store)
    return store
  }
  return []
}
