import axios from 'axios'
import boot from '@/utils/api/boot.js'

boot.configureAxios()

export default {
  /**
   * @function {getEmails} REQUEST EXEMPLO
   * @param  {String} mailbox {'entrada'}
   * @param  {Integer} size    {10}
   * @param  {Integer} index   {0}
   * @return {Promise} { retorn uma promise com os emails da caixa escolhida }
   */
  getEmails: (mailbox, size, index) => axios.get(`email/messages/?box=${mailbox}&size=${size}${index ? `&index=${index}` : ''}`),

  /**
   * @function {getFakeEssentialLinks} REQUEST FAKE
   * @return {Promise} { retorn uma promise com os links do vuejs }
   */
  getFakeLinks: () => new Promise((resolve, reject) => resolve([
    { url: 'https://vuejs.org', label: 'Core Docs' },
    { url: 'http://vuejs-templates.github.io/webpack/', label: 'Docs for This Template' },
    { url: 'http://router.vuejs.org/', label: 'vue-router' },
    { url: 'http://vue-loader.vuejs.org/', label: 'vue-loader' },
    { url: 'https://github.com/vuejs/awesome-vue', label: 'awesome-vue' }
  ]))
}
