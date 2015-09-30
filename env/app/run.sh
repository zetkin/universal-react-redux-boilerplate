#!/bin/sh

cd /var/app

exec 2>&1
if [ ! -d node_modules ]
then
    echo "npm install"
    npm install
fi
exec node dist/app/server/main
