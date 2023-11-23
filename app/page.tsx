import ArticleCard from './component/ArticleCard'
import * as contentful from 'contentful'
import { BlogEntrySkeleton } from './types/contentful'
import { contentfulClient } from './client/contentful'

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="article-list">
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </main>
  )
}
