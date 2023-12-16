import { GetServerSidePropsContext } from 'next'
import {NextPageWithLayout} from '../utils/NextPageWithLayout'
import { guestOnlyRedirectGetSSP } from '../utils/guestOnlyRedirectSSP'
import { Logger } from 'app/utils/logger'


const Page: NextPageWithLayout = () => {
  return( 
    <>
      <h1>Reset Password</h1>
    </>
    )
}

Page.getLayout = function getLayout(page) {
  return (
    <>
      {page}
    </>
  )
}

 const isUserAuthenticated = async (ctx: GetServerSidePropsContext) => {
   try {
    //TODO: Move this to a
    //  const token = ctx.req.cookies['your-auth-token']
    //  await verifyIdToken(token)
    
     await setTimeout(()=>{
      Logger.debug(" 2 seconds later - return true")
     }, 2000)
     throw new Error("Error")
     return true
   } catch (error) {
     return false
   }
 }


export const getServerSideProps = guestOnlyRedirectGetSSP(
  isUserAuthenticated,
  async (ctx) => {
    // Your additional server-side logic here
    Logger.debug("User Authenticated")
    return { props: {} }
  }
)

export default Page;