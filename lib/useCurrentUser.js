"use client"
import useSWR from "swr";
import { fetcher } from "./fetcher";

export const useCurrentUser = () => {
    const {data, isLoading, mutate, error} = useSWR('/api/current', fetcher)

    return  {
        data, isLoading, error, mutate
    }
}

