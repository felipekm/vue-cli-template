 /**
 * Módulo para manipular e formatar datas.
 * @module Date
 * @see module:Date
 */
module.exports = {

   /**
   * Retorna o dia da semana (iniciando em 0)
   * @param {object} date - dia (0..6) .
   * @return {string} - dia por extenso.
   */
  'getWeekDay': date => {
    const weekDayTree = {
      0: 'dom',
      1: 'seg',
      2: 'ter',
      3: 'qua',
      4: 'qui',
      5: 'sex',
      6: 'sáb'
    }
    return weekDayTree[new Date(date).getDay()]
  },

   /**
   * Retorna o mês passado por parametro (iniciando em 0)
   * @param {object} month - mes (0..11).
   * @return {string} - mes por extenso.
   */
  'getMonthName': month => {
    const monthNameTree = {
      0: 'Jan',
      1: 'Fev',
      2: 'Mar',
      3: 'Abr',
      4: 'Mai',
      5: 'Jun',
      6: 'Jul',
      7: 'Ago',
      8: 'Set',
      9: 'Out',
      10: 'Nov',
      11: 'Dez'
    }
    return monthNameTree[month]
  },

  /**
   * Controle do formato das datas em que o email foi recebido (ontem, hoje, nesta semana, neste ano ou mais antigo)
   * @param {object} date - Data do email.
   * @return {string} - Data do email formatada.
   */
  'getEmailFormattedDate': date => {
    const emailDate     = new Date(date)
    const todayDate     = new Date()
    const yesterdayDate = new Date()
    const lastSunday    = new Date()

    // Creating a local variable to keeping last date using system date()
    yesterdayDate.setDate(yesterdayDate.getDate() - 1)

    // getting last sunday
    lastSunday.setDate(todayDate.getDate() - todayDate.getDay())

    // oldest
    if (emailDate.getFullYear() !== todayDate.getFullYear())
      return (emailDate.getDate()) + '/' +
              (emailDate.getMonth() < 10 ? '0' + (emailDate.getMonth() + 1) : (emailDate.getMonth() + 1)) + '/' +
               (emailDate.getFullYear().toString().substr(-2))

    // today
    if (emailDate.toDateString() === todayDate.toDateString())
      return emailDate.getHours() + ':' + (emailDate.getMinutes() < 10 ? '0' + emailDate.getMinutes() : emailDate.getMinutes())

    // more than 7 days older
    emailDate.setHours(0, 0, 0, 0)
    lastSunday.setHours(0, 0, 0, 0)
    if (emailDate < lastSunday    &&
        emailDate.toDateString() !== todayDate.toDateString()   &&
        emailDate.toDateString() !== yesterdayDate.toDateString())
      return emailDate.getDate() + ' de ' +
            module.exports.getMonthName(emailDate.getMonth())

    // yesterday
    if (yesterdayDate.toDateString() === emailDate.toDateString())
      return  'ontem'

    // this week
    return module.exports.getWeekDay(emailDate)
  }
}
