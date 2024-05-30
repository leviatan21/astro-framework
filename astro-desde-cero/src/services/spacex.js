
export const getLatestLaunches = async () => {
  const { docs } = await fetch('https://api.spacexdata.com/v5/launches/query', {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify({
      'query': {'upcoming': false},
      'options': {
        'sort': {'date_unix': 'asc'},
        'limit': 12
      }
    })
  })
  .then( async res =>  await res.json() )

  return docs
}

export const getLaunchById = async (id='') => {
  const launch = await fetch(`https://api.spacexdata.com/v5/launches/${id}`, {
    'method': 'GET',
    'headers': {
      'Content-Type': 'application/json'
    }
  })
  .then( async res =>  await res.json() )

  return launch
}