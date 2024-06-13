"use client"
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type LoadingProps = {
  count: number
}

export const Loading = ({ count }: LoadingProps) => {
  return (
    <Skeleton count={count}>

    </Skeleton>
  )
}
