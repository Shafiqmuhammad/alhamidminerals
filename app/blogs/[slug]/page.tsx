import fs, { link } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams(){
    const files = fs.readdirSync(path.join('blogs'))
    const paths = files.map(filename =>({
        slug: filename.replace('.mdx','')
    }))
    return paths
}

function getPost({slug}:{slug:string}){
    const markdownFile = fs.readFileSync(path.join('blogs', slug + '.mdx'),'utf-8')
    const {data: frontMatter, content} =matter(markdownFile)
    return{
        frontMatter,
        slug,
        content
    }
}

export default function Page ({ params}:any){
    const props =getPost (params);
    return(
<section>
        <header className="flex bg-blue/10 pl-20 mb-8">
          <nav className="flex max-w-5xl mx-auto">
            <Link href="/pages/Blog" className="inline-flex items-center px-4 py-2 mr-4 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span>Back to Blog</span>
            </Link>



            <Link href="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.707 2.293a1 1 0 010 1.414L10.707 5l6.293 6.293a1 1 0 01-1.414 1.414L10 6.414l-6.293 6.293a1 1 0 01-1.414-1.414L8.586 5l-6.293-6.293a1 1 0 011.414-1.414L10 3.586l6.293-6.293z" clip-rule="evenodd"></path></svg>
              <span>Home</span>
            </Link>
          </nav>
        </header>


        <article className='max-w-5xl mx-auto prose prose-sm md:prose-base lg:prose-lg '>
            
            <h1 className=" mb-8">{props.frontMatter.title}</h1>

          {/* @ts-ignore */}
        <MDXRemote source={props.content}>

        </MDXRemote>

        </article>
        </section>
    )
}