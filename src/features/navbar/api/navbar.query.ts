import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { INavbar } from '../types/navbar.types'

const baseUrl = '/api'


export const navbarApi = createApi({
	reducerPath: 'navbarApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
    getNavbarData: builder.query<INavbar[], void>({
      query: () => `./navbar.db.json`,
    }),
  }),
	// omitted
  // endpoints: (builder) => ({
  //   getNavbarData: builder.query({
  //     query: (user: Record<string, string>) => ({
  //       url: `users`,
  //       method: 'PUT',
  //       headers: {
  //           'content-type': 'text/plain',
  //       },
  //       body: user
  //     }),
  //   }),
})

export const { useGetNavbarDataQuery } = navbarApi