#! /bin/bash
# run in bash

# recognize other programs
source /home/ec2-user/.bash_profile

# yum update
sudo yum update

# install code deploy agent
## stop previous codedeploy-agent
sudo service codedeploy-agetnt stop
## prepare for code deploy agent install
sudo yum install ruby
sudo yum install wget
cd /home/ec2-user
## codedeploy agent download
wget https://aws-codedeploy-ap-northeast-1.s3.amazonaws.com/latest/install
chmod +x ./install
## install codedeploy agent 
sudo ./install auto
## 実行
sudo service codedeploy-agent start
sudo service codedeploy-agent status

# node install
## nodeパッケージマネージャー(nvm)インストール
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash
## nvm有効化
. ~/.nvm/nvm.sh
##  nvmからnodeインストール
nvm install node 
node -v

# nginx setup
## stop previoust nginx server
sudo service nginx stop
sudo service nginx status

## install nginx
sudo amazon-linux-extras install -y nginx1.12
