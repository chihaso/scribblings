import { contentfulClient } from '@/app/lib/contentfulClient'
import { BlogEntrySkeleton } from '@/app/types/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Node as RichTextNode } from '@contentful/rich-text-types'
import style from './styles.module.css'
import Image from 'next/image'

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
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: RichTextNode) => (
        <Image
          src={`https:${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.description}
        />
      ),
    },
  }
  return (
    <div className={`${style.article} mx-auto border rounded w-4/5 max-w-3xl p-5`}>
      <article>
        <h2 className="text-2xl">{entry.fields.title}</h2>
        <p className="date mt-3">{entry.sys.createdAt}</p>
        <section className="mt-5 text-lg">
          {documentToReactComponents(entry.fields.body, options)}
        </section>
      </article>
    </div>
  )
}
