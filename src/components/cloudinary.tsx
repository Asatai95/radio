// // import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// // import Img from "gatsby-image"

// export const MainImage = () => {
//     const data = useStaticQuery(graphql`
//       query CloudinaryImage {
//         cloudinaryMadia(public_id: {eq: "gatsby-source-cloudinary"}){
//           secure_url
//         }
//       }
//     `);
//     const clImage = data.cloudinaryMedia.secure_url;
//     console.log(clImage)
//     return clImage
// }