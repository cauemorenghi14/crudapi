import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {

    const uniqueKey = 'email'

    await User.updateOrCreateMany(uniqueKey, [
      {
        username: 'claudiamorenghi',
        email: 'claudiamorenghi@gmail.com',
        password: '1234',
        perfil: 0,
        status: true,
      },
      {
        username: 'oswaldomorenghi',
        email: 'oswaldomorenghi@gmail.com',
        password: '1234',
        perfil: 0,
        status: true,
      }
    ])
  }
}
