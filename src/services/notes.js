import axios from 'axios'
const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:3001/api/notes'

console.log('process.env.REACT_APP_BASE_URL', process.env.REACT_APP_BASE_URL)
console.log('base url', baseUrl)

const getAll = () => {
  const request = axios.get(baseUrl)

  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update }