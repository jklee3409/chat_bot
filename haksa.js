const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
var haksa_data;

//학사정보 간편보기
module.exports.Haksa_Information = function(haksa_data){
    haksa_data = {
      "version": "2.0",
      "template": {
        "outputs": [
          {
            "listCard": {
              "header": {
                "title": "KHU 학사정보 알리미"
              },
              "items": [
                {
                  "title": "장학금 공지사항",
                  "description": "챗봇으로 손쉽게 알아보는 학사정보",
                  "imageUrl": "https://mblogthumb-phinf.pstatic.net/20140716_293/envicontest_1405437648963lV4y4_GIF/University_Seal.gif?type=w2",
                  "link": {
                    "web": "https://www.khu.ac.kr/kor/notice/list.do?category=SCHOLARSHIP&page=1"
                  }
                },
                {
                  "title": "공용 소프트웨어가 필요할 땐?",
                  "description": "경희대학교 정보처를 이용해보세요.",
                  "imageUrl": "https://cdn-icons.flaticon.com/png/128/2888/premium/2888407.png?token=exp=1638455259~hmac=d58c655e0ac8a16809b48323ea83a75f",
                  "link": {
                    "web": "https://ois.khu.ac.kr/index.do?sso=ok"
                  }
                },
                {
                  "title": "학사 공지사항",
                  "description": "학사 일정 공지사항 알아보기",
                  "imageUrl": "https://cdn-icons.flaticon.com/png/128/3277/premium/3277431.png?token=exp=1638455425~hmac=4fe1afa937ad2ca62e17e25a34aa342e",
                  "link": {
                    "web": "https://www.khu.ac.kr/kor/notice/list.do?category=UNDERGRADUATE&page=1"
                  }
                }
              ],
              "buttons": [
                {
                  "label": "홈페이지 구경가기",
                  "action": "webLink",
                  "webLinkUrl": "https://www.khu.ac.kr/kor/main/index.do"
                }
              ]
            }
          }
        ]
      }
    } 
    return haksa_data;
}