import { Context } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'
import createRepository from '~/app/api/repository'

export default (ctx: Context, inject: Inject) => {
  const repositoryWithAxios = createRepository(ctx.$axios)
  const repositories = {
    market_data: repositoryWithAxios('/market_data'),
  }
  inject('repositories', repositories)
}
