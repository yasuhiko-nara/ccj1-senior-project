#! /bin/bash
ls
cd /home/ec2-user/rakutabi/
# install paclages
npm install -g yarn
yarn 
# build server
yarn build
# start server 
yarn start