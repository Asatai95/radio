import { graphql } from "gatsby"

export const SiteMetadataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        version
        tag
        description
        siteUrl
        contactEmail
        royEmail
        social {
          facebook
          instagram
          twitter
          linkedin
          reddit
          github
          slackInvite
        }
      }
    }
  }
`;