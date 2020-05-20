import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { outer, inner } from '../../../styles/Shared';

interface FooterProps {
  className: string;
}

interface FooterData {
  site: {
    siteMetadata: {
      title: string;
    },
  };
}

export const Footer: React.FC<FooterProps> = () => {

  const data: FooterData = useStaticQuery(graphql`
    query indexDivQueryAndCloudinaryImages {
      allCloudinaryMedia {
        edges {
            node {
              secure_url
            }
        }
      }
      site {
        siteMetadata {
          title
        }
      }

    }
  `);

  return (
    <footer className="fixed-bottom" css={[outer, SiteFooter]}>
      <div className="container" css={[inner, SiteFooterContent]}>
        <SiteFooterSection className="copyright">
          <a href="/">
            <img css={footerimg} id="footerLogo" src={data.allCloudinaryMedia.edges[4].node.secure_url} alt="" className="imglogo"/>
          </a>
          {data.allCloudinaryMedia.edges[1].node.secure_url && (
            <a href="/">
              <img src={data.allCloudinaryMedia.edges[2].node.secure_url} alt="" className="copyright"/>
            </a>
          )}
        </SiteFooterSection>
      </div>
    </footer>
  );
};

const footerimg = css`
  transition: .8s;
`;

const SiteFooter = css`
  position: relative;
  padding-top: 20px;
  padding-bottom: 60px;
  color: #fff;
  background: rgb(32,166,242,.6);
`;

const SiteFooterContent = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.3rem;
  a {
    color: rgba(255, 255, 255, 0.7);
  }
  a:hover {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const SiteFooterSection = styled.section`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  img {
    margin: 0;
  }
  img.imglogo {
    width: 130px ;
  }
  img.copyright {
    width: 450px;
  }
`;
