import { useEffect, useState } from "react";
import { product } from "../pages/Home/Components/interface";
import { supabase } from "../supabaseClient";
import { SupabaseClient } from "@supabase/supabase-js";
export default function useFetchData() {
  const [productList, setProductList] = useState<product[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData(supabase: SupabaseClient) {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        setIsError(true);
        setIsLoading(false);
        return [{ isError, isLoading }];
      }
      setProductList(data);
      setIsLoading(false);
      return [{ productList, isLoading }];
    }
    fetchData(supabase);
  }, []);
  return [{ productList, isError, isLoading }];
}
