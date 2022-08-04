import React from 'react'
import ContactClient from '../contacts/ContactClient'
import PostClient from '../postClient/PostClient'
import RegisterClient from '../register/RegisterClient'
import Subscribe from '../subscribe/Subscribe'

function AllTable() {
  return (
    <>
    <RegisterClient/>
    <PostClient/>
    <ContactClient/>
    <Subscribe/>
    </>
  )
}

export default AllTable