import React from 'react'
import { Helmet } from 'react-helmet'

export default function Meta({ title, description, keyword }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keywords" content={keyword} />
      <meta name="description" content={description} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Doven Engineering – Leading Oil & Gas Design Services in Nigeria',
  keyword: 'oil & gas engineering, Doven Engineering, oil & gas design, Nigeria engineering services, energy solutions, offshore engineering, oilfield services, pipeline design, petroleum engineering, energy infrastructure',
  description: 'Doven Engineering Limited specializes in cutting-edge oil & gas design solutions in Nigeria. With over 500 experts and decades of experience, we deliver top-tier engineering services for the energy sector.'
}
