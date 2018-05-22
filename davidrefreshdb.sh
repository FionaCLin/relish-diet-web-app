dropdb fresh_fridge_dev -U dev -W
createdb fresh_fridge_dev -U dev
dropdb fresh_fridge_test -U dev -W
createdb fresh_fridge_test -U dev
psql fresh_fridge_dev -f ./schema.sql -U dev -W
