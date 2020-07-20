#! /bin/bash
# run in bash


# stop previous server
## move to rakutabi directory
cd /home/ec2-user/rakutabi
## kill all forever process
yarn forever stop node_modules/.bin/next

# remove previous app files and directory
cd /home/ec2-user
sudo rm -rf /home/ec2-user/rakutabi