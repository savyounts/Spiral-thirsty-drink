import { useRouter } from 'next/router'

const DrinkDetails = () => {
  const router = useRouter()
  const { name } = router.query
  
  return (
    <div>
      <img src='' />
      <h1>{name}</h1>
      <div>
        <p>Ingredients:</p>

      </div>
    </div>
  )
}

export default DrinkDetails
