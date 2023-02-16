import { IRouterOption } from 'src/router/interface'
import { SignIn } from './components/sign-in'
import { ForgotPassword } from './components/forgot-password'
import { ResetPassword } from './components/reset-password'
import { EAuthRoutes } from './routes.enum'

export const AuthRoutes: IRouterOption[] = [
  {
    path: '/sign-in',
    component: SignIn,
    name: EAuthRoutes.SIGN_IN,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/sign-in/:id',
    component: ForgotPassword,
    name: EAuthRoutes.FORGOT_PASSWORD,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/forgot-password',
    component: ForgotPassword,
    name: EAuthRoutes.FORGOT_PASSWORD,
    exact: true,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/reset-password',
    component: ResetPassword,
    name: EAuthRoutes.RESET_PASSWORD,
    exact: true,
    meta: {
      requireAuth: false
    }
  }
]
