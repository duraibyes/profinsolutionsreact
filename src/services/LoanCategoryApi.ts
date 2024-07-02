// LoanCategoryApi.ts
import { useQuery } from "@tanstack/react-query";
import { RootState } from "./store";
import { useSelector } from "react-redux";
// export const ApiPath = "http://localhost/profin-admin/api/";


export const ApiPath = "http://devfriend.in/admin/api/";
// export const ApiPath = "http://localhost/profin-admin/api/";

const apiUrl = `${ApiPath}loan-category`;

export type LoanCategoryProps = {
  id: number;
  name: string;
  slug: string;
  icon: string;
  icon_url: string;
  info?: any;
};

export const defaultHeaders = {
  "Content-Type": "application/json",
};

export const fetchLoanCategory = async (slug: string, token: string): Promise<LoanCategoryProps> => {
  console.log( {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
  const res = await fetch(`${apiUrl}/${slug}?api_token=${token}`, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data: LoanCategoryProps = await res.json();
  return data;
};

export const useLoanCategory = () => {
  return useQuery({
    queryKey: [apiUrl],
    queryFn: () => fetch(apiUrl).then((res) => res.json()),
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
};

export const useGetLoanCategory = (slug: string) => {
  const token = useSelector((state: RootState) => state.auth.token);
  console.log('  token ', token);
  return useQuery({
    queryKey: [apiUrl + "/" + slug],
    queryFn: () => fetchLoanCategory(slug, token || ""),
    refetchOnWindowFocus: false,
    enabled: true,
  });
};
