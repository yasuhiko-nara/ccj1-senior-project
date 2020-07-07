#! /bin/bash
source /home/ec2-user/.bash_profile
ls
cd /home/ec2-user/rakutabi/
# install paclages
npm install -g yarn
yarn 
# build server
yarn build
# start server 
yarn start