// LoanCategoryApi.ts
import { useQuery } from "@tanstack/react-query";
// export const ApiPath = "http://localhost:8000/api/";


export const ApiPath = "http://devfriend.in/admin/api/";
// export const ApiPath = "http://localhost/profin-admin/api/";

const apiUrl = `${ApiPath}loan-category`;

export type LoanCategoryProps = {
  id: number;
  name: string;
  slug: string;
  icon: string;
  icon_url: string;
};

export const defaultHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("authToken")}`,
};

export const fetchLoanCategories = async (): Promise<LoanCategoryProps[]> => {
  const res = await fetch(apiUrl);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data: LoanCategoryProps[] = await res.json();
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
  console.log('  defaultHeaders ', defaultHeaders);
  return useQuery({
    queryKey: [apiUrl + "/" + slug],
    queryFn: () =>
      fetch(apiUrl + "/" + slug, { headers: defaultHeaders, credentials: 'include' }).then((res) => res.json()),
    refetchOnWindowFocus: false,
    enabled: true,
  });
};
