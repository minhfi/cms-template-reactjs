import { BehaviorSubject } from 'rxjs'
import { IUserModel } from 'src/interfaces/models/user.model'
import { noticesCollection } from './firebase'

export interface IFirebaseNotification {
  countLikes?: number
}

export const NotificationService = new (
  class _NotificationService {
    readonly firebaseNotification$ = new BehaviorSubject<IFirebaseNotification>({})

    private userId: IUserModel['id']
    private unsubscribe() {}

    bind(userId: IUserModel['id']) {
      if (this.userId === userId) {
        return this.unbind
      }

      this.userId = userId
      this.unsubscribe = noticesCollection
        .doc(String(userId))
        .onSnapshot({ includeMetadataChanges: true }, snapshot => {
          const data = (snapshot.data() as IFirebaseNotification) || {}
          this.firebaseNotification$.next(
            Object.fromEntries(
              Object.entries(data).map(
                ([key, value]) => ([
                  key,
                  Math.max(0, value || 0)
                ])
              )
            )
          )
        })

      return this.unbind
    }

    unbind() {
      this.unsubscribe()
      this.userId = undefined

      setTimeout(() => {
        this.firebaseNotification$.next({})
      }, 100)
    }
  }
)()
