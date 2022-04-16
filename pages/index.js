import React from 'react'
import Frame from "../components/Frame"
import HeaderOptions from "../components/HeaderOptions"
import ShopBy from "../components/ShopBy"
import HeaderTitle from "../components/HeaderTitle"

const index = () => {
  return (
    <div className='flex flex-col gap-5'>
      <HeaderTitle />
      <HeaderOptions />
      <Frame />
      <ShopBy />
    </div>
  )
}

export default index