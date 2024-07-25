import React from 'react'
import MainTemplate from '../Templates/MainTemplate'
import ImgWithTextTemplate from '../Templates/ImgWithTextTemplate'

function Home() {
  return (
    <MainTemplate>
      <ImgWithTextTemplate img='./exampleImg.png' title='Title' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis accumsan urna. Nullam condimentum urna quis ex posuere ullamcorper. Maecenas finibus purus id mi molestie tempus eu ac magna. Ut accumsan, tortor non malesuada maximus, dui tortor viverra justo, nec maximus metus risus sit amet risus. Quisque eu aliquet nulla. Quisque neque enim, aliquet id consequat eget, vulputate sodales nisi. Nam semper molestie tortor. Aliquam consequat lacus augue, ac convallis est consectetur id. Curabitur iaculis lectus sed erat condimentum vulputate.'/>
    </MainTemplate>
  )
}

export default Home