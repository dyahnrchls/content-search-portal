import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import { GET_CONTENT } from "../graphql/queries";
import { NavbarProps } from "../components/Navbar/Navbar";
import { useDebounce } from "../hooks/debounce.util";
import { Content } from "../types/content.types";

export const useHomeUtil = () => {
  const [keywords, setKeywords] = useState("");
  const debouncedKeyword = useDebounce(keywords, 300);

  const { loading, error, data } = useQuery(GET_CONTENT, {
    variables: { keywords: debouncedKeyword },
  });

  const content: Content[] = useMemo(() => {
    return loading ? Array(10).fill({}) : data?.contentCards?.edges;
  }, [data?.contentCards?.edges, loading]);

  const navbarProps: NavbarProps = {
    keyword: keywords,
    setKeyword: setKeywords,
  };

  return {
    content,
    loading,
    error,
    navbarProps,
  };
};
