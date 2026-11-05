const PHOTO_GALLERY_ASSETS={"kawa-0":"assets/8e5353bbe0cf96e3.jpg","kawa-1":"assets/86324a45d608f046.jpg","kawa-2":"assets/65f502ffdb60361b.jpg","karui-0":"assets/af50b0965d1f8201.jpg","karui-1":"assets/01137c5d4def83d6.jpg","karui-2":"assets/bb3f0844c9366acb.jpg","yufuin-0":"assets/1d23ea63124f1d36.jpg","yufuin-1":"assets/657c042cadac8e64.jpg","yufuin-2":"assets/91d52de50dceaaa5.jpg","yufuin-3":"assets/9829f607808cb4f1.jpg","yufuin-4":"assets/8aea3cb93a3b1cbb.jpg","yufuin-5":"assets/1a16c022883f089b.jpg","beppu-0":"assets/bab86dd31fba0466.jpg","beppu-1":"assets/bd6d55f7bd76cb88.jpg","beppu-2":"assets/a614d5898085128b.jpg","arima-0":"assets/6293ab7a5e2b0aef.jpg","arima-1":"assets/c1dbbd89a17984ff.jpg","arima-2":"assets/95a0de9e2453390c.jpg","hakone-0":"assets/a506b112129d9a1c.jpg","hakone-1":"assets/2eb0753a31ddb603.jpg","hakone-2":"assets/12d7b0cdaac58781.jpg","comico-0":"assets/029d826fe4651dfd.jpg","comico-1":"assets/b7242f913737b3e9.jpg"};const SCENIC_ASSETS={"kawa-scene-0":"assets/0371f6463e974590.jpg","kawa-scene-1":"assets/ac8e0dc798e127cd.jpg","karui-scene-0":"assets/0889e8f790b390eb.jpg","karui-scene-1":"assets/36aaec7bd5fffa85.jpg","yufuin-scene-0":"assets/4a1d4370bdc8a4b3.jpg","yufuin-scene-1":"assets/8e936c300e02fba7.jpg","yufuin-scene-2":"assets/f2a91e26aec1f623.jpg","beppu-scene-0":"assets/3588d9ae26637100.jpg","beppu-scene-1":"assets/16d62338f84a3fe3.jpg","arima-scene-0":"assets/9762ad7d2554c837.jpg","arima-scene-1":"assets/58ba22b1eaee9084.jpg","arima-scene-2":"assets/fea9d38cf85a4835.jpg","hakone-scene-0":"assets/333444c70e463315.jpg","hakone-scene-1":"assets/c30f2f0ae5950adb.jpg","hakone-scene-2":"assets/641d867077922a04.jpg"};const SCENIC_DATA={
 "kawa":[["kawa-scene-0","카와구치코 · 河口湖","호숫가 풍경 · 촬영 계절에 따라 실제 모습은 달라집니다."],["kawa-scene-1","아라쿠라야마 센겐공원 · 新倉山浅間公園","후지요시다의 근교 명소. 전망대 계단·오르막은 이번 동행 조건에서 생략하거나 별도 판단하세요."]],
 "karui":[["karui-scene-0","시라이토 폭포 · 白糸の滝","겨울에는 보행로 상태를 확인하고 눈길 산책은 무리하지 마세요."],["karui-scene-1","규카루이자와 긴자 · 旧軽井沢銀座","거리 전체를 걷기보다 카페와 가까운 구간만 짧게 둘러보세요."]],
 "yufuin":[["yufuin-scene-0","유후인 거리와 유후다케 · 由布院・由布岳","마을 사진은 분위기 참고용. 역부터 긴린코까지 한 번에 걷는 일정은 피하세요."]],
 "beppu":[["beppu-scene-0","벳푸 로프웨이 · 別府ロープウェイ","봄 촬영 사진. 겨울 운행·날씨를 확인하고 정상 산책은 선택하세요."],["beppu-scene-1","쓰루미다케 · 鶴見岳","꽃이 핀 계절의 풍경이며 2월의 모습은 아닙니다. 산정 보행은 별도 판단하세요."]],
 "arima":[["arima-scene-0","아리마 온천마을 야경 · 有馬温泉","경사와 계단이 있는 구간은 호텔 송영·택시로 줄이세요."],["arima-scene-2","근교 고베 야경 · 神戸","아리마와 다른 지역의 선택 관광지. 온천 일정에 무리하게 묶지 마세요."]],
 "hakone":[["hakone-scene-1","하코네유모토 · 箱根湯本","역 주변 마을 풍경. 숙소 접근성과 먼 관광지까지의 이동은 구분하세요."],["hakone-scene-2","하코네 등산전차 · 箱根登山電車","가을 촬영 사진. 열차 여행과 호수·미술관 이동을 모두 한날에 넣지 않아도 됩니다."]]
}
;const SCENIC_MANIFEST=[
  {
    "key": "kawa-scene-0",
    "id": "kawa",
    "url": "https://res-1.cloudinary.com/jnto/image/upload/w_750,h_503,c_fill,f_auto,fl_lossy,q_auto/v1508393430/yamanashi/Yamanashi910_1.jpg",
    "source": "https://www.japan.travel/en/spot/1329/",
    "file": ".taste-skill/photos/kawa-scene-0.img"
  },
  {
    "key": "kawa-scene-1",
    "id": "kawa",
    "url": "https://res.cloudinary.com/jnto/image/upload/w_540,h_340,c_fill,f_auto,fl_lossy,q_auto/v1516050113/yamanashi/Yamanashi903_1",
    "source": "https://www.japan.travel/en/spot/1329/",
    "file": ".taste-skill/photos/kawa-scene-1.img"
  },
  {
    "key": "karui-scene-0",
    "id": "karui",
    "url": "https://asset.japan.travel/image/upload/v1676003301/nagano/Nagano_t_id273_1.jpg",
    "source": "https://www.japan.travel/en/spot/673/",
    "file": ".taste-skill/photos/karui-scene-0.img"
  },
  {
    "key": "karui-scene-1",
    "id": "karui",
    "url": "https://res.cloudinary.com/jnto/image/upload/w_540,h_340,c_fill,f_auto,fl_lossy,q_auto/v1514196505/nagano/Nagano055_1",
    "source": "https://www.japan.travel/en/spot/673/",
    "file": ".taste-skill/photos/karui-scene-1.img"
  },
  {
    "key": "yufuin-scene-0",
    "id": "yufuin",
    "url": "https://res-1.cloudinary.com/jnto/image/upload/w_750,h_503,c_fill,f_auto,fl_lossy,q_auto/v1516869090/oita/Oita2000_4.jpg",
    "source": "https://www.japan.travel/en/spot/707/",
    "file": ".taste-skill/photos/yufuin-scene-0.img"
  },
  {
    "key": "yufuin-scene-1",
    "id": "yufuin",
    "url": "https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1514406845/oita/Oita2000_1",
    "source": "https://www.japan.travel/en/spot/707/",
    "file": ".taste-skill/photos/yufuin-scene-1.img"
  },
  {
    "key": "yufuin-scene-2",
    "id": "yufuin",
    "url": "https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1516504336/oita/Oita2000_3",
    "source": "https://www.japan.travel/en/spot/707/",
    "file": ".taste-skill/photos/yufuin-scene-2.img"
  },
  {
    "key": "beppu-scene-0",
    "id": "beppu",
    "url": "https://oita-tourism.com/lsc/upfile/spot/0000/1015/1015_1_l.jpg",
    "source": "https://oita-tourism.com/en/attractions/detail_1015.html",
    "file": ".taste-skill/photos/beppu-scene-0.img"
  },
  {
    "key": "beppu-scene-1",
    "id": "beppu",
    "url": "https://oita-tourism.com/lsc/upfile/spot/0000/1015/1015_3_l.jpg",
    "source": "https://oita-tourism.com/en/attractions/detail_1015.html",
    "file": ".taste-skill/photos/beppu-scene-1.img"
  },
  {
    "key": "arima-scene-0",
    "id": "arima",
    "url": "https://asset.japan.travel/image/upload/v1646644556/hyogo/M_00099_003.jpg",
    "source": "https://www.japan.travel/en/spot/1025/",
    "file": ".taste-skill/photos/arima-scene-0.img"
  },
  {
    "key": "arima-scene-1",
    "id": "arima",
    "url": "https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1646644557/hyogo/M_00099_002",
    "source": "https://www.japan.travel/en/spot/1025/",
    "file": ".taste-skill/photos/arima-scene-1.img"
  },
  {
    "key": "arima-scene-2",
    "id": "arima",
    "url": "https://res.cloudinary.com/jnto/image/upload/w_540,h_340,c_fill,f_auto,fl_lossy,q_auto/v1514380476/hyogo/Hyogo744_8",
    "source": "https://www.japan.travel/en/spot/1025/",
    "file": ".taste-skill/photos/arima-scene-2.img"
  },
  {
    "key": "hakone-scene-0",
    "id": "hakone",
    "url": "https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1514116392/kanagawa/Kanagawa295_15",
    "source": "https://www.japan.travel/en/destinations/kanto/kanagawa/hakone-and-around/",
    "file": ".taste-skill/photos/hakone-scene-0.img"
  },
  {
    "key": "hakone-scene-1",
    "id": "hakone",
    "url": "https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1517190738/kanagawa/Kanagawa2663_1",
    "source": "https://www.japan.travel/en/destinations/kanto/kanagawa/hakone-and-around/",
    "file": ".taste-skill/photos/hakone-scene-1.img"
  },
  {
    "key": "hakone-scene-2",
    "id": "hakone",
    "url": "https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1516471354/kanagawa/Kanagawa288_2",
    "source": "https://www.japan.travel/en/destinations/kanto/kanagawa/hakone-and-around/",
    "file": ".taste-skill/photos/hakone-scene-2.img"
  }
];const REVIEW_DATA={
 "checked":"2026-11-04",
 "kawa":{
  "hotel":"코난소 · 湖南荘","tags":["reviewFood","reviewView","reviewRoom"],"priority":1,"mobility":"송영·객실 조건 확인 후 비교",
  "praise":["후지산·호수 조망","차분한 객실 식사","청결하고 쾌적한 객실"],
  "summary":"조망과 식사를 함께 칭찬한 후기가 확인됩니다. 객실 식사가 편했다는 경험도 있지만, 조식과 서비스에 대한 평가는 갈립니다.",
  "travel":"나리타에서 지역까지 직행버스를 이용해도 장시간 앉아 있어야 합니다. 역 이후 숙소 송영·택시를 연결하고, 짐을 들고 호숫가를 걷는 일정은 피하세요.",
  "room":"후지산 쪽과 호수 쪽 객실이 다릅니다. 침대·높은 의자, 식사 장소를 확인하세요. 공식 FAQ상 배리어프리 객실이 없고 객실 내 휠체어 사용은 불가합니다.",
  "meal":"저녁 객실 식사를 칭찬한 후기가 있지만 전 객실·6명 예약에 보장되지는 않습니다. 조식은 뷔페이므로 가족이 음식을 함께 가져오는 방식이 편합니다.",
  "caution":"전망을 위해 선택하기 좋은 후보. 다만 긴 공항버스와 객실 형태를 먼저 맞춰야 합니다.",
  "source":"https://www.ikyu.com/00002350/review/","official":"https://www.konansou.com/qa/",
  "samples":[["2026-09-23","호수 전망·청결한 객실·느긋한 객실 식사를 호평."],["2026-08-08","후지산 전망과 식사·기념일 응대를 호평."],["2026-08-17","넓은 객실은 인정했으나 체크인 대기와 조식에 아쉬움."],["2026-06-08","호수·후지산 조망, 객실 청결, 다양한 요리를 호평."]]
 },
 "karui":{
  "hotel":"프린스호텔 웨스트 · 軽井沢プリンスホテル ウエスト","tags":["reviewFood","reviewRoom"],"priority":-1,"mobility":"긴 실내·실외 이동에 주의",
  "praise":["풍성한 아침 식사","리뉴얼 객실의 청결함","쇼핑 접근성"],
  "summary":"아침 식사와 객실에 대한 칭찬이 있습니다. 반면 객실에서 온천·식당까지 멀다는 지적이 서로 다른 후기에서 반복됩니다.",
  "travel":"나리타→도쿄역→신칸센→호텔로 연결합니다. 공항 환승에 더해 리조트 내부 이동도 고려해야 합니다.",
  "room":"코티지보다 호텔동을 먼저 비교하고, 식당·온천·엘리베이터와 가까운 객실을 요청하세요. 같은 호텔동에서도 객실 위치에 따라 거리가 달랐습니다.",
  "meal":"뷔페의 종류와 맛은 긍정적입니다. 식당까지 걷는 거리와 음식 운반 부담은 별개입니다. 겨울에는 온천으로 가는 복도·로비가 추웠다는 후기도 있습니다.",
  "caution":"현재 동행 조건에서는 우선순위를 낮춥니다. 온천·식당 가까운 객실을 확보하면 다시 비교할 수 있습니다.",
  "source":"https://www.ikyu.com/00000928/review/","official":"https://www.princehotels.co.jp/karuizawa-west/faq/",
  "samples":[["2026-10-15","조식과 온천은 호평, 객실 온도 조절에는 아쉬움."],["2026-09-11","조식의 종류·맛은 만족했으나 온천이 멀다고 평가."],["2026-07-15","대욕장과 레스토랑이 멀어 피곤했다는 의견."],["2026-06-23","디럭스 테라스 트윈의 청결함과 가까운 스파를 호평."],["2026-02-03","식사는 만족했지만 겨울철 온천 이동 중 추위가 부담이었다는 의견.","https://www.ikyu.com/00000928/review/p2/"]]
 },
 "yufuin":{
  "hotel":"바이엔 · 由布院 梅園 GARDEN RESORT","tags":["reviewFood","reviewView","reviewRoom"],"priority":0,"mobility":"별채·온천의 계단 확인 필수",
  "praise":["유후다케가 보이는 노천탕","맛있는 식사","넓고 차분한 별채"],
  "summary":"노천탕 전망과 식사를 칭찬한 후기가 있습니다. 별채가 넓고 편했다는 평가와 함께 객실 노후감·서비스 편차도 언급됩니다.",
  "travel":"공항버스로 유후인에 도착한 뒤 바이엔까지 택시를 연결하세요. 공식 안내는 유후인역에서 차량 약 5분입니다. 마을 관광도 짐을 맡긴 뒤 짧게 나누는 편이 좋습니다.",
  "room":"2026년 후기에 로비에서 계단을 올라 별채·욕탕으로 이동했다는 설명이 있습니다. 계단 없는 객실→식당→욕탕 경로가 가능한지 확인 전에는 편한 동선으로 분류하지 않습니다.",
  "meal":"맛과 풍성한 양을 칭찬하지만 양이 많았다는 의견도 있습니다. 소식하는 분을 위한 양 조정과 의자 좌석, 저녁 시작 시각을 문의하세요.",
  "caution":"마을 분위기는 좋지만, 이번 여행에서는 온천·식당까지 계단을 피할 수 있는 객실인지가 결정 조건입니다.",
  "source":"https://www.ikyu.com/00001993/review/","official":"https://www.yufuin-baien.com/access/",
  "samples":[["2026-03-03","5인 별채 숙박을 호평. 로비에서 별채·욕탕 쪽으로 계단 이동을 설명."],["2025-11-12","노천탕 전망·식사를 호평. 식사량이 많고 객실에 노후감이 있었다는 의견."],["2025-10-21","어머니와 숙박하며 식사와 직원 응대를 호평."],["2025-06-23","넓고 차분한 별채·노천탕·요리는 호평, 세부 요청 대응에는 아쉬움."]]
 },
 "beppu":{
  "hotel":"스기노이 · 杉乃井ホテル","tags":["reviewFood","reviewView"],"priority":0,"mobility":"숙박동·뷔페 동선 확인 필수",
  "praise":["전망 온천","다양한 뷔페","호텔 안의 즐길 거리"],
  "summary":"온천 전망과 뷔페를 즐겼다는 후기가 있습니다. 같은 시설에서도 혼잡과 긴 이동, 연박 식단의 반복을 불편해한 후기가 함께 확인됩니다.",
  "travel":"오이타공항을 이용하면 현지 이동을 줄이기 쉽지만, 김해팀의 후쿠오카 경로와는 다릅니다. 기타하마 하차 후 호텔까지 택시를 쓰거나 벳푸역 셔틀로 갈아타야 합니다.",
  "room":"사진의 호시관 객실과 소라유를 한 동선으로 생각하면 안 됩니다. 소라유 이용 대상은 공식 시설 페이지에서 소라관·호시관으로 안내하나, 객실 유형별 안내에 차이가 있어 예약 플랜으로 재확인해야 합니다. 이용할 식당·온천과 같은 숙박동, 엘리베이터 가까운 객실부터 비교하세요.",
  "meal":"뷔페 맛·종류에 대한 호평과 혼잡·음식 운반의 피로가 공존합니다. 가족의 음식 운반 도움, 이동하기 편한 좌석, 덜 붐비는 식사 시간을 확인하세요.",
  "caution":"호텔에만 머문다고 걷는 양이 적지는 않습니다. 시설을 여러 동으로 오가는 계획은 줄이세요.",
  "source":"https://www.ikyu.com/00001104/review/","official":"https://suginoi.orixhotelsandresorts.com/access/",
  "samples":[["2026-10-26","대형 뷔페의 음식 운반과 고령자의 긴 시설 이동을 부담으로 평가. 시설 이용 자격은 공식 안내로 별도 확인."],["2026-09-21","소라관 연박 중 청소·식사 대기와 반복되는 뷔페 메뉴에 아쉬움."],["2026-09-07","소라관 뷔페를 매우 긍정적으로 평가."],["2026-08-07","온천·전망은 호평, 혼잡한 뷔페와 식사에는 아쉬움."]]
 },
 "arima":{
  "hotel":"아리마 그랜드 · 有馬グランドホテル","tags":["reviewFood","reviewCare"],"priority":2,"mobility":"송영을 연결해 우선 비교",
  "praise":["어르신을 배려한 응대","온천과 객실","계절 식사"],
  "summary":"어르신 동반 후기에서 응대와 온천·식사 만족이 확인됩니다. 휴식 의자와 목욕용 지팡이가 도움이 됐다는 구체적인 경험도 있습니다.",
  "travel":"간사이공항→산노미야→아리마로 환승합니다. 마을 경사 구간을 걸어 오르기보다 정류장·역에서 호텔 송영을 연결하는 조건으로 비교하세요.",
  "room":"대형 호텔이므로 식당·온천과 가까운 객실을 요청하세요. 침대가 있는 객실, 문턱·욕실 경로를 확인하고 필요한 보조용품은 사전에 문의하세요.",
  "meal":"계절 요리와 아침 식사에 대한 호평이 있습니다. 테이블에서 먹는 저녁 코스 플랜을 고르면 뷔페 왕복을 줄일 수 있습니다. 조식 방식은 예약 플랜마다 확인하세요.",
  "caution":"어르신 배려 후기와 식사를 중시할 때 먼저 비교할 후보입니다. 공항 환승과 마을 언덕까지 편하다는 뜻은 아닙니다.",
  "source":"https://travel.rakuten.co.jp/HOTEL/25128/review.html","official":"https://www.arima-gh.jp/etc/barrier/",
  "samples":[["2026-10-31","어르신과 숙박하며 세심한 응대·객실 노천탕·조식을 호평."],["2026-10-27","객실·온천·식사에 만족. 목욕용 지팡이와 곳곳의 휴식 의자를 언급."],["2026-10-03","고령의 가족을 일찍 객실로 안내한 배려와 계절 식사는 호평. 이불·조명 때문에 숙면에는 아쉬움.","https://hotel.travel.rakuten.co.jp/hotellist/list/customerVoice.do?TB_iframe=true&f_hotel_no=25128&height=570&width=650"]]
 },
 "hakone":{
  "hotel":"유모토 후지야 · 湯本富士屋ホテル","tags":["reviewFood","easyStay"],"priority":2,"mobility":"역→숙소 이동은 우선 비교",
  "praise":["역에서 가까움","고령 동반 시 편한 접근","저녁 식사"],
  "summary":"고령의 어머니와 숙박한 후기에서 역 접근성·온천·식사를 호평했습니다. 반면 조식 공간 혼잡, 추가 침대를 넣은 객실의 좁은 동선은 확인할 부분입니다.",
  "travel":"공식 안내는 유모토역에서 도보 약 3분. 다리를 건넌 뒤 외부 엘리베이터로 계단을 피할 수 있습니다. 단, 나리타에서의 환승과 호수·미술관까지의 이동은 별도입니다.",
  "room":"3명이 트윈+추가 침대를 쓰면 좁았다는 후기가 있어, 6명은 객실 수와 침대 배치를 먼저 비교하세요. 2월에는 레인보우 플라자 객실 판매가 중단됩니다.",
  "meal":"저녁 코스에 대한 칭찬이 있습니다. 의자에 앉아 먹는 저녁과 달리 조식 뷔페는 혼잡·음식 운반을 고려하세요.",
  "caution":"2027년 2월 21~26일 숙박은 휴관으로 제외해야 합니다. 그 외 2월 날짜도 공사 영향과 예약 가능한 객실을 확인하세요.",
  "notice":"2027.02.21–26 휴관 · 레인보우 플라자 객실 01.12–03.13 판매 중단 예정",
  "noticeSources":[["휴관 공지","https://www.yumotofujiya.jp/news/closing.html"],["공사·객실 판매 중단","https://www.yumotofujiya.jp/news/rainbow2026.html"]],
  "source":"https://www.jalan.net/yad328838/kuchikomi/","official":"https://www.yumotofujiya.jp/facilities/index.html",
  "samples":[["2026-07-08","고령의 어머니와 숙박. 역 접근성·깨끗한 욕탕·식사·화양실을 호평.","https://www.jalan.net/yad328838/kuchikomi/tag/dining/"],["2026-08-24","역에서 가까운 점은 호평, 조식 뷔페 공간이 좁다고 평가."],["2026-07-19","트윈 객실에 추가 침대를 놓은 3인 투숙에서 좁은 동선을 지적."],["2026-07-16","70대 모임의 화양실 이용과 저녁 코스를 호평."]]
 },
 "comico":{"summary":"공개 숙박후기의 본문 표본이 부족해 반복 만족 키워드와 어르신 동선 가점에는 반영하지 않았습니다. 지도 서비스의 미술관 방문 후기는 숙박 후기와 섞지 않았습니다. 독채·건축을 원하는 경우 별도 비교하되, 6명 정원·동별 계단·외부 저녁 식사 이동을 확인하세요.","source":"https://www.ikyu.com/00051484/review/","official":"https://www.camy.oita.jp/houseguide"}
}
;
(()=>{
 const keywords={onsen:'온천에서 쉬기',fuji:'후지산 전망',lake:'호수 풍경',village:'온천마을 산책',art:'미술·건축',shopping:'쇼핑',resort:'호텔 안에서 여유롭게',direct:'공항에서 직행버스',reviewFood:'식사에 좋은 후기',reviewView:'전망·온천에 좋은 후기',reviewRoom:'객실에 좋은 후기',reviewCare:'어르신 배려 후기',easyStay:'역에서 숙소까지 가깝게'};
 const profiles={
 kawa:{tags:['onsen','fuji','lake','food','direct'],reason:'후지산과 호수를 바라보고, 료칸의 온천과 식사를 즐기는 일정.',source:'https://www.japan.travel/en/spot/1329/',photos:[['kawa-0','코난소 · 후지산 전망 객실','객실 예시'],['kawa-1','코난소 · 대욕장','온천'],['kawa-2','코난소 · 요리','식사 예시']]},
 karui:{tags:['shopping','resort','food'],reason:'숲속 리조트에서 쉬다가 쇼핑플라자와 레스토랑을 둘러보는 일정.',source:'https://www.princehotels.co.jp/karuizawa-west/',photos:[['karui-0','프린스호텔 웨스트 · 입구','숙소 외관'],['karui-1','프린스호텔 웨스트 · 프림로즈','레스토랑'],['karui-2','프린스 쇼핑플라자','주변 명소']]},
 yufuin:{tags:['onsen','lake','village','art','food','direct'],reason:'긴린코와 온천마을, 독채 건축을 보고 료칸에서 쉬는 일정.',source:'https://www.japan.travel/en/spot/707/',photos:[['yufuin-3','바이엔 · 침대가 있는 객실','객실 예시'],['yufuin-4','바이엔 · 노천탕','온천'],['yufuin-5','바이엔 · 요리','식사 예시'],['yufuin-1','바이엔 · 정원과 건물','숙소 외관'],['comico-0','COMICO ART HOUSE · 竹동 입구','추가 숙소 후보'],['comico-1','COMICO ART HOUSE · 竹동 목재 천장','추가 숙소 후보']]},
 beppu:{tags:['onsen','resort','food','direct'],reason:'전망 온천과 호텔 식사를 중심으로 쉬고, 지옥온천을 짧게 관광하는 일정.',source:'https://suginoi.orixhotelsandresorts.com/',photos:[['beppu-0','스기노이 · 호시관 객실','객실 예시'],['beppu-1','스기노이 · 소라유','숙박동·객실별 이용 조건 확인'],['beppu-2','스기노이 · TERRACE & DINING SORA','레스토랑']]},
 arima:{tags:['onsen','village','food'],reason:'전통 온천마을의 골목과 료칸 식사에 고베 관광을 곁들이는 일정.',source:'https://www.japan.travel/en/spot/1025/',photos:[['arima-0','아리마 그랜드 · 중앙관 객실','객실 예시'],['arima-1','아리마 그랜드 · 운카이','전망 대욕장'],['arima-2','아리마 그랜드 · 가이세키','식사 예시']]},
 hakone:{tags:['onsen','lake','art','food'],reason:'온천에 아시노코 호수와 미술관을 더하고, 유모토에 머무는 일정.',source:'https://www.hakonenavi.jp/international/en/winter',photos:[['hakone-0','유모토 후지야 · 객실','객실 예시'],['hakone-1','유모토 후지야 · 대욕장','온천'],['hakone-2','유모토 후지야 · 일본 요리','식사 예시']]}
 };
 const official={kawa:'https://www.konansou.com/en/',karui:'https://www.princehotels.co.jp/karuizawa-west/',yufuin:'https://www.yufuin-baien.com/',beppu:'https://suginoi.orixhotelsandresorts.com/',arima:'https://www.arima-gh.jp/',hakone:'https://www.yumotofujiya.jp/',comico:'https://www.camy.oita.jp/take'};
 const scenic=['카와구치코 · 후지산과 호수','카루이자와 · 겨울 풍경','유후인 · 긴린코','벳푸 · 우미지고쿠 (관람용 온천)','아리마 · 온천마을','하코네 · 아시노코'];
 const galleries=DESTINATIONS.map((d,i)=>[{src:PHOTO_ASSETS[d.id],caption:scenic[i],kind:'여행지 풍경',scope:'scenery',source:d.sources[d.sources.length-1]},...SCENIC_DATA[d.id].map(([key,caption,note])=>({src:SCENIC_ASSETS[key],caption,note,kind:'풍경·주요 관광지',scope:'scenery',source:SCENIC_MANIFEST.find(p=>p.key===key).source})),...profiles[d.id].photos.map(([key,caption,kind])=>({src:PHOTO_GALLERY_ASSETS[key],caption,kind,scope:'stay',source:official[key.split('-')[0]]}))]);
 const chosen=new Set();
 const list=document.querySelector('#finder-results'),status=document.querySelector('#finder-status');
 document.querySelector('#finder-keywords').innerHTML=Object.entries(keywords).filter(([key])=>!key.startsWith('review')&&key!=='easyStay').map(([key,label],i)=>`${i===8?'<p class="keyword-group-label">후기와 이동에서 중요하게 볼 점</p>':''}<label><input type="checkbox" value="${key}"><span>${label}</span></label>`).join('');
 function photoButton(i,n,caption=false){const photo=galleries[i][n];return `<button type="button" data-photo-region="${i}" data-photo-index="${n}" data-photo-scope="${photo.scope}" aria-label="${photo.caption} 사진 크게 보기"><img src="${photo.src}" alt="${photo.caption}" loading="lazy" decoding="async">${caption?`<span class="scenic-caption">${photo.caption}</span>`:''}</button>`}
 function notice(r){return r.notice?`<p class="hotel-notice">${r.notice}<br>${r.noticeSources.map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`).join(' · ')}</p>`:''}
 function render(){
  const senior=false;
  const results=DESTINATIONS.map((d,i)=>({d,i,matches:[...chosen].filter(k=>profiles[d.id].tags.includes(k))})).sort((a,b)=>b.matches.length-a.matches.length||(senior?REVIEW_DATA[b.d.id].priority-REVIEW_DATA[a.d.id].priority:0)||a.i-b.i);
  const positive=results.filter(r=>r.matches.length>0),exact=results.filter(r=>chosen.size&&r.matches.length===chosen.size);
  const shown=chosen.size?positive:results;
  status.textContent=!chosen.size?(senior?'어르신 동선을 고려해 먼저 비교할 순서예요':'여섯 지역의 분위기를 먼저 둘러보세요'):exact.length?`선택한 ${chosen.size}개 조건에 모두 맞는 지역 ${exact.length}곳`:`모든 조건에 맞는 지역은 없어요 · 가까운 조건부터 비교해보세요`;
  list.innerHTML=shown.map(({d,i,matches})=>{const r=REVIEW_DATA[d.id],missing=[...chosen].filter(k=>!matches.includes(k));const scenes=galleries[i].map((p,n)=>p.scope==='scenery'?photoButton(i,n,true):'').join('');return `<article class="finder-result" data-result="${d.id}"><div class="finder-pictures ${SCENIC_DATA[d.id].length===1?'two-scenes':''}">${scenes}</div>${chosen.size?`<p class="finder-match">${matches.length===chosen.size?'모든 조건 일치':'일부 조건 일치'} · ${matches.length} / ${chosen.size}</p>`:''}<h3>${d.name}<span lang="ja">${JAPANESE[i].name}</span></h3><p class="finder-reason">${profiles[d.id].reason}</p>${chosen.size?`<p class="finder-reason">${matches.map(k=>keywords[k]).join(' · ')}</p>`:''}${missing.length?`<p class="finder-missing">이번 기준에서는 확인되지 않았어요: ${missing.map(k=>keywords[k]).join(' · ')}</p>`:''}<a class="finder-jump" href="#place-${d.id}">숙소·식사·동선 자세히 보기 ↓</a></article>`}).join('');
 }
 document.querySelector('#finder-keywords').addEventListener('change',e=>{if(e.target.checked)chosen.add(e.target.value);else chosen.delete(e.target.value);render()});
 document.querySelector('#finder-reset').addEventListener('click',()=>{chosen.clear();document.querySelectorAll('#finder-keywords input').forEach(x=>x.checked=false);render()});
 document.querySelector('#senior-first').addEventListener('change',render);
 function addGalleries(){DESTINATIONS.forEach((d,i)=>{const chapter=document.querySelector('#place-'+d.id);if(!chapter||chapter.querySelector('.region-gallery'))return;const r=REVIEW_DATA[d.id],gallery=document.createElement('div');gallery.className='region-gallery';gallery.innerHTML=`<div class="review-detail"><div class="region-gallery-head"><h4>어르신과 함께, 숙소를 고르는 기준</h4><span>${r.hotel}</span></div><p class="review-praise">후기 키워드 · ${r.praise.join(' · ')}</p><p>${r.summary}</p>${notice(r)}<dl class="senior-details"><div><dt>공항·역에서 숙소까지</dt><dd>${r.travel}</dd></div><div><dt>객실·온천 동선</dt><dd>${r.room}</dd></div><div><dt>식사와 편의</dt><dd>${r.meal}</dd></div></dl><p class="senior-verdict"><strong>이번 동행 기준</strong> ${r.caution}</p><p class="review-links"><a href="${r.official}" target="_blank" rel="noopener noreferrer">공식 시설·접근 안내 ↗</a> · <a href="${r.source}" target="_blank" rel="noopener noreferrer">후기 원문 ↗</a></p><details class="review-evidence"><summary>읽은 후기 ${r.samples.length}건 · 날짜와 요약</summary><ul>${r.samples.map(([date,text,url])=>`<li><a href="${url||r.source}" target="_blank" rel="noopener noreferrer">${date} ↗</a><span>${text}</span></li>`).join('')}</ul><p>2026.11.04 확인. 후기 본문의 한국어 요약이며 전체 후기 빈도나 최신 순위를 뜻하지 않습니다. 객실·식사 플랜이 서로 다르고, 부정 후기도 함께 반영했습니다.</p></details></div><div class="region-gallery-head"><h4>머무는 풍경</h4><span>숙소 사진 · 누르면 크게 볼 수 있어요</span></div><div class="region-gallery-grid">${galleries[i].map((ph,n)=>ph.scope==='stay'?`<figure>${photoButton(i,n)}<figcaption>${ph.caption}<small>${ph.kind}</small><a href="${ph.source}" target="_blank" rel="noopener noreferrer">공식 사진 출처 ↗</a></figcaption></figure>`:'').join('')}</div>${d.id==='yufuin'?`<p class="comico-review-note"><strong>COMICO의 후기 판단</strong> ${REVIEW_DATA.comico.summary} <a href="${REVIEW_DATA.comico.source}" target="_blank" rel="noopener noreferrer">숙박 후기 확인 ↗</a></p>`:''}<p class="gallery-notice">계절·객실 유형·숙박동에 따라 실제 모습과 이용 가능한 시설이 달라집니다. 사진의 객실·식사가 위 계획 예산에 포함된다는 뜻은 아닙니다.</p>`;chapter.querySelector('.budget-strip').after(gallery)})}
 const previousRender=renderRegion;renderRegion=function(){previousRender();addGalleries()};
 const dialog=document.querySelector('#travel-photo-viewer');let currentRegion=0,currentPhoto=0,returnFocus=null;
 function showPhoto(){const album=galleries[currentRegion],photo=album[currentPhoto];dialog.querySelector('img').src=photo.src;dialog.querySelector('img').alt=photo.caption;document.querySelector('#photo-viewer-caption').textContent=`${photo.caption} · ${currentPhoto+1} / ${album.length}${photo.note?' — '+photo.note:''}`;dialog.querySelector('.photo-source').href=photo.source;}
 document.addEventListener('click',e=>{const button=e.target.closest('[data-photo-region]');if(!button)return;returnFocus=button;currentRegion=Number(button.dataset.photoRegion);currentPhoto=Number(button.dataset.photoIndex);showPhoto();dialog.showModal()});
 function step(delta){currentPhoto=(currentPhoto+delta+galleries[currentRegion].length)%galleries[currentRegion].length;showPhoto()}
 dialog.querySelector('.photo-close').addEventListener('click',()=>dialog.close());dialog.querySelector('.photo-prev').addEventListener('click',()=>step(-1));dialog.querySelector('.photo-next').addEventListener('click',()=>step(1));
 dialog.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();dialog.close()}if(e.key==='ArrowLeft'){e.preventDefault();step(-1)}if(e.key==='ArrowRight'){e.preventDefault();step(1)}});
 dialog.addEventListener('close',()=>{if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true})});
 render();addGalleries();
})();
