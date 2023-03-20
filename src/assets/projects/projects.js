export const projects = [
  {
    name: 'Memo-Life',
    productionPeriod: '2022.05 ~ 2022.7',
    images: [
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/memo1.jpg',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/memo2.jpg',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/memo3.jpg',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/memo4.jpg',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/memo5.jpg',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/memo6.jpg',
    ],
    mainContent: {
      content: `나만의 메모를 공유하는 프로젝트.\n 나의 일상 생활을 공유하고\n 남의 일상을 공감하는 서비스 입니다. `,
      mainFn: [
        '로그인',
        '게시판',
        '댓글',
        '팔로우-팔로잉',
        '메모 공유',
        '게시글 태그 기능',
        '좋아요 싫어요 기능',
      ],
      front: ['React.js', 'Next.js', 'Redux-Saga', 'React-Query'],
      back: ['Express', 'MYSQL'],
      deploy: ['AWS EC2', 'AWS S3'],
      git: { href: 'https://github.com/bell-ho/memo-life', title: 'MEMO-LIFE' },
    },
  },
  {
    name: 'GO-TRAVEL',
    productionPeriod: '2020.04 ~ 2020.05',
    images: [
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/travel1.png',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/travel2.png',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/travel3.png',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/travel4.png',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/travel5.jpg',
    ],
    mainContent: {
      content: `전국에 있는 관광명소들의\n 정보를 제공하는 웹 페이지 입니다.\n 공공데이터 포털 API를 이용하여\n 제공하고 있습니다.`,
      mainFn: ['로그인', '게시판', '댓글', '갤러리', '상세 지도 안내'],
      front: ['JAVASCRIPT', 'JSP', 'JQuery', 'BOOTSTRAP', 'NAVER EDITOR'],
      back: ['Spring Framework', 'ORACLE', 'MYBATIS'],
      deploy: ['AWS'],
      git: { href: 'https://github.com/bell-ho/go-travel', title: 'GO-TRAVEL' },
    },
  },
];
