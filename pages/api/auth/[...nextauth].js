import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import InstagramProvider from "next-auth/providers/instagram";
import FacebookProvider from "next-auth/providers/facebook";
// import EmailProvider from "next-auth/providers/email";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // InstagramProvider({
    //   clientId: process.env.INSTAGRAM_CLIENT_ID,
    //   clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    // }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
});
