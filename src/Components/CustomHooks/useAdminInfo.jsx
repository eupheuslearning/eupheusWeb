import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useLayoutEffect, useState } from "react";

function useAdminInfo() {
  const [info, setInfo] = useState(null);
  useLayoutEffect(() => {
    const getAdminData = async () => {
      const res = await axios.get(
        `http://localhost:4000/user/${Cookies.get("id")}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("admin")}`,
          },
        }
      );

      setInfo(res.data);
    };
    getAdminData();
  }, []);
  return info;
}

export default useAdminInfo;
