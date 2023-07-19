import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [vans, setVans] = useState([])

  const typeFilter = searchParams.get('type')

  useEffect(() => {
    fetch('api/vans')
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])

  const filteredVans = typeFilter
    ? vans.filter(van => van.type.toLowerCase() === typeFilter)
    : vans

  const vanElements = filteredVans.map(van => (
    <Link
      to={`${van.id}`}
      state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
      <div key={van.id} className="van-tile">
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    </Link>
  ))
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="links">
        <Link to="?type=simple">Simple</Link>
        <Link to="?type=rugged">Rugged</Link>
        <Link to="?type=luxury">Luxury</Link>
        {typeFilter ? <Link to="">Clear</Link> : ''}
      </div>

      <div className="van-list">{vanElements}</div>
    </div>
  )
}
