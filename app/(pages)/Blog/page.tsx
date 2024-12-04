import fs, { link } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from './SectionTitle'


const Blog = () => {
    const blogDir = "blogs";
    const files = fs.readdirSync(path.join(blogDir))
    const getBlogs = files.map(filename => {
        const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8")
        const { data: frontMatter } = matter(fileContent);
        return {
            meta: frontMatter,
            slug: filename.replace('.mdx', '')
        }
    })

  return (




    <main className="mx-auto ">

      <section id="blog" className="bg-primary/5 py-6 md:py-6 lg:py-16">
        <div className="container">
          <SectionTitle
            title="Our Latest Blogs"
            paragraph="Explore the Latest Articles in the Minerals Industry."
            center
          />




          <section className="container mx-auto px-4 md:px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {getBlogs.map((blog) => (
                <Link href={`/blogs/${blog.slug}`} passHref key={blog.slug}>
                  <div className="rounded-lg shadow-md overflow-hidden">
                    {blog.meta.blog_image && (
                      <Image
                        width={400}
                        height={200}
                        className="w-full h-48 md:h-60 object-cover"
                        src={blog.meta.blog_image}
                        alt={blog.meta.title}
                      />
                    )}
                    <div className="px-4 py-4">
                      <h3 className="text-lg font-bold mb-2 line-clamp-4">{blog.meta.title}</h3>
                      <p className="text-gray-600 mb-2 line-clamp-5">{blog.meta.description}</p>
                      <p className="text-gray-400 text-sm">{blog.meta.date}</p>
                    </div>
                    <div className="flex items-center justify-between px-4 py-2 border-t border-gray-200">
                      {blog.meta.author_image && (
                        <Image
                          width={50}
                          height={50}
                          className="rounded-full w-8 h-8 object-cover mr-2"
                          src={blog.meta.author_image}
                          alt={blog.meta.author}
                        />
                      )}
                      <div className="text-sm">
                        <p className="font-normal">{blog.meta.author || 'Author Name'}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>





        </div>
      </section>


      {/* <div className="px-4 lg:px-6 py-8 mt-2"> */}
      {/* <section className="container mx-auto px-4 md:px-6 py-8 ">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {getBlogs.map((blog) => (
          <Link href={`/blogs/${blog.slug}`} passHref key={blog.slug}>
            <div className="rounded-lg  shadow-md overflow-hidden">
              {blog.meta.blog_image && (
                <Image width={400} height={200} className="w-60 h-48  mx-auto object-cover" src={blog.meta.blog_image} alt={blog.meta.title} />
              )}
              <div className="px-4 py-4 ">
                <h3 className="text-lg font-bold mb-2 h-16 text-ellipsis overflow-hidden">{blog.meta.title}</h3>
                <p className="text-gray-600 mb-2 h-24 text-ellipsis">{blog.meta.description}</p>
                <p className="text-gray-400 text-sm">{blog.meta.date}</p>
              </div>
              <div className="flex items-center  justify-between px-4 py-2 border-t border-gray-200">
              {blog.meta.author_image && (
                  <Image width={50} height={50} className="rounded-full w-8 h-8 object-cover mr-2" src={blog.meta.author_image} alt={blog.meta.author} />
                )}
                <div className="text-sm">
                <p className="font-normal">{blog.meta.author || 'Author Name'}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section> */}


      {/* </div> */}
          

        </main>

    )
}

export default Blog;