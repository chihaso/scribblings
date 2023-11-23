import { contentfulClient } from '@/app/client/contentful'
import { BlogEntrySkeleton } from '@/app/types/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

type Props = {
  params: { id: string }
}

export async function generateStaticParams() {
  const entries = await contentfulClient.getEntries<BlogEntrySkeleton>()

  return entries.items.map((entry) => ({
    id: entry.sys.id,
  }))
}

export default async function Article({ params }: Props) {
  const entry = await contentfulClient.getEntry<BlogEntrySkeleton>(params.id)

  return (
    <main className="min-h-screen p-24">
      <article>
        <h2>{entry.fields.title}</h2>
        <p className="date">{entry.sys.createdAt}</p>
        <section>{documentToReactComponents(entry.fields.body)}</section>
      </article>
    </main>
  )
}
