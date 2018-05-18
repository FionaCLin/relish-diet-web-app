#!/bin/bash

echo user dev
echo pwd dev

sudo su - postgres -c "psql postgres -U postgres -tAc \"SELECT 1 FROM pg_roles WHERE rolname='dev'\"" |
grep -q 1 || sudo -u postgres createuser -D dev
sudo su - postgres -c "psql postgres -U postgres -c \"ALTER USER dev WITH PASSWORD 'dev';\"" > /dev/null

sudo su - postgres -c "dropdb fresh_fridge -U dev -W"
sudo su - postgres -c "createdb fresh_fridge -O dev"
psql fresh_fridge -f ./schema.sql -U dev -W

