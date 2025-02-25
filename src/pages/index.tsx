import HomeTemplate from 'templates/Home'
import React from 'react'
import { MapProps } from 'components/Map'
import client from 'graphql/client'
import { GET_PLACES } from 'graphql/queries'
import { GetPlacesQuery } from 'graphql/generated/graphql'
export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps = async () =>
   {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    revalidate: 60,
    props: {
      places
    }
  }
}
