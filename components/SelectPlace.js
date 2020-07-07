import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const SelectPlace = () => {
  const array = [
    "北海道",
    "岩手県",
    "青森県",
    "秋田県",
    "宮城県",
    "福島県",
    "山形県",
    "栃木県",
    "茨城県",
    "埼玉県",
    "群馬県",
    "東京都",
    "千葉県",
    "新潟県",
    "神奈川県",
    "石川県",
    "富山県",
    "山梨県",
    "福井県",
    "岐阜県",
    "長野県",
    "愛知県",
    "静岡県",
    "滋賀県",
    "三重県",
    "大阪府",
    "京都府",
    "奈良県",
    "兵庫県",
    "鳥取県",
    "和歌山県",
    "岡山県",
    "島根県",
    "山口県",
    "広島県",
    "香川県",
    "徳島県",
    "高知県",
    "愛媛県",
    "佐賀県",
    "福岡県",
    "熊本県",
    "長崎県",
    "宮崎県",
    "大分県",
    "沖縄県",
    "鹿児島",
  ].map((str) => (
    <FormControlLabel
      value={str}
      control={<Checkbox color="primary" />}
      label={str}
      labelPlacement="start"
    />
  ));
  return <div>{array}</div>;
};

export default SelectPlace;
