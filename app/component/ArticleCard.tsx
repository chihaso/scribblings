type Props = {
  title: string
  date: string
  body: string
}

export default function ArticleCard({ title, date, body }: Props) {
  return (
    <div className="article">
      <h2>{title}</h2>
      <p className="date">{date}</p>
      <p className="summary">{body}</p>
    </div>
  )
}
