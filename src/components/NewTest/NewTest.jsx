import React from 'react'
import styled from 'styled-components'
import Cookie from 'js-cookie'
import { useHistory } from 'react-router-dom'


const CustomDiv = styled.div`
  background-image: url('${require('../../img/123.jpg')}');
  width: 400px;
  height: 300px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const NewTest = () => {
  const history = useHistory()

  const logOut = () => {
    Cookie.remove('token')
    Cookie.remove('role')
    history.push('/')
  }

  return (
    <div
      className="shadow-lg flex w-full h-16 bg-white items-center px-4"
    >
      <span className="text-green-600 font-bold text-2xl select-none">
        NEW REACT
      </span>
      <CustomDiv />
      <button onClick={logOut}>Выйти</button>
    </div>
  )
}

export default NewTest
