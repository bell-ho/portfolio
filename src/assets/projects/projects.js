export const projects = [
  {
    name: 'MY-BLOG',
    productionPeriod: '2022.02 ~ 2022.3',
    images: [],
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
      front: ['React.js', 'Next.js', 'Next-Auth', 'React-Query', 'MUI'],
      back: ['SpringBoot', 'JPA', 'QueryDsl', 'MYSQL'],
      deploy: ['AWS EC2', 'AWS RDS', 'AWS S3', 'AWS ROUTE53'],
      git: { href: 'https://github.com/bell-ho/my-blog', title: 'MY-BLOG' },
    },
  },
  {
      name: 'MY-PORTFOLIO',
      productionPeriod: '2023.03 ~ 2023.4',
      images: [],
      mainContent: {
        content:
          '개인 포트폴리오를 제작하고 공유하는 서비스 입니다.\n ' +
          '포트폴리오 제작이 막연한 사용자들을 위해 만들었습니다.',
        mainFn: [
          '소셜 로그인-로그아웃',
          '포트폴리오 제작',
          '포트폴리오 공유',
        ],
        front: ['React.js', 'Next.js', 'Next-Auth', 'React-Query', 'MUI'],
        back: ['SpringBoot', 'JPA', 'QueryDsl', 'MYSQL'],
        deploy: ['AWS EC2', 'AWS RDS', 'AWS S3', 'AWS ROUTE53'],
        git: { href: 'https://github.com/bell-ho/my-portfolio', title: 'MY-PORTFOLIO' },
      },
    },
  {
    name: 'MEMO-LIFE',
    productionPeriod: '2022.05 ~ 2022.7',
    images: [],
    mainContent: {
      content: `나의 메모를 공유하는 프로젝트.\n 나의 일상 생활을 공유하고 남의 일상에 공감하는 서비스 입니다.`,
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
    images: [],
    mainContent: {
      content: `전국에 있는 관광명소들의 정보를 제공하는 웹 페이지 입니다.\n 공공데이터 포털 API를 이용하여 제공하고 있습니다.`,
      mainFn: ['로그인', '게시판', '댓글', '갤러리', '상세 지도 안내'],
      front: ['JAVASCRIPT', 'JSP', 'JQuery', 'BOOTSTRAP', 'NAVER EDITOR'],
      back: ['Spring Framework', 'ORACLE', 'MYBATIS'],
      deploy: ['AWS'],
      git: { href: 'https://github.com/bell-ho/go-travel', title: 'GO-TRAVEL' },
    },
  },
];
