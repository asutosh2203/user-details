import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { storeUsers } from '../features/users'

const UsersData = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=2').then((res) => {
      const { data } = res.data
      dispatch(storeUsers(data))
    })
  }, [])
  return <div></div>
}

export default UsersData
