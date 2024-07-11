import { useQuery } from "@apollo/client";
import { useEffect, useMemo, useState } from "react";
import { GET_CONTENT } from "../graphql/queries";
import { NavbarProps } from "../components/Navbar/Navbar";
import { useDebounce } from "../hooks/debounce.util";
import { Content } from "../types/content.types";

export const useHomeUtil = () => {
  const [keywords, setKeywords] = useState("");
  const debouncedKeyword = useDebounce(keywords, 300);

  const { loading, error, data, fetchMore } = useQuery(GET_CONTENT, {
    variables: { keywords: debouncedKeyword },
  });

  const content: Content[] = useMemo(() => {
    return loading ? Array(10).fill({}) : data?.contentCards?.edges;
  }, [data?.contentCards?.edges, loading]);

  const navbarProps: NavbarProps = {
    keyword: keywords,
    setKeyword: setKeywords,
  };

  const loadMore = () => {
    // for handle load more / infinite scroll
    if (data?.contentCards?.pageInfo?.hasNextPage) {
      fetchMore({
        variables: {
          keyword: keywords,
        },
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  return {
    content,
    loading,
    error,
    navbarProps,
  };
};
