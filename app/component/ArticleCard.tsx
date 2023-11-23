import Link from 'next/link'

type Props = {
  id: string
  title: string
  date: string
}

export default function ArticleCard({ id, title, date }: Props) {
  return (
    <Link className="article" href={`/articles/${id}`}>
      <h2>{title}</h2>
      <p className="date">{date}</p>
    </Link>
  )
}
