import NextAuth from "next-auth"
import CredentialProvider from "next-auth/providers/credentials"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: { label: 'Username', placeholder: 'johnthebarbarian' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: (credentials) => {
        if (credentials.username == 'tyler' && credentials.password == 'test') {
          return {
            id: 2,
            name: 'tyler',
            email: 'tyler@tpw.com'
          }
        }
        return null;
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  secret: 'test',
  jwt: {
    secret: 'test',
    encryption: true
  }
}

export default NextAuth(authOptions)