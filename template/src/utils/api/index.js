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
}
