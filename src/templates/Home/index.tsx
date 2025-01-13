import { NextSeo } from 'next-seo'
import React from 'react'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Minhas viagens"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="minhas-viagens.vercel.app"
        openGraph={{
          url: 'minhas-viagens-2-0-2-5.vercel.app',
          title: 'Minhas viagens',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: '',
              width: 1280,
              height: 720,
              alt: 'Minhas viagens'
            }
          ],
          site_name: 'Minhas viagens'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
