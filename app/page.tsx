import ArticleCard from './component/ArticleCard/ArticleCard'
import * as contentful from 'contentful'
import { BlogEntrySkeleton } from './types/contentful'
import { contentfulClient } from './lib/contentfulClient'

type Article = {
  id: string
  title: string
  date: string
}

export default async function Home() {
  function perseEntries(
    entires: contentful.EntryCollection<BlogEntrySkeleton, undefined, string>,
  ): Article[] {
    return entires.items.map((entry) => ({
      id: entry.sys.id,
      title: entry.fields.title,
      date: entry.sys.createdAt,
    }))
  }

  const articles = perseEntries(await contentfulClient.getEntries<BlogEntrySkeleton>())

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <ul className="article-list w-4/5 max-w-3xl">
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </ul>
    </div>
  )
}
