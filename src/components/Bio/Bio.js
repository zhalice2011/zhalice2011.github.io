/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../../images/profile-pic.jpeg"
        width={80}
        height={80}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Personal blog by  {` `}
          <a href={`https://github.com/${social?.twitter || ``}`}>
            {author.name}
          </a>
          <br />
          {author?.summary || null}
        </p>
      )}
    </div>
  )
}

export default Bio
