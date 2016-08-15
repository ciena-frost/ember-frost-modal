import Ember from 'ember'
const {
  getOwner
} = Ember

export default function localComponentLookup(routingService, componentPath) {
  const routePath = routingService.get('currentPath')
  const localModalComponentPath = `${routePath}/components/${componentPath}`
  const componentLookup = getOwner(this).lookup('component-lookup:main')
  const component = componentLookup.componentFor(localModalComponentPath, getOwner(this))
  const layout = componentLookup.layoutFor(localModalComponentPath, getOwner(this))
  if (!!(component || layout)) {
    return localModalComponentPath
  } else {
    return componentPath
  }
}
