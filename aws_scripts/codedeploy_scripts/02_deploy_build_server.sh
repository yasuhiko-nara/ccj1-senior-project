#! /bin/bash
# run in bash

# recognize node js
source /home/ec2-user/.bash_profile

# change directory permission to ec2-user from root
cd /home/ec2-user
sudo chown -R ec2-user:ec2-user rakutabi
cd /home/ec2-user/rakutabi

# setup environment variables
## parameter storeからparams 取得して変数envに入れる
env=$(aws ssm get-parameters-by-path --path "/RakuTabi/")
## 編集対象定義
envfile=/home/ec2-user/rakutabi/env.json
## 一時編集用jsonに書き込み
echo ${env} >> ${envfile}

## js で編集
### 編集用スクリプト実行
node /home/ec2-user/rakutabi/aws_scripts/codedeploy_scripts/03_setup_env.js
###　一時ファイル削除
sudo rm -f /home/ec2-user/rakutabi/env.json


# start nginx server as reverse proxy
## stop nginx server
sudo service nginx stop
## enable to overwrite nginx directory
sudo chown -R ec2-user:ec2-user /etc/nginx
## remove previous config file
sudo rm -f /etc/nginx/conf.d/nginx.conf
## copy nginx config file to target directory
sudo cp /home/ec2-user/rakutabi/aws_scripts/nginx_settings/nginx.conf /etc/nginx/conf.d
## restart nginx server
sudo service nginx start
## enrecognize config file to nginx
sudo service nginx reload

# install node modules and build, start nextjs server
## move to app directory
cd /home/ec2-user/rakutabi
## install paclages
npm install -g yarn
yarn
## stop previous server
yarn forever stop node_modules/.bin/next
## build server エラー出るが何故か複数回ビルドすると治るので実行
yarn build
yarn build
yarn build
yarn build
## start server
# yarn forever start node_modules/.bin/next star
yarn forever start -c "yarn start" ./