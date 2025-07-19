"use client";
import { blogPosts } from "@/data/blogs";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blog | Abdullah Al Noman</title>
        <meta
          name='description'
          content='Explore tutorials and engineering insights from Abdullah Al Noman. Topics include React, Zustand, Next.js, Tailwind CSS, performance optimization, and modern frontend development.'
        />
        <meta property='og:title' content="Abdullah Al Noman's Blog" />
        <meta
          property='og:description'
          content='Engineering tips, tutorials, and frontend insights shared by Abdullah Al Noman.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://yourdomain.com/blog' />
        <meta
          property='og:image'
          content='https://yourdomain.com/path-to-preview-image.jpg'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content="Abdullah Al Noman's Blog" />
        <meta
          name='twitter:description'
          content='Frontend development insights, tutorials, and real-world JavaScript strategies.'
        />
      </Head>

      <section className='py-16'>
        <div className='max-w-7xl mx-auto'>
          {/* Header */}
          <div
            className='text-center mb-12 max-w-3xl mx-auto'
            data-aos='fade-down'>
            <h1 className='text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-slate-100'>
              Insights, Tutorials & Engineering Notes
            </h1>
            <p className='text-gray-600 dark:text-gray-400 mt-4 text-lg leading-relaxed'>
              I write about modern JavaScript, frontend architecture,
              performance, and personal lessons from real‑world software
              development.
            </p>
          </div>

          {/* Blog Grid */}
          <div className='grid grid-cols-1 gap-8 mt-10'>
            {blogPosts.map((post) => (
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
        </div>
      </section>
    </>
  );
};

export default BlogPage;
