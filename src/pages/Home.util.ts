import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import { GET_CONTENT } from "../graphql/queries";
import { NavbarProps } from "../components/Navbar/Navbar";

export const useHomeUtil = () => {
  const [keywords, setKeywords] = useState("");
  const { loading, error, data } = useQuery(GET_CONTENT, {
    variables: { keywords },
  });

  const content = useMemo(() => {
    return loading ? Array(10).fill({}) : data?.contentCards?.edges;
  }, [data?.contentCards?.edges, loading]);

  const navbarProps: NavbarProps = {
    keyword: keywords,
    setKeyword: setKeywords,
  };

  return {
    content,
    loading,
    navbarProps,
  };
};