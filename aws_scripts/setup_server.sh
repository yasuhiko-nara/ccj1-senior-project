#! /bin/bash
source /home/ec2-user/.bash_profile

cd /home/ec2-user/
sudo chown ec2-user:ec2-user rakutabi
cd /home/ec2-user/rakutabi/
# install paclages
npm install -g yarn
yarn 
# build server
# yarn build
# start server 
# yarn start