import * as firstPost from './blog/testing-at-mpr.mdx'
import * as secondPost from './blog/on-basecamp.mdx'

import * as firstDraft from './ideas/thoughts-on-stray.mdx'
import * as secondDraft from './ideas/an-ode-to-victor-mono.mdx'
import * as thirdDraft from './ideas/swift-ui-for-react-developers.mdx'

import { LoaderFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'

import Posts from '../components/Posts'

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx??$/, ''),
    ...mod.attributes.meta,
  }
}

export const loader: LoaderFunction = () => {
  return {
    posts: [postFromModule(firstPost), postFromModule(secondPost)],
    drafts: [postFromModule(firstDraft), postFromModule(secondDraft), postFromModule(thirdDraft)],
  }
}

export default function Index() {
  const data = useLoaderData()

  return (
    <main className="mx-6 sm:mx-24 lg:mx-36 xl:mx-48 2xl:mx-96">
      <h2 className="font-heading text-3xl italic text-gray-900 dark:text-slate-300 px-2 pb-4">Recent Posts</h2>
      <Posts posts={data.posts} />
      <h2 className="font-heading text-3xl italic text-gray-900 dark:text-slate-300 px-2 pb-2">Drafts <span className="text-lg not-italic text-indigo-500">Because privacy is for cowards <a href="https://www.eff.org">/s</a></span></h2>
      <Posts posts={data.drafts} isDraft={true} />
    </main>
  )
}
