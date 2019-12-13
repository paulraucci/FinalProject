# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


10.times do
    City.create(
        city: Faker::Address.unique.city,
    )
end

seedData = [
    {
        name: Faker::Hipster.words(number: 2),
        location: Faker::Address.unique.street_address,
        rating: Faker::Number.decimal(l_digits: 1, r_digits: 2),
        cuisine: Faker::Restaurant.type,
        city_id: 1,
    },
    {
        name: Faker::Hipster.words(number: 2),
        location: Faker::Address.unique.street_address,
        rating: Faker::Number.decimal(l_digits: 1, r_digits: 2),
        cuisine: Faker::Restaurant.type,
        city_id: 2,
    },
    {
        name: Faker::Hipster.words(number: 2),
        location: Faker::Address.unique.street_address,
        rating: Faker::Number.decimal(l_digits: 1, r_digits: 2),
        cuisine: Faker::Restaurant.type,
        city_id: 3,
    },
    {
        name: Faker::Hipster.words(number: 2),
        location: Faker::Address.unique.street_address,
        rating: Faker::Number.decimal(l_digits: 1, r_digits: 2),
        cuisine: Faker::Restaurant.type,
        city_id: 4,
    },
    {
        name: Faker::Hipster.words(number: 2),
        location: Faker::Address.unique.street_address,
        rating: Faker::Number.decimal(l_digits: 1, r_digits: 2),
        cuisine: Faker::Restaurant.type,
        city_id: 5,
    },
    {
        name: Faker::Hipster.words(number: 2),
        location: Faker::Address.unique.street_address,
        rating: Faker::Number.decimal(l_digits: 1, r_digits: 2),
        cuisine: Faker::Restaurant.type,
        city_id: 6,
    },
    {
        name: Faker::Hipster.words(number: 2),
        location: Faker::Address.unique.street_address,
        rating: Faker::Number.decimal(l_digits: 1, r_digits: 2),
        cuisine: Faker::Restaurant.type,
        city_id: 7,
    },
    {
        name: Faker::Hipster.words(number: 2),
        location: Faker::Address.unique.street_address,
        rating: Faker::Number.decimal(l_digits: 1, r_digits: 2),
        cuisine: Faker::Restaurant.type,
        city_id: 8,
    },
    {
        name: Faker::Hipster.words(number: 2),
        location: Faker::Address.unique.street_address,
        rating: Faker::Number.decimal(l_digits: 1, r_digits: 2),
        cuisine: Faker::Restaurant.type,
        city_id: 9,
    },
    {
        name: Faker::Hipster.words(number: 2),
        location: Faker::Address.unique.street_address,
        rating: Faker::Number.decimal(l_digits: 1, r_digits: 2),
        cuisine: Faker::Restaurant.type,
        city_id: 10,
    }
]

Eatery.create(seedData)
