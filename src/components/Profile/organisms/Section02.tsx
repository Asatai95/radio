
import React from 'react'
import { css } from '@emotion/core'
// import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled';

export const Section02 =  () => {

    return (
        <section className="section-head section-head-home">
            <div className="user_info">
                <div css={SectionContent.box_body} className="box_info">
                    <div css={SectionContent.body}>
                        <h2 css={SectionContent.h2}>パーソナリティ紹介</h2>
                        <div css={SectionContent.back_screen}></div>
                        <div css={SectionContent.profile_top} className="profile">
                            <img css={SectionContent.img} src="https://res.cloudinary.com/hchyaihwv/image/upload/v1572704906/iob6zfw5ipv0sffihf9s.jpg" alt=""/>
                            <div>
                                <span css={SectionContent.span}>Asuka</span>
                                <p css={SectionContent.text}>
                                    Travel Concierge / Podcaster / Blogger / Freelancer
                                </p>
                                <div css={SectionContent.something} className="something">
                                    <div css={SectionContent.something} className="something">
                                        <p css={SectionContent.text}>

                                            県産品娘、あーすーです！トラベルコンシェルジュとして、主に地元沖縄の案内やオススメを紹介しています！沖縄で開催されるイベントに参加したりしてるので、その事についてもお話していきます！よろしくお願いしまーす！

                                        </p>
                                    </div>
                                    <SectionSns>
                                        <a css={SectionContent.twitter} href="https://twitter.com/a_su_awamori" className="twitter">
                                            Twitter
                                        </a>
                                        /
                                        <a css={SectionContent.instagram} href="https://www.instagram.com/asukamiyazato" className="instagram">
                                            Instagram
                                        </a>
                                        /
                                        <a css={SectionContent.facebook} href="https://www.facebook.com/asuka.miyazato.54" className="facebook">
                                            Facebook
                                        </a>
                                    </SectionSns>
                                </div>
                            </div>
                        </div>
                        <div css={SectionContent.block_bottom}>
                            <div css={SectionContent.profile} className="profile">
                                <img css={SectionContent.img} src="https://res.cloudinary.com/hchyaihwv/image/upload/v1572704897/sbyavoe1ulg7vbjbkvkr.jpg" alt=""/>
                                <div>
                                    <span css={SectionContent.span}>Kou</span>
                                    <p css={SectionContent.text}>
                                        Apprentice Frontend Engineer / Podcaster / Blogger / Freelancer
                                    </p>
                                    <div css={SectionContent.something} className="something">
                                        <div css={SectionContent.something} className="something">
                                            <p css={SectionContent.text}>

                                                沖縄生まれ沖縄育ちのフロントエンジニアです。アメリカと日本のハーフ、現在は社会人一年目です。愛知に出稼ぎに行ったり、オーストラリアに一年滞在したり、たまにラジオでペチャクチャしております。ラジオでは主に沖縄のグルメや海外生活のことを仲間と共有していきますので興味があれば、ぜひ気軽にコメントよろしくお願いします！

                                            </p>
                                        </div>
                                        <SectionSns>
                                            <a css={SectionContent.twitter} href="https://twitter.com/AwamoriKou" className="twitter">
                                                Twitter
                                            </a>
                                            /
                                            <a css={SectionContent.instagram} href="https://www.instagram.com/koutamakin" className="instagram">
                                                Instagram
                                            </a>
                                            /
                                            <a css={SectionContent.facebook} href="https://www.facebook.com/profile.php?id=100007218916422" className="facebook">
                                                Facebook
                                            </a>
                                        </SectionSns>
                                    </div>
                                </div>
                            </div>

                            <div css={SectionContent.profile} className="profile">
                                <img css={SectionContent.img} src="https://res.cloudinary.com/hchyaihwv/image/upload/v1572704968/acvgh4hcnmccxobtvrmt.jpg" alt=""/>
                                <div>
                                    <span css={SectionContent.span}>Asatai</span>
                                    <p css={SectionContent.text}>
                                        Web Application Engineer / Podcaster / Freelancer
                                    </p>
                                    <div css={SectionContent.something} className="something">
                                        <div css={SectionContent.something} className="something">
                                            <p css={SectionContent.text}>
                                                はいさーい、あさたいです！人生を自由に放浪している、旅するエンジニアです。このラジオを通して、視聴者の皆さんと一緒にゆんたくできたら嬉しいです。ゆたしく！
                                            </p>
                                        </div>
                                        <SectionSns>
                                            <a css={SectionContent.twitter} href="https://twitter.com/asatai_awamori" className="twitter">
                                                Twitter
                                            </a>
                                            /
                                            <a css={SectionContent.instagram} href="https://www.instagram.com/asatai_oki" className="instagram">
                                                Instagram
                                            </a>
                                            /
                                            <a css={SectionContent.facebook} href="https://www.facebook.com/asatai.oki" className="facebook">
                                                Facebook
                                            </a>
                                        </SectionSns>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const SectionSns = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    a {
        color: #1a0dab;
        font-size: 15px;
        font-weight: 800;
    }
    a:hover {
        opacity: .7;
    }
`

const SectionContent = {
    box_body: css`
        position: relative;
        background: url(https://res.cloudinary.com/hchyaihwv/image/upload/e_art:peacock,q_100/v1572851882/IMG_0033.jpg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    `,
    body: css`
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background: url(https://res.cloudinary.com/dq14n6i0f/image/upload/v1573822260/main_view_back_img.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        z-index: 10;
        position: relative;
        padding: 30px 0;
    `,
    back_screen: css`
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgb(255,255,255,0.8);
        z-index: -1;
    `,
    h2: css`
        font-size: 25px;
        font-weight: 800;
        margin: auto;
        margin-bottom: 40px;
        width: 80%;
    `,
    p: css`
        font-size: 17px;
    `,
    profile_top: css`
        width: 35%;
        height: 530px;
        text-align: center;
    `,
    profile: css`
        width: 40%;
        height: 610px;
        text-align: center;
    `,
    img: css`
        width: 200px;
        height: 200px;
        border: none;
        border-radius: 100px;
        margin: unset;
    `,
    span: css`
        font-size: 30px;
        font-weight: 800;
    `,
    text: css`
        font-weight: 800;
        padding-top: 5px;
    `,
    something: css`
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 10px;
    `,
    block_bottom: css`
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 80%;
    `,
    sns: css`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    `,
    twitter: css`
        font-size: 17px;
        font-weight: 800;
        color: #55acee;
     `,
    instagram: css`
        font-size: 17px;
        color: #3f729b;
    `,
    facebook : css`
        font-size: 17px;
        color: #3B5998;
    `,
};