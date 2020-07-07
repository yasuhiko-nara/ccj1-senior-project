#! /bin/bash
# recognize node js
source /home/ec2-user/.bash_profile

# change user 
cd /home/ec2-user/
sudo chown -R ec2-user:ec2-user rakutabi

# move to app directory
cd /home/ec2-user/rakutabi/

# install paclages
npm install -g yarn
yarn 

# build server
yarn build

# start server 
# yarn start