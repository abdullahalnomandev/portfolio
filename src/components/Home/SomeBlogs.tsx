"use client";

import { blogPosts } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import Headline from "../ui/Headline";

const SomeBlogs = () => {
  return (
    <section className='py-12'>
      <Headline title='Some of My Article' />

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-6'>
        {blogPosts.slice(0, 3).map((post) => (
          <article
            key={post.id}
            className='group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col hover:scale-105'
            data-aos='flip-left'
            data-aos-duration='1000'>
            {/* Image */}
            <div className='relative h-52 w-full'>
              <Image
                src={post.image}
                alt={post.title}
                fill
                className='object-cover transition-transform duration-300 group-hover:scale-105'
                sizes='(max-width: 768px) 100vw, 33vw'
              />
            </div>

            {/* Content */}
            <div className='p-6 flex flex-col flex-1 justify-between'>
              <div>
                <h2 className='text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors'>
                  {post.title}
                </h2>

                <div className='mt-2 text-sm text-gray-500'>
                  <span className='inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium'>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className='ml-2'>· {post.author}</span>
                </div>

                <p className='mt-4 text-sm text-gray-600 leading-relaxed line-clamp-4'>
                  {post.excerpt}
                </p>
              </div>

              <div className='mt-6'>
                <Link
                  href={post.slug}
                  target='_blank'
                  className='text-blue-600 font-medium text-sm hover:underline transition-colors'>
                  Read full article →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className='text-center mt-8'>
        <Link
          href='/blog'
          className='inline-block border border-blue-500 text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300'>
          See More
        </Link>
      </div>
    </section>
  );
};

export default SomeBlogs;
