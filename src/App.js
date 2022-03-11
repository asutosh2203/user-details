import './App.css'
import axios from 'axios'
import UsersData from './components/UsersData'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Spinner from './components/Spinner'

function App() {
  const [user, setUser] = useState()
  const fetchedUsers = useSelector((state) => state.usersReducer.value)
  const [loading, setLoading] = useState(false)
  const fetchUser = (userId) => {
    setLoading(true)
    axios.get(`https://reqres.in/api/users/${userId}`).then((res) => {
      const { data } = res.data
      setUser(data)
      setLoading(false)
    })
  }

  return (
    <div className='App'>
      <UsersData />

      <div className='user-card'>
        {loading ? (
          <Spinner message={'Loading User'} />
        ) : user ? (
          <div className='user-info'>
            {user.avatar ? (
              <img src={user.avatar} />
            ) : (
              <Spinner type={'TailSpin'} />
            )}
            <div>
              <p className='name'>
                <span>{user.id}</span>. {user?.first_name} {user?.last_name}
              </p>
              <p>{user.email}</p>
            </div>
          </div>
        ) : (
          <p>Select an user to view info</p>
        )}
      </div>
      <div className='user-buttons'>
        {fetchedUsers.map((user) => (
          <button
            onClick={() => {
              fetchUser(user.id)
            }}
            key={user.id}
          >
            {user.first_name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
