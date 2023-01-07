type Route = {
  pathname: string
  headerMenuName: string
}

const routes = [
  {
    pathname: '/',
    headerMenuName: 'Home',
  },
  {
    pathname: '/issues',
    headerMenuName: 'Issue',
  },
  {
    pathname: '/users',
    headerMenuName: 'Users',
  },
  {
    pathname: '/liquors',
    headerMenuName: 'Liquors',
  },
]

const matchedActivePage = (currentPathname: string): Route | undefined => {
  return routes.find((route: Route) => {
    return (
      route.pathname !== '/' && currentPathname.indexOf(route.pathname) !== -1
    )
  })
}

export { routes, matchedActivePage }
