import { Results } from 'types/result'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchResults = createAsyncThunk<Results, number>(
  'results/fetchResults',
  async (profileID: number) => {
    try {
      const data = await fetch(
        `http://localhost:4000/result?profile_id=${profileID}&_sort=date_created&_order=desc&_limit=4`
      )
      const json = await data.json()
      console.log(json)
      return json
    } catch (e) {
      throw new Error(`Fail to fetch results: ${e}`)
    }
  }
)
