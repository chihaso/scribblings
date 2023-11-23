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
    <div className="article mx-auto border rounded w-4/5 max-w-3xl p-5">
      <article>
        <h2 className="text-2xl">{entry.fields.title}</h2>
        <p className="date mt-3">{entry.sys.createdAt}</p>
        <section className="mt-5 text-lg">{documentToReactComponents(entry.fields.body)}</section>
      </article>
    </div>
  )
}
