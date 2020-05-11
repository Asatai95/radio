import { Link, graphql, useStaticQuery } from 'gatsby';
import { setLightness } from 'polished';
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
// import { IndexQuery } from '../../../types/graphql-types'
import { colors } from '../../../styles/Colors';
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
  console.log("img")
  console.log("foooter")
  console.log(data)
  return (
    <footer className="fixed-bottom" css={[outer, SiteFooter]}>
      <div className="container" css={[inner, SiteFooterContent]}>
        <section className="copyright">
          <Link to="/">あわぽけ</Link>
          {data.site.siteMetadata.title && (
            <Link to="/">
              | ©{data.site.siteMetadata.title}
            </Link>
          )}
        </section>
        {/* <SiteFooterNav>

        </SiteFooterNav> */}
      </div>
    </footer>
  );
};

const SiteFooter = css`
  position: relative;
  padding-top: 20px;
  padding-bottom: 60px;
  color: #fff;
  background: ${setLightness('0.0015', colors.white)};
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

const SiteFooterNav = styled.nav`
  display: flex;
  a {
    position: relative;
    margin-left: 20px;
  }
  a:before {
    content: '';
    position: absolute;
    top: 11px;
    left: -11px;
    display: block;
    width: 2px;
    height: 2px;
    background: #fff;
    border-radius: 100%;
  }
  a:first-of-type:before {
    display: none;
  }
  @media (max-width: 650px) {
    a:first-of-type {
      margin-left: 0;
    }
  }
`;
