import React, { useEffect } from 'react'
import { graphql } from '@octokit/graphql'

const gh_data = {
  TOKEN: 'token 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'
}

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: gh_data['TOKEN']
  }
})

const search = query => {
  return `{
        search(type: USER, query: "${query}",  first: 10) {
            nodes {
              ...on User {
                id,
                avatarUrl,
                name,
                login
                repositories{
                  totalCount
                }
            }
            }
          }
      }`
}

const user = (name = 'nurySar97', totalCount) => {
  return `{
    user(login: "${name}"){
        name,
        login
        email,
        avatarUrl,
        createdAt,
        followers {totalCount},
        following {totalCount},
        bio,
        repositories(first: "${totalCount}") {
          nodes {
            ...on Repository {
              forkCount,
              stargazerCount,
              name
            }
          }}
      }
      }`
}

const Default = () => {
  useEffect(() => {
    void (async function () {
      const response = await graphqlWithAuth(user())
      console.log(response)
    })()
  }, [])

  //   useEffect(() => {

  //     void (async function fetchUsers () {
  //       const { data } = await octokit.search.users({
  //         q: 'n',
  //         per_page: 5,
  //         page: 1
  //       })
  //       console.log(data)
  //       const response = await octokit.rest.users.getByUsername({
  //         username: data['items'][0]['login']
  //       })

  //       console.log(response)
  //     })()
  //   }, [])
  return <div></div>
}

export default Default
