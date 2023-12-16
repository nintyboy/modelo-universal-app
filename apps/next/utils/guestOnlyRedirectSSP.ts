import { GetServerSideProps, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'

/**
 * User protected getServerSideProps - pass your own function as the only arg.
 * @param getServerSideProps - The original getServerSideProps function for additional data fetching.
 * @param isUserAuthenticated - A function that checks if the user is authenticated.
 * Example Function: 
 * 
 const isUserAuthenticated = async (ctx: GetServerSidePropsContext) => {
  try {
    const token = ctx.req.cookies['your-auth-token'];
    await verifyIdToken(token);
    return true;
  } catch (error) {
    return false;
  }
};

export const getServerSideProps = guestOnlyGetSSP(
  async (ctx) => {
    // Your additional server-side logic here
    return { props: {} };
  },
  isUserAuthenticated
);
 */

// TODO: Might nees to add a ProtectedRoute component to redirect to login page if not authenticated but the AuthGuard component should handle that.

export function guestOnlyRedirectGetSSP<
  Props extends { [key: string]: any } = { [key: string]: any },
  Params extends ParsedUrlQuery = ParsedUrlQuery,
  Preview extends PreviewData = PreviewData
>(
  isUserAuthenticated: (
    ctx: Parameters<GetServerSideProps<Props, Params, Preview>>[0]
  ) => Promise<boolean>,
  getServerSideProps?: GetServerSideProps<Props, Params, Preview>
): GetServerSideProps<Props, Params, Preview> {
  return async (ctx) => {
    const authenticated = await isUserAuthenticated(ctx)

    if (authenticated) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    if (getServerSideProps) {
      return getServerSideProps(ctx)
    }

    return {
      props: {} as Props,
    }
  }
}
