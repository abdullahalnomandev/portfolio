"use client";

import { blogPosts } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import Headline from "../ui/Headline";

const SomeBlogs = () => {
  return (
    <section className='py-18 px-4 sm:px-8 lg:px-12'>
      <Headline title='Some of My Articles' />

      <div className='grid grid-cols-1 gap-8 mt-10'>
        {blogPosts.slice(0, 3).map((post) => (
          <article
            key={post.id}
            data-aos='fade-up'
            data-aos-duration='800'
            className='group flex flex-col md:flex-row w-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 
              rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden'>
            {/* Image */}
            <div className='relative w-full md:w-1/2 h-56 md:h-auto'>
              <Image
                src={post.image}
                alt={post.title}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-105'
                sizes='(max-width: 768px) 100vw, 50vw'
                priority
              />
            </div>

            {/* Content */}
            <div className='w-full md:w-1/2 p-6 flex flex-col justify-between'>
              <div>
                <h2 className='text-2xl font-semibold text-slate-800 dark:text-white font-serif mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                  {post.title}
                </h2>

                <p className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4'>
                  {post.excerpt}
                </p>

                <div className='flex items-center gap-2 text-xs font-medium text-white'>
                  <span className='bg-blue-600 px-2 py-0.5 rounded-full'>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className='bg-slate-600 px-2 py-0.5 rounded-full'>
                    {post.author}
                  </span>
                </div>
              </div>

              <div className='mt-6 pt-4 border-t border-gray-200 dark:border-slate-700'>
                <Link
                  href={post.slug}
                  target='_blank'
                  className='text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1'>
                  Read full article →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className='text-center mt-12'>
        <Link
          href='/blog'
          className='inline-flex items-center gap-2 border border-blue-500 text-blue-600 dark:text-blue-400 
            px-6 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white 
            dark:hover:bg-blue-600 dark:hover:text-white transition-colors duration-300'>
          See More Articles
        </Link>
      </div>
    </section>
  );
};

export default SomeBlogs;
