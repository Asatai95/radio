import { useStaticQuery, graphql } from 'gatsby';

export const Feed = () => {
    const data = useStaticQuery(graphql`
        query {
            allInstaNode {
                edges {
                    node {
                        id
                        likes
                        mediaType
                        preview
                        original
                        timestamp
                        caption
                        thumbnails {
                            src
                            config_width
                            config_height
                        }
                        dimensions {
                            height
                            width
                        }
                    }
                }
            }
        }
    `);

    const insta = data.allInstaNode.edges;
    var fragment = [];
    for(var i = 0; i < insta.length; i++){
        fragment.push(`
            <div class="post">
                <a href=https://www.instagram.com/p/`+insta[i].node.id+` target="_blank">
                    <img src=`+insta[i].node.thumbnails[2].src+` alt="" />
                </a>
                <div class="insta_box">
                    <div class="icon">
                        <div class="like">
                            <svg class="eapps-instagram-feed-posts-item-likes-count-icon" viewBox="0 0 24 24"><path d="M17.7,1.5c-2,0-3.3,0.5-4.9,2.1c0,0-0.4,0.4-0.7,0.7c-0.3-0.3-0.7-0.7-0.7-0.7c-1.6-1.6-3-2.1-5-2.1C2.6,1.5,0,4.6,0,8.3c0,4.2,3.4,7.1,8.6,11.5c0.9,0.8,1.9,1.6,2.9,2.5c0.1,0.1,0.3,0.2,0.5,0.2s0.3-0.1,0.5-0.2c1.1-1,2.1-1.8,3.1-2.7c4.8-4.1,8.5-7.1,8.5-11.4C24,4.6,21.4,1.5,17.7,1.5z M14.6,18.6c-0.8,0.7-1.7,1.5-2.6,2.3c-0.9-0.7-1.7-1.4-2.5-2.1c-5-4.2-8.1-6.9-8.1-10.5c0-3.1,2.1-5.5,4.9-5.5c1.5,0,2.6,0.3,3.8,1.5c1,1,1.2,1.2,1.2,1.2C11.6,5.9,11.7,6,12,6.1c0.3,0,0.5-0.2,0.7-0.4c0,0,0.2-0.2,1.2-1.3c1.3-1.3,2.1-1.5,3.8-1.5c2.8,0,4.9,2.4,4.9,5.5C22.6,11.9,19.4,14.6,14.6,18.6z"></path></svg>
                            <span class="text">`+insta[i].node.like+`</span>
                        </div>
                        <div class="comment">
                            <svg class="eapps-instagram-feed-posts-item-comments-count-icon" viewBox="0 0 24 24"><path d="M1,11.9C1,17.9,5.8,23,12,23c1.9,0,3.7-1,5.3-1.8l5,1.3l0,0c0.1,0,0.1,0,0.2,0c0.4,0,0.6-0.3,0.6-0.6c0-0.1,0-0.1,0-0.2l-1.3-4.9c0.9-1.6,1.4-2.9,1.4-4.8C23,5.8,18,1,12,1C5.9,1,1,5.9,1,11.9z M2.4,11.9c0-5.2,4.3-9.5,9.5-9.5c5.3,0,9.6,4.2,9.6,9.5c0,1.7-0.5,3-1.3,4.4l0,0c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.1,0,0.1l0,0l1.1,4.1l-4.1-1.1l0,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.3,0.1l0,0c-1.4,0.8-3.1,1.8-4.8,1.8C6.7,21.6,2.4,17.2,2.4,11.9z"></path></svg>
                            <span class="text">0</span>
                        </div>
                    </div>
                    <div class="contents">
                        <p class="text">`+insta[i].node.caption+`</p>
                    </div>
                </div>
            </div>
        `);
    }

    const result = fragment.map((htmlStr) => {
        if (!htmlStr || typeof htmlStr !== 'string') return;

        var tmpElmt = document.createElement('div'),
            i = 0, len = 0, nodes = [];
        tmpElmt.innerHTML = htmlStr;
        return tmpElmt;
    });

    return (
        result
    );
}