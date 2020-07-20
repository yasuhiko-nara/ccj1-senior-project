// parameter store から取ってきて一時保存したファイルから読み込み、そんなに量もあるわけでもないものだからあえて同期処理で
const fs = require("fs");
let env = fs.readFileSync("/home/ec2-user/rakutabi/env.json");

// 元がjsonなのでparse、必要な情報のみ文字列に加工。keyname=keyの形に
env = JSON.parse(env);
env = env.Parameters.map((element) => {
  return `${element.Name.replace("/RakuTabi/", "")}=${element.Value}`;
});
env = env.join("\n");

// .envに出力
fs.writeFileSync("/home/ec2-user/rakutabi/.env", env);
