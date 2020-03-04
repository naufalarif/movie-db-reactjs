import React, { useEffect, useState } from 'react'
import { create } from 'apisauce'
import config from '../config'

const baseURL = config.baseURLMovie
const backdropURL = config.backdropURL
const apiKey = config.apiKey

const api = create({
  baseURL: baseURL
})

const JumbotronBoarding = (props) => {

  const [data, setData] = useState('')

  useEffect(() => {
   fetchData() 
  }, [])

  const fetchData = async () => {
    let datas = await api
      .get(`${baseURL}/movie/454626?api_key=${apiKey}&language=en-US`)
    let res = datas.data
    setData(res)        
  }  

  return (
    <div>
      <div className="card bg-dark text-white">
        <img className="card-img" src={`${backdropURL}${data.backdrop_path}`} alt="..."/>
        <div className="card-img-overlay">
          <h4>{data.title}</h4>
        </div>
      </div>
    </div>
  )
}

export default JumbotronBoarding