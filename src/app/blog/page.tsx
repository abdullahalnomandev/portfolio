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

      <section className=' py-16'>
        <div className='max-w-7xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12 max-w-3xl mx-auto'>
            <h1 className='text-4xl sm:text-5xl font-extrabold text-gray-900'>
              Insights, Tutorials & Engineering Notes
            </h1>
            <p className='text-gray-600 mt-4 text-lg leading-relaxed'>
              I write about modern JavaScript, frontend architecture,
              performance, and personal lessons from real-world software
              development.
            </p>
          </div>

          {/* Blog Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className='group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col'>
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
        </div>
      </section>
    </>
  );
};

export default BlogPage;
