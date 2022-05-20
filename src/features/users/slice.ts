import { User } from 'types/profile'
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { fetchUsers } from './actions'

export const usersAdapter = createEntityAdapter({
  selectId: (user: User) => user.id
})

const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState({ loading: false, error: false }),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      usersAdapter.setAll(state, action.payload)
    })
    builder.addCase(fetchUsers.rejected, state => {
      state.loading = false
      state.error = true
    })
  }
})

export default usersSlice.reducer
