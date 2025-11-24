// @ts-nocheck
import { compileMDX } from 'next-mdx-remote/rsc'
import { readPostFile, getPostSlugs } from '@/app/utils/blogHelpers'

import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import Header from '@/components/Header'
import Main from '@/components/Main'
import CardContainer from '@/components/CardContainer'
import PageContainer from '@/components/PageContainer'
import PostsList from '@/components/PostList'
import TipBox from '@/components/TipBox'

const components = { Footer, Card, Header, Main, CardContainer, PageContainer, PostsList, TipBox }

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((slug) => ({
    slug: slug.replace('.mdx', ''),
  }))
}

export default async function Page({ params }) {
  const markdown = await readPostFile(params.slug)

  if (!markdown) {
    notFound()
  }

  const { content, frontmatter } = await compileMDX({
    source: markdown,
    options: { parseFrontmatter: true },
    components,
  })
  return (
    <div>
      <div>{content}</div>
    </div>
  )
}
