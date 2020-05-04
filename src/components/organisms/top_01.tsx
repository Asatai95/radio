
import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
// // import { LunrSearch } from '../molecules/lunrsearch'
import { innertop, bghead, linner, playbt, scrolldown } from "../../styles/shared"

interface HeaderProps {
  readonly title: string
}

export const Section01 : React.FC<HeaderProps> = () => {
    const data = useStaticQuery(graphql`
        query CloudinaryImages {
            allCloudinaryMedia {
                edges {
                    node {
                      secure_url
                    }
                }
            }
        }
    `
    );
    console.log(data)
    const clImage = data.allCloudinaryMedia.edges;
    console.log(clImage)
    return (
      <section css={SectionContent.main} className="section-head section-head-home">
          <div css={innertop} className="inner">
              <div css={bghead} className="bg-head">
                    <div>

                    </div>
              </div>
              <div css={linner.linner01} className="l-inner">
                  <div css={SectionContent.boxcopy} className="box-copy">
                      <p>
                          <a css={playbt.link} className="playbtn js-playbtn-head cursor-react cursor-react-btn" href="https://anchor.fm/pockeawa/episodes/Awamori-in-The-Pocket--1-e7vhpj">
                              <span css={playbt.circle} className="circle">
                                <img css={playbt.img} src={clImage[0].node.secure_url} alt="" />
                              </span>
                              <span css={playbt.text} className="text">Play</span>
                          </a>
                      </p>
                      <h2 className="copy f-light">
                        <img src={clImage[1].node.secure_url} alt="" />
                      </h2>
                  </div>
              </div>
              <ul className="banner-list">
                  <li></li>
              </ul>
              <p css={[scrolldown, SectionContent.scroll]} className="scrolldown hide-sml">
                ScrollDown
              </p>
          </div>
      </section>
    )
};

const SectionContent = {
    main : css`
        @media (max-width: 800px) {
            padding-top : 41px;
        }
        @media (min-width: 801px) {
            position : relative;
        }
    `,
    boxcopy: css`
        @media (min-width: 801px) {
            margin-top: 168px;
        }
    `,
    scroll: css`
        @media (max-width: 1100px) {
            right: -2%;
        }
    `
};