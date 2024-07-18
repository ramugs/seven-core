import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Loader from "../components/loader";
import { useNavigate, useParams } from "react-router-dom";
import DefaultImage from "../assests/images/defaultImage.jpg";
import moment from "moment";

const BlogPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);
  //   const API_KEY = "92ebf46bdb464ce1a20beafe8d321570";
  const API_KEY = "7e698c1a4aa1423e8f02efcce14ea5f2";
  const query = "articles";
  const [blogListData, setBlogListData] = useState({});
  const [blogListCount, setBlogListCount] = useState(10);
  const [page, setPage] = useState(Number(params?.id ?? 0));
  const [pageSize, setPageSize] = useState(1);
  const axiosData = {
    method: "GET",
    path: `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${API_KEY}&pageSize=${pageSize}&page=${page}`,
  };

  const { data, error, loading, fetch } = useAxios(axiosData);

  useEffect(() => {
    fetch();
    if (params?.id) {
      setPage(Number(params?.id));
    }
  }, [page]);

  useEffect(() => {
    if (data?.status == "ok") {
      setBlogListData(data?.articles?.[0]);
      setBlogListCount(data?.totalResults);
    } else if (error?.data?.status === "error") {
      setBlogListCount(0);
    }
  }, [data, error]);

  const handelPagination = (value) => {
    if (value === "next") {
      if (page < blogListCount) {
        navigate(`/${page + 1}`);
        setPage((prev) => prev + 1);
      }
    } else if (value === "prev")
      if (page > 1) {
        navigate(`/${page - 1}`);
        setPage((prev) => prev - 1);
      }
  };

  return (
    <div className="sm:mx-10 mx-2 relative bg-white">
      <div className="sticky top-0 pt-4 bg-white flex items-center">
        <button
          className={`text-darkBlue`}
          type="button"
          onClick={() => navigate("/")}
        >
          <i className="ri-arrow-drop-left-line text-36" />
        </button>
        <div>
          <span className="sm:text-32 text-24 text-darkBlue font-semibold">
            Blog by {blogListData?.source?.name}
          </span>
        </div>
      </div>

      <>
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="pt-10 sm:text-32 text-24 text-darkBlue h-[80vh]">
            {error?.data?.message}
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <div className="sm:block hidden sticky top-[50%]">
              <button
                className={`text-darkBlue ${page === 1 && "opacity-50"}`}
                type="button"
                onClick={() => handelPagination("prev")}
                disabled={page === 1}
              >
                <i className="ri-arrow-drop-left-line text-36" />
              </button>
            </div>
            <div className="sm:mx-4 mx-2 w-full">
              <div className="flex justify-center">
                <div className="sm:w-[50vw]">
                  <img
                    className="rounded-xl shadow-md"
                    src={
                      blogListData?.urlToImage
                        ? blogListData?.urlToImage
                        : DefaultImage
                    }
                  />
                  <div className="py-4">
                    <span className="text-darkGrey text-16">By </span>{" "}
                    <span className="text-darkBlue text-16 font-bold">
                      {blogListData?.author}
                    </span>
                    <span className="text-darkGrey text-16">
                      {" "}
                      Published at{" "}
                    </span>{" "}
                    <span className="text-purple text-16 font-bold">
                      {moment(blogListData?.publishedAt).format("d MMM yyyy")}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <span className="sm:text-32 text-26 font-semibold text-darkBlue">
                  {blogListData?.title}
                </span>
              </div>
              <div className="py-3">
                <span className="text-darkGrey sm:text-24 text-20">
                  {blogListData?.description}
                </span>
              </div>
              <div className="pb-5">
                <span className="text-darkBlue sm:text-20 text-18">
                  {blogListData?.content}
                </span>
              </div>

              {blogListData?.url && (
                <div className="pb-5">
                  <a href={blogListData?.url} target="_blank">
                    <span className="text-white bg-blue2 text-16 font-bold px-2 py-1 rounded-md">
                      Visit website
                    </span>
                  </a>
                </div>
              )}
            </div>
            <div className="sm:block hidden sticky top-[50%]">
              <button
                className={`text-darkBlue ${
                  page === blogListCount && "opacity-50"
                }`}
                type="button"
                onClick={() => handelPagination("next")}
                disabled={page === blogListCount}
              >
                <i className="ri-arrow-drop-right-line text-36" />
              </button>
            </div>
          </div>
        )}
      </>

      <div className="sm:hidden w-full sticky bottom-0 bg-white">
        <div className="flex justify-end gap-4 items-center">
          <button
            className={`text-darkBlue ${page === 1 && "opacity-50"}`}
            type="button"
            onClick={() => handelPagination("prev")}
            disabled={page === 1}
          >
            <i className="ri-arrow-drop-left-line text-36" />
          </button>
          <button
            className={`text-darkBlue ${
              page === blogListCount && "opacity-50"
            }`}
            type="button"
            onClick={() => handelPagination("next")}
            disabled={page === blogListCount}
          >
            <i className="ri-arrow-drop-right-line text-36" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
