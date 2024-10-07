const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
var club_data;

//동아리 정보 보기

//BOUNCE
module.exports.Bounce = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "BOUNCE"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://www.instagram.com/official_bnc/"
                }
              },
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "https://m.facebook.com/khubounce"
                }
              },
              {
                "title": "Youtube",
                "description": "유튜브로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/187/187209.png",
                "link": {
                  "web": "https://m.youtube.com/channel/UCdqjjUiX3nTsr0neeC1ovvw"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}

//GLEE
module.exports.GLEE = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "GLEE"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://www.instagram.com/khu_glee_choir"
                }
              },
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "https://www.facebook.com/gleekhu"
                }
              },
              {
                "title": "Youtube",
                "description": "유튜브로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/187/187209.png",
                "link": {
                  "web": "https://www.youtube.com/channel/UCCr7JucZypMTEFWlfRZaPpQ"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}
  

//MDOP
module.exports.MDOP = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "MDOP"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "http://www.instagram.com/khu_mdop"
                }
              },
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "http://www.facebook.com/khumdop"
                }
              },
              {
                "title": "Youtube",
                "description": "유튜브로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/187/187209.png",
                "link": {
                  "web": "https://www.youtube.com/channel/UCDF_aWEw_geoDWi6KDhsYjQ/featured"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}
  

//NAKED
module.exports.NAKED = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "NAKED"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://instagram.com/khunaked707?igshid=xotf371lj448"
                }
              },
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "https://m.facebook.com/khunaked707/"
                }
              },
              {
                "title": "Youtube",
                "description": "유튜브로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/187/187209.png",
                "link": {
                  "web": "https://m.youtube.com/channel/UCMwOGeMFAB3HZQ1i8FwWvUg"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//경희극장
module.exports.Khutheatre = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "경희극장"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "http://www.instagram.com/khutheatre"
                }
              },
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "http://www.facebook.com/khutheatre"
                }
              },
              {
                "title": "Youtube",
                "description": "유튜브로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/187/187209.png",
                "link": {
                  "web": "https://www.youtube.com/channel/UCbv8P2HP47MdpqIZfCz6SHA"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}



//노래여울
module.exports.Noraeyeoul = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "노래여울"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://www.instagram.com/khu_noraeyeoul"
                }
              },
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "https://www.facebook.com/groups/khunoraeyeoul"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//발광
module.exports.Balgwang = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "발광"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://instagram.com/balgwang_official?igshid=19lktk6i8edt9"
                }
              },
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "https://www.facebook.com/groups/356266174420488/?ref=share"
                }
              },
              {
                "title": "Youtube",
                "description": "유튜브로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/187/187209.png",
                "link": {
                  "web": "https://www.youtube.com/c/BalGwangKH/featured"
                }
              }
            ]
          }         
         }
      ]
    }
  }
  return club_data;
}


//발라드림
module.exports.Balladream = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "발라드림"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://www.instagram.com/balladream_khu/"
                }
              },
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "https://www.facebook.com/balladreamkhu/"
                }
              },
              {
                "title": "Youtube",
                "description": "유튜브로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/187/187209.png",
                "link": {
                  "web": "https://youtube.com/channel/UCclYm0zH7QGsSKAX1hArJXA"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//칸타빌레
module.exports.Cantabile = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "칸타빌레"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://instagram.com/cantabile_khu"
                }
              },
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "https://facebook.com/khucantabile"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//ABS
module.exports.ABS = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "ABS"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://instagram.com/khu.abs"
                }
              },
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "https://m.facebook.com/KHUABS"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//ACE
module.exports.ACE = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "ACE"
            },
            "items": [
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "http://www.facebook.com/groups/137902359636682"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//IDS
module.exports.IDS = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "IDS"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://instagram.com/ids_khu?igshid=p5j2ehidjx5"
                }
              },
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "https://www.facebook.com/khuids"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//SEN경희
module.exports.SENkh = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "SEN경희"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://www.instagram.com/senkyunghee/"
                }
              },
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "http://www.facebook.com/SenKh"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//UNSA
module.exports.UNSA = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "UNSA"
            },
            "items": [
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "https://www.facebook.com/khunsarok"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//이감
module.exports.Egam = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "이감"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "http://www.instagram.com/khu_egam"
                }
              },
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "http://www.facebook.com/khuegam"
                }
              },
              {
                "title": "Youtube",
                "description": "유튜브로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/187/187209.png",
                "link": {
                  "web": "https://www.youtube.com/channel/UCNabfFaCLjk96Gu_QhsIdEw/featured"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//miraKHle
module.exports.miraKHle = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "miraKHle"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://www.instagram.com/mirakhle_khu/"
                }
              },
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "https://www.facebook.com/miraKHle"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}

//PTPI
module.exports.PTPI = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "PTPI"
            },
            "items": [
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "https://www.facebook.com/khuptpi/"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//바인
module.exports.VINE = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "바인"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://www.instagram.com/vine_khu/"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//BRAVES
module.exports.BRAVES = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "BRAVES"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://www.instagram.com/khu_braves/"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//ESpers
module.exports.ESpers = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "ESpers"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://www.instagram.com/khu_espers"
                }
              },
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "https://www.facebook.com/KHUESPers"
                }
              },
              {
                "title": "Youtube",
                "description": "유튜브로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/187/187209.png",
                "link": {
                  "web": "https://www.youtube.com/channel/UCTO0oNF-0Ih_ECiDykhVnJA"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//FAKIE
module.exports.FAKIE = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "FAKIE"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://instagram.com/fakie_khu?igshid=1efy6hh5zh4f"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//KUTA
module.exports.KUTA = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "KUTA"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://instagram.com/kuta_tennis?igshid=1nvufgi0d4rvb"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//WBA
module.exports.WBA = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "WBA"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://instagram.com/khu_wba"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//검도부
module.exports.KENDO = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "WBA"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "http://www.instagram.com/khu_kendo"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//경희랑달리기
module.exports.Running_with_kyunghee = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "경희랑달리기"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "http://www.instagram.com/running_with_kyunghee"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//산악부
module.exports.Alpine = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "산악부"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://www.instagram.com/kyunghee_alpine1949/"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//스키부
module.exports.SKI = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "스키부"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://www.instagram.com/khu_ski_/"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}

//유혼
module.exports.JUDO = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "유혼"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://www.instagram.com/khu_judo/"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}

//태권도부
module.exports.TKD = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "태권도부"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://instagram.com/khutkd.lv?igshid=hgefdtv3oz0o"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//CCC
module.exports.CCC = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "CCC"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://www.instagram.com/khu_ccc/"
                }
              },
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "https://www.facebook.com/KHUTips/"
                }
              },
              {
                "title": "Youtube",
                "description": "유튜브로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/187/187209.png",
                "link": {
                  "web": "https://youtube.com/channel/UClHgGjKz8_kIvfiHEHoMZMw"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//IVF
module.exports.IVF = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "IVF"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "http://www.instagram.com/khu_ivf"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//JOY
module.exports.JOY = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "JOY"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://instagram.com/withjoy2021?igshid=lu1ogs1tbw47"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//SFC
module.exports.SFC = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "SFC"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://instagram.com/seoul_u_sfc?igshid=1fq90pq0mzvyh"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//경불회
module.exports.Buddha = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "경불회"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "http://www.instagram.com/buddha_khu"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//네비게이토
module.exports.Navigators = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "네비게이토"
            },
            "items": [
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "https://facebook.com/khunavigators/"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//경희기독교연합동아리
module.exports.CCC_agape = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "네비게이토"
            },
            "items": [
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "https://www.instagram.com/khu_ccc_agape/"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//PLANET-X
module.exports.PLANET_X = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "PLANET-X"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "http://www.instagram.com/khu_planet_x"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//SENET
module.exports.SENET = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "SENET"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://www.instagram.com/senet_khu/"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//유스호스텔
module.exports.YH = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "유스호스텔"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://instagram.com/khu_youthhostel?igshid=2rx4dyodd3lv"
                }
              },
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "https://www.facebook.com/%EA%B2%BD%ED%9D%AC-%EC%9C%A0%EC%8A%A4%ED%98%B8%EC%8A%A4%ED%85%94-100627254629228/?ref=page_internal"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//KHPC
module.exports.KHPC = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "KHPC"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://instagram.com/khpc2021?igshid=tht4hur641xn"
                }
              },
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "http://www.facebook.com/khpc1970"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//경희서도회
module.exports.Groups_kh = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "경희서도회"
            },
            "items": [
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "https://www.facebook.com/groups/288267494577090"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//그림자 놀이
module.exports.ShadowPlay = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "그림자 놀이"
            },
            "items": [
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "https://www.facebook.com/KHUSHADOWPLAY/"
                }
              },
              {
                "title": "Youtube",
                "description": "유튜브로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/187/187209.png",
                "link": {
                  "web": "https://youtube.com/user/Shadowplay60khu"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//문맥
module.exports.Munmaek = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "문맥"
            },
            "items": [
              {
                "title": "Facebook",
                "description": "페이스북으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "link": {
                  "web": "http://www.facebook.com/munmaek"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}


//카피울림
module.exports.CopyWoolim = function(club_data){
  club_data = {
    "version": "2.0",
    "template": {
      "outputs": [
         {
          "listCard": {
            "header": {
              "title": "카피울림"
            },
            "items": [
              {
                "title": "Instagram",
                "description": "인스타그램으로 이동",
                "imageUrl": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
                "link": {
                  "web": "https://www.instagram.com/copywoolim/?hl=ko"
                }
              }
            ]
          }          
        }
      ]
    }
  }
  return club_data;
}