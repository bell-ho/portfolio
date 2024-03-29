export const projects = [
  {
    name: 'MY-BLOG',
    productionPeriod: '2023.02 ~ 2022.3',
    images: [
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/project/myblog/myblog1.jpg',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/project/myblog/myblog2.jpg',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/project/myblog/myblog3.jpg',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/project/myblog/myblog4.jpg',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/project/myblog/myblog5.gif',
    ],
    mainContent: {
      content:
        '나의 일상을 공유하는 서비스 MY-BLOG 입니다.\n ' +
        '기존의 MEMO-LIFE 프로젝트의 스택을 변경하고 기능을 업그레이드하여 제작하였습니다.',
      mainFn: [
        '소셜 로그인-로그아웃',
        '게시글 업로드',
        '게시글 숨기기',
        '숨겨진 게시글 태그 검색',
        '좋아요-싫어요',
      ],
      front: ['React.js', 'Next.js', 'Next-Auth', 'React-Query'],
      back: ['SpringBoot', 'JPA', 'MYSQL'],
      deploy: ['AWS EC2', 'AWS RDS', 'AWS S3', 'AWS ROUTE53'],
      git: { href: 'https://github.com/bell-ho/my-blog', title: 'MY-BLOG' },
    },
  },
  {
    name: 'Memo-Life',
    productionPeriod: '2022.05 ~ 2022.7',
    images: [
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/project/memo-life/memo1.jpg',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/project/memo-life/memo2.jpg',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/project/memo-life/memo3.jpg',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/project/memo-life/memo4.jpg',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/project/memo-life/memo5.jpg',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/project/memo-life/memo6.jpg',
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
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/project/travel/1.png',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/project/travel/2.png',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/project/travel/3.png',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/project/travel/4.png',
      'https://jh-mybucket.s3.ap-northeast-2.amazonaws.com/uploads/project/travel/5.jpg',
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
