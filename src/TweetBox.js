import React from 'react'
import './TweetBox.css'
import {Avatar, Button} from "@material-ui/core"

function TweetBox() {
    return (
        <div className = "tweetBox">
            <form>
                <div className= "tweetBox_input">
                <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                <input placeholder = "What's Happening?" type="text"  />
                </div>
                <div className= "tweetBox_imageInput">
                <input placeholder = "Optional: Enter image URL" type="text"  />
                </div>
                <Button className = "tweetBox_tweetButton">Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox
