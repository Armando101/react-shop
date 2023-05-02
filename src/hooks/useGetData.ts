import { useEffect, useState } from "react";
import axios from "axios";

export const useGetData = <T>(API: string): [T, boolean] => {
  const [data, setData] = useState<T>([] as T);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = (await axios<T>(API)).data;
      setData(response);
      setLoading(false);
    };
    fetchData();
  }, []);

  return [data, loading];
};
