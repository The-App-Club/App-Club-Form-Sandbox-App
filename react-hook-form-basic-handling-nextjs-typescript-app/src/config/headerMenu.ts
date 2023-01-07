export type HeaderMenu = {
  id: number
  name: string
  url: string
  canonicalURL: string | null
}

const headerMenus: HeaderMenu[] = [
  {
    id: 1,
    name: 'Issue',
    url: '/issues',
    canonicalURL: null,
  },
  {
    id: 2,
    name: 'Users',
    url: '/users',
    canonicalURL: null,
  },
  {
    id: 3,
    name: 'Liquors',
    url: '/liquors',
    canonicalURL: null,
  },
]

export { headerMenus }
