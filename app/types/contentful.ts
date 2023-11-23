import { EntryFieldTypes } from 'contentful'

export type BlogEntrySkeleton = {
  contentTypeId: 'blog'
  fields: {
    title: EntryFieldTypes.Text
    body: EntryFieldTypes.RichText
  }
}
