import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { SupabaseClient } from "@supabase/supabase-js";
import { product } from "../interface";
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
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
      return [{ productList, isLoading }];
    }
    fetchData(supabase);
  }, []);
  return [{ productList, isError, isLoading }];
}
