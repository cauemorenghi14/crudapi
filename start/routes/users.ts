import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.resource('users', 'UsersController')
        .apiOnly()
        .middleware({
            index: ['auth'],
            store: ['auth'],
            update: ['auth'],
            destroy: ['auth'],
        })
})

Route.group(() => {
    Route.resource('edits', 'EditsController')
        .apiOnly()
}).middleware('auth')