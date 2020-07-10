#! /bin/bash
# run in bash

# recognize node js
source /home/ec2-user/.bash_profile

# change user app directory
cd /home/ec2-user/
sudo chown -R ec2-user:ec2-user rakutabi

# json操作用にjqインストール
sudo yum install -y jq

#parameter storeからparams 取得して変数envsに入れる　jsonを加工
env=$(aws ssm get-parameters-by-path --path "/RakuTabi/" | jq '.Parameters | . [0] | .Value')

#編集対象定義
envfile=/home/ec2-user/rakutabi/.env

# 書き込み
echo "REACT_APP_googleMapsApiKey=${env}" >> ${envfile}

# move to app directory
cd /home/ec2-user/rakutabi/

# install paclages
npm install -g yarn
yarn 

# stop previous server
yarn forever stop node_modules/.bin/next

# build server
yarn build

# start server 
yarn forever start node_modules/.bin/next start