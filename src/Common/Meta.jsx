import React from 'react'
import { Helmet } from 'react-helmet'

export default function Meta({title, description, keyword }) {
    return(
<Helmet>
    <title>{title}</title>
    <meta  content='keyword' keyword={keyword}    />
    <meta  content='description' keyword={description}    />

</Helmet>
  )

}





Meta.defaultProps = {
    title: '',
    keyword: "" ,
    description: ""

}