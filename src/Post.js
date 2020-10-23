import React from 'react'
import './Post.css'
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";



function Post({
    DisplayName,
    username,
    verified,
    text,
    avatar }) {
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />

            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            Rafeh Qazi {" "}
                            <span className="post__headerSpecial" >
                                <VerifiedUserIcon className="post_badge" />
                            </span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>I challange you to build a twitter clone</p>
                    </div>
                </div>
                <img src = "https://media0.giphy.com/media/2Tn10AXN6B98k/giphy.gif" alt = "" />
                <div className="post_footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
            </div>
        </div>
    )
}

export default Post;
