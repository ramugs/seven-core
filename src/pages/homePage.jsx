import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import "./pages.css";
import BlogCard from "../components/blogCard";
import Loader from "../components/loader";

const HomePage = () => {
  // const API_KEY = "92ebf46bdb464ce1a20beafe8d321570";
  const API_KEY = "7e698c1a4aa1423e8f02efcce14ea5f2";
  const query = "articles";
  const [blogListData, setBlogListData] = useState([]);
  const [blogListCount, setBlogListCount] = useState(30);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const axiosData = {
    method: "GET",
    path: `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${API_KEY}&pageSize=${pageSize}&page=${
      page + 1
    }`,
  };

  const { data, error, loading, fetch } = useAxios(axiosData);

  useEffect(() => {
    fetch();
  }, [page]);

  useEffect(() => {
    if (data?.status == "ok") {
      setBlogListData(data?.articles);
      setBlogListCount(data?.totalResults);
    } else if (error?.data?.status === "error") {
      setBlogListCount(0);
    }
  }, [data, error]);

  console.log(data, error, "sadadas");

  const handelPagination = (value) => {
    if (value === "next") {
      if (page + 1 < blogListCount / pageSize) setPage((prev) => prev + 1);
    } else if (value === "prev") if (page > 0) setPage((prev) => prev - 1);
  };

  const totalRowCount = pageSize * (page + 1);
  const pageCount = `${pageSize * page + 1} - ${
    totalRowCount > blogListCount ? blogListCount : totalRowCount
  } of ${blogListCount}`;
  const nextPage = page + 1 < blogListCount / pageSize;

  return (
    <div className="sm:mx-10 mx-2 relative bg-white">
      <div className="sticky top-0 pt-4 bg-white">
        <span className="text-36 text-darkBlue font-semibold">Blogs</span>
      </div>

      <>
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="pt-10 sm:text-32 text-24 text-darkBlue h-[80vh]">
            {error?.data?.message}
          </div>
        ) : (
          <>
            <div className="sm:mx-4 mx-2">
              {blogListData?.map((item, index) => (
                <div className="" key={index}>
                  <BlogCard item={item} index={index + pageSize * page} />
                </div>
              ))}
            </div>
          </>
        )}
      </>

      <div className="w-full sticky bottom-0 bg-white">
        <div className="flex justify-end gap-4 items-center">
          <div className="flex gap-3">{pageCount}</div>
          <button
            className={`text-darkBlue ${page === 0 && "opacity-50"}`}
            type="button"
            onClick={() => handelPagination("prev")}
            disabled={page === 0}
          >
            <i className="ri-arrow-drop-left-line text-36" />
          </button>
          <button
            className={`text-darkBlue ${!nextPage && "opacity-50"}`}
            type="button"
            onClick={() => handelPagination("next")}
            disabled={!nextPage}
          >
            <i className="ri-arrow-drop-right-line text-36" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
