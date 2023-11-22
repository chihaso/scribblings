import ArticleCard from './component/ArticleCard'

type Article = {
  id: number
  title: string
  date: string
  body: string
}

export default function Home() {
  const articles: Article[] = [
    { id: 1, title: 'Article Title', date: Date(), body: 'This is the body of the article.' },
  ]

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
