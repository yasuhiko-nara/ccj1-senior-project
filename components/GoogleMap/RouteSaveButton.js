import axios from "axios";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

export default function () {
  const userLoginFlag = useSelector((state) => state.users.longinFlag);
  const userId = useSelector((state) => state.users.userId);
  //   const userName = useSelector((state) => state.users.userName);

  const saveRoute = useCallback(async () => {
    const res = await axios({
      method: "post",
      url:
        "https://e2uo59wqde.execute-api.ap-northeast-1.amazonaws.com/savedRoot",
      data: {
        userId: userId,
        root: [],
      },
    });
  });

  //   export async function getStaticProps() {
  //     const res = await axios.get(
  //       "https://ala5g0w56m.execute-api.ap-northeast-1.amazonaws.com/Rakutabi_API"
  //     );
  //     const data = JSON.stringify(res.data);
  //     return {
  //       props: {
  //         data,
  //       },
  //     };
  //   }

  return (
    <>
      {userLoginFlag && (
        <Button variant="contained" color="primary" onClick={saveRoute}>
          ルート保存
        </Button>
      )}
    </>
  );
}
