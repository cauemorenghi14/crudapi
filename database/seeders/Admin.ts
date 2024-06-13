import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'


export default class extends BaseSeeder {
  public async run () {

    await User.createMany([
      {
        username: 'cauemorenghi',
        email: 'cauemorenghi@gmail.com',
        password: '1234',
        perfil: 1,
        status: true
      }
    ])
  }
}
