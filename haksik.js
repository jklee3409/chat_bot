const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
var haksik_data;

module.exports.Seoul = function(haksik_data){
  const goMain = '처음으로';

    haksik_data = {
        'version': '2.0',
        'template': {
              'outputs': [{
               'simpleImage': {
                'imageUrl': "https://coop.khu.ac.kr/wp-content/uploads/2021/11/20211129-1301x2048.png",
              'altText' : "서울캠퍼스 식단입니다." 
               } 
             }],
              'quickReplies': [{
               'label': goMain,
               'action': 'message',
               'messageText': goMain
             }]
        }
      }
      return haksik_data;
}

module.exports.Global = function(haksik_data){
  const goMain = '처음으로';

    haksik_data = {
      "version": "2.0",
      "template": {
        "outputs": [
          {
            "basicCard": {
              "title": "국제캠퍼스 학식",
              "description": "오늘의 학식은 무엇일까?!",
              "thumbnail": {
                "imageUrl": "https://ww.namu.la/s/e38da99cb3bbad5d4a7f19a015fc2a888e01a7c996bb18465f8ba242a21ac5b3d1f2f977094552b00c706aab9c5c7e48dedae0103ed84d8039376458bebeaf0c43c7642b2544a52a016d0633eeab043924071315d41e15ef8df134009508ec03"
              },
              "profile": {
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4BJ9LU4Ikr_EvZLmijfcjzQKMRCJ2bO3A8SVKNuQ78zu2KOqM",
                "nickname": "학식"
              },
              "social": {
                "like": 1238,
                "comment": 8,
                "share": 780
              },
              "buttons": [
                {
                  "action":  "webLink",
                  "label": "학식보기",
                  "webLinkUrl": "https://www.khu.ac.kr/kor/forum/list.do?type=RESTAURANT&category=INTL&page=1"
                }
              ]
            }
          }
        ]
      }
    }
      return haksik_data;
}



