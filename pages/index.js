import React from 'react'
import Frame from "../components/Frame"
import ShopBy from "../components/ShopBy"
import HeaderTitle from "../components/HeaderTitle"

const index = () => {
  return (
    <div className='flex flex-col gap-5'>
      <HeaderTitle />
      <Frame />
      <ShopBy />
    </div>
  )
}

export default index