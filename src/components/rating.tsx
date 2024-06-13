import { useState } from "react"
import { Rating } from "react-simple-star-rating"

export const RatingC = ({value}: any) => {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)
    // other logic
  }

  return (
    <Rating
      onClick={handleRating}
      transition
      allowFraction
      size={24}
      initialValue={value}
    />
  )
}