import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import Layout from "../components/Layout";
import bgimage from "../assests/689-800x500.jpg";

export default function Homepage() {
  const categoryid = "technology";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getArticles() {
      setLoading(true);
      try{
        const response = await axios.get(`https://mockend.com/pavanmg007/react-blog/posts?limit=10`);
        if (response.status === 200) {
          setData(response.data);
          // setData(response.data);
          setLoading(false);
        } else if (response.status === 500) {
          setLoading(false);
        } else {
          console.log("API error");
          setLoading(true);
        }
      }catch(e){
        
      }
      
    }
    getArticles();
  }, [categoryid]);

  return (
    <Layout>
      <section className="container mx-auto md:flex md:mt-14">
        <article
          className="md:w-4/6 rounded-b-xl md:rounded-md pt-32 md:mx-5"
          style={{ background: `url(${bgimage})`, backgroundSize: "cover" }}
        >
          <h1 className="text-white text-center  py-32 text-2xl font-mont font-medium">
            This is article title here
          </h1>
        </article>
        <div className="hidden md:block md:w-2/6">
          <article className="w-full rounded-lg" style={{ background: `url(${bgimage})` }}>
            <h1 className="text-white text-center  py-32 text-2xl font-mont font-medium">
              This is article title here
            </h1>
          </article>
          <article className="w-full rounded-lg md:mt-5" style={{ background: `url(${bgimage})` }}>
            <h1 className="text-white text-center  py-32 text-2xl font-mont font-medium">
              This is article title here
            </h1>
          </article>
        </div>
      </section>

      <div className="container md:mx-auto md:mt-10 mb-10 md:mb-10">
        <main className="container px-4">
          <div>
            <h1 className="font-mont font-medium text-2xl md:text-3xl mt-10 pb-4 border-orange-600 border-b-2 inline-block">
              The Latest
            </h1>
          </div>

          {loading && (
            <div className="flex px-5 w-min mx-auto py-20 md:py-40">
              <svg
                className="animate-spin w-10 inline-block mr-5 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <p className="inline-block text-3xl">Loading...</p>
            </div>
          )}
          <div className="md:flex md:w-full md:justify-between md:gap-10">
            {!loading &&
              data.slice(0, 3).map((e) => {
                return (
                  <article className="flex md:flex-col py-5" key={e.id + Math.random()}>
                    <div className="flex w-4/5 md:w-full">
                      <img src={e.cover} className="" alt="" loading="lazy" />
                    </div>
                    <div className="ml-5 md:ml-0 md:flex md:flex-col md:justify-between p-5">
                      <h1 className="font-mont font-medium text-xl md:text-2xl lg:text-3xl md:w-full">
                        <NavLink
                          state={{
                            title: e.title,
                            cover: e.cover,
                            content: e.body,
                            likes: e.likes,
                            date: e.createdAt,
                            category: e.category,
                            author: e.author,
                            data:data,
                          }}
                          to={`/article/${e.id}`}
                        >
                          {e.title}
                        </NavLink>
                      </h1>
                      <p className="pt-2 font-mont font-medium text-slate-400 md:text-sm md:w-3/4 lg:hidden">
                        {e.body.substring(0, 50)}
                      </p>
                      <p className="hidden pt-2 font-mont font-medium text-slate-400 lg:text-sm lg:w-2/3 lg:block">
                        {e.body.substring(0, 150)}
                      </p>
                      <p className="pt-2 font-mont font-medium text-slate-300 md:w-3/4">
                        <span className="text-slate-800 md:pr-3">{e.category}</span> /{" "}
                        <span className="md:pl-3">
                          <Moment format="D MMM YYYY">{e.createdAt}</Moment>
                        </span>
                      </p>
                    </div>
                  </article>
                );
              })}
          </div>
        </main>
      </div>

      <div className="md:flex container md:mx-auto md:mt-10 mb-10 md:mb-40">
        <main className="container px-4">
          <h1 className="font-mont font-medium text-2xl md:text-3xl mt-10 md:mt-0 pb-4 border-orange-600 border-b-2 inline-block">
            Latest Articles
          </h1>

          {loading && (
            <div className="flex px-5 w-min mx-auto py-20 md:py-40">
              <svg
                className="animate-spin w-10 inline-block mr-5 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <p className="inline-block text-3xl">Loading...</p>
            </div>
          )}

          {!loading &&
            data.slice(0, 4).map((e) => {
              return (
                <article className="flex border-b py-10" key={e.id + Math.random()}>
                  <div className="flex w-4/5 md:w-1/3">
                    <img src={e.cover} className="md:max-w-xs" alt="" loading="lazy" />
                  </div>
                  <div className="ml-5 md:flex md:flex-col md:justify-between">
                    <h1 className="font-mont font-medium text-xl md:text-2xl lg:text-3xl md:w-2/3">
                      <NavLink
                        state={{
                          title: e.title,
                          cover: e.cover,
                          content: e.body,
                          likes: e.likes,
                          date: e.createdAt,
                          category: e.category,
                          author: e.author,
                          data:data,
                        }}
                        to={`/article/${e.id}`}
                      >
                        {e.title}
                      </NavLink>
                    </h1>
                    <p className="pt-2 font-mont font-medium text-slate-400 md:w-3/4 lg:hidden">
                      {e.body.substring(0, 50)}
                    </p>
                    <p className="hidden pt-2 font-mont font-medium text-slate-400 lg:w-2/3 lg:text-xl lg:block">
                      {e.body.substring(0, 50)}
                    </p>
                    <p className="pt-2 font-mont font-medium text-slate-300">
                      <span className="text-slate-800 md:pr-3">{e.category}</span> /{" "}
                      <span className="md:pl-3">
                        <Moment format="D MMM YYYY">{e.createdAt}</Moment>
                      </span>
                    </p>
                  </div>
                </article>
              );
            })}
        </main>
        <aside className="container px-4 md:w-1/3">
          <div className="hidden md:flex w-full border border-black items-center justify-center h-1/4">
            <h1 className="text-2xl">Advertisment</h1>
          </div>
          <h1 className="font-mont font-medium text-2xl md:text-3xl mt-10 pb-4 border-orange-600 border-b-2 inline-block">
            Top Posts
          </h1>
          {loading && (
            <div className="flex px-5 w-min mx-auto py-20 md:py-40">
              <svg
                className="animate-spin w-8 inline-block mr-5 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <p className="inline-block text-3xl">Loading...</p>
            </div>
          )}
          {!loading &&
            data.slice(0, 3).map((e) => {
              return (
                <article className="flex border-b py-10" key={e.id}>
                  <div className="flex w-2/3">
                    <img src={e.cover} alt="" />
                  </div>
                  <div className="ml-5">
                    <h1 className="font-mont font-medium text-xl">
                      <NavLink
                        state={{
                          title: e.title,
                          cover: e.cover,
                          content: e.body,
                          likes: e.likes,
                          date: e.createdAt,
                          category: e.category,
                          author: e.author,
                          data:data,
                        }}
                        to={`/article/${e.id}`}
                      >
                        {e.title}
                      </NavLink>
                    </h1>
                    <p className="pt-2 font-mont font-medium text-slate-300">
                      <span className="text-slate-800">{e.category}</span> /{" "}
                      <span>
                        <Moment format="D MMM YYYY">{e.createdAt}</Moment>
                      </span>
                    </p>
                  </div>
                </article>
              );
            })}
          <div className="md:hidden w-full border border-black flex items-center justify-center h-96">
            <h1 className="text-2xl">Advertisment</h1>
          </div>
        </aside>
      </div>
    </Layout>
  );
}
