import React from "react";
import Header from "./fav_header";
import Content from "./content";

const Photo_page = (props) => {
  return (
    <div className="photo_page">
      <Header />
      <div className="photo">
        <div className="container">
          <div className="photo_bar">
            <div className="photo_bar_left">
              <div className="avatar"></div>
              <div className="naming">
                <div className="name">Vadim Sadovski</div>
                <div className="mail">@vadimsadovski</div>
              </div>
            </div>

            <div className="photo_bar_right">
              <div className="photo_bar_right_icon"></div>
              <div className="download_btn">
                <div className="download_btn_ICON"></div>
                <div className="download_btn_text">Download</div>
              </div>
            </div>
          </div>

          <div className="main_photo"></div>
          
          <div className="similar_tags_intro">Похожии теги</div>

          <div className="similar_tags">
            <div className="similar_tag similar_tags_1">Girl</div>
            <div className="similar_tag similar_tags_2">Woman</div>
            <div className="similar_tag similar_tags_3">Mood</div>
            <div className="similar_tag similar_tags_4">People</div>
            <div className="similar_tag similar_tags_5">Free Pictures</div>

          </div>
        </div>

        <div className="similar_photo">Похожие фотографии</div>


        <div className="home_content">
          <Content />
        </div>
      </div>
      
    </div>
  );
};

export default Photo_page;
