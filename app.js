const express = require('express');
const fs = require('fs');
const path = require('path');
const HTTPS = require('https');
const domain = "2020105107.osschatbot.cf"
const sslport = 23023;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var club = require('./club');
var haksik = require('./haksik');
var haksa = require('./haksa');

app.post('/message', (req, res) => {
  const question = req.body.userRequest.utterance;
  const goMain = '처음으로';
  var data;
  
  // 학사정보 간편보기
  if(question == "간편하게 보는 학사정보"){
    data = haksa.Haksa_Information(data);
  }

  //동아리 정보 보기 - 서울캠 공연 
  if(question== "바운스" || question == "bounce"){
    data = club.Bounce(data);
  }else if(question == "GLEE" || question == "glee"){
    data = club.GLEE(data);
  }else if(question == "MDOP" || question == "mdop"){
    data = club.MDOP(data);
  }else if(question == "NAKED" || question == "네이키드"){
    data = club.NAKED(data);
  }else if(question == "경희극장"){
    data = club.Khutheatre(data);
  }else if(question == "노래여울"){
    data = club.Noraeyeoul(data);
  }else if(question == "발광"){
    data = club.Balgwang(data);
  }else if(question == "발라드림"){
    data = club.Balladream(data);
  }else if(question == "칸타빌레"){
    data = club.Cantabile(data);
  }

  //동아리 정보 보기 - 서울캠 학술
  if(question == "ABS" || question == "abs"){
    data = club.ABS(data);
  }else if(question == "ACE" || question == "ace"){
    data = club.ACE(data);
  }else if(question == "IDS" || question == "ids"){
    data = club.IDS(data);
  }else if(question == "SEN경희" || question == "sen경희"){
    data = club.SENkh(data);
  }else if(question == "UNSA" || question == "unsa"){
    data = club.UNSA(data);
  }else if(question == "이감"){
    data = club.Egam(data);
  }

  //동아리 정보 보기 - 서울캠 봉사 
  if(question == "miraKHle" || question == "mirakhle"){
    data = club.miraKHle(data);
  }else if(question == "PTPI" || question == "ptpi"){
    data = club.PTPI(data);
  }else if(question == "바인"){
    data = club.VINE(data);
  }

  //동아리 정보 보기 - 서울캠 체육
  if(question == "BRAVES" || question == "braves"){
    data = club.BRAVES(data);
  }else if(question == "ESpers" || question == "espers"){
    data = club.ESpers(data);
  }else if(question == "FAKIE" || question == "fakie"){
    data = club.FAKIE(data);
  }else if(question == "KUTA" || question == "kuta"){
    data = club.KUTA(data);
  }else if(question == "WBA" || question == "wba"){
    data = club.WBA(data);
  }else if(question == "검도부"){
    data = club.KENDO(data);
  }else if(question == "경희랑달리기"){
    data = club.Running_with_kyunghee(data);
  }else if(question == "산악부"){
    data = club.Alpine(data);
  }else if(question == "스키부"){
    data = club.SKI(data);
  }else if(question == "유혼"){
    data = club.JUDO(data);
  }else if(question == "태권도부"){
    data = club.TKD(data);
  }

  //동아리 정보 보기 - 서울캠 종교
  if(question == "CCC" || question == "ccc"){
    data = club.CCC(data);
  }else if(question == "IVF" || question == "ivf"){
    data = club.IVF(data);
  }else if(question == "JOY" || question == "joy"){
    data = club.JOY(data);
  }else if(question == "SFC" || question == "sfc"){
    data = club.SFC(data);
  }else if(question == "경불회"){
    data = club.Buddha(data);
  }else if(question == "네비게이토"){
    data = club.Navigators(data);
  }else if(question == "경희기독교연합동아리"){
    data = club.CCC_agape(data);
  }

  //동아리 정보 보기 - 서울캠 취미, 교양
  if(question == "PLANET-X" || question == "planet-x"){
    data = club.PLANET_X(data);
  }else if(question == "SENET" || question == "senet"){
    data = club.SENET(data);
  }else if(question == "유스호스텔"){
    data = club.YH(data);
  }

  //동아리 정보 보기 -서울캠 전시, 창작
  if(question == "KHPC" || question == "khpc"){
    data = club.KHPC(data);
  }else if(question == "경희서도회"){
    data = club.Groups_kh(data);
  }else if(question == "그림자 놀이" || question == "그림자놀이"){
    data = club.ShadowPlay(data);
  }else if(question == "문맥"){
    data = club.Munmaek(data);
  }else if(question == "카피울림"){
    data = club.CopyWoolim(data);
  }

  //학식
  if (question == "서울캠퍼스") {
    data = haksik.Seoul(data);
  }else if (question == "국제캠퍼스") {
    data = haksik.Global(data);
  }


  res.json(data);
});

try {
  const option = {
    ca: fs.readFileSync('/etc/letsencrypt/live/' + domain +'/fullchain.pem'),
    key: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/' + domain +'/privkey.pem'), 'utf8').toString(),
    cert: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/' + domain +'/cert.pem'), 'utf8').toString(),
  };

  HTTPS.createServer(option, app).listen(sslport, () => {
    console.log(`[HTTPS] Server is started on port ${sslport}`);
  });
} catch (error) {
  console.log('[HTTPS] HTTPS 오류가 발생하였습니다. HTTPS 서버는 실행되지 않습니다.');
  console.log(error);
}
