import { type ComponentType, lazy } from 'react';

interface RouteInterface {
  path: string,
  component: ComponentType,
}

export const routes: RouteInterface[] = [
  {
    path: "/auth",
    component: lazy(() => import('../pages/Auth'))
  },
  {
    path: "/home",
    component: lazy(() => import('../pages/Home'))
  },
]