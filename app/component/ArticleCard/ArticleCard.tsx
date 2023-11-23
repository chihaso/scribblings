import Link from 'next/link'
import styles from './styles.module.css'

type Props = {
  id: string
  title: string
  date: string
}

export default function ArticleCard({ id, title, date }: Props) {
  return (
    <li className={`${styles.article_card} m-12 border rounded`}>
      <Link href={`/articles/${id}`}>
        <div className="p-3">
          <h2 className="text-2xl">{title}</h2>
          <p className="date">{date}</p>
        </div>
      </Link>
    </li>
  )
}
