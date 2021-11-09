import { NuxtAxiosInstance } from '@nuxtjs/axios'
export default ($axios: NuxtAxiosInstance) => (resource: String) => ({
  async get() {
    return $axios.$get(`/${resource}`)
  },
})
