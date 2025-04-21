export const projects = [
  {
    name: 'AI 블로그 자동 포스팅',
    productionPeriod: '2024.10 ~ 2024.12',
    images: [],
    mainContent: {
      content:
        'AI를 활용한 블로그 자동 포스팅 프로그램 입니다.\n ' +
        '키워드를 기반으로 100% 자동 포스팅할 수 있는 프로그램 입니다. (N사 블로그)\n' +
        'ChatGPT를 이용했고 아무 키워드 입력시 블로그 컨텐츠가 생성됩니다.',
      mainFn: [
        '썸네일 자동 제작',
        '이미지 자동 삽입 (필사베이 무료 API 이용)',
        '사진 자동 삽입',
        '스티커 삽입 가능',
        'SEO 최적화',
      ],
      back: ['Python'],
      git: { href: 'https://github.com/bell-ho/my-blog', title: 'AI 블로그 포스팅' },
    },
  },
  {
    name: 'MY-BLOG',
    productionPeriod: '2023.02 ~ 2022.3',
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
      front: ['React.js', 'Next.js', 'Next-Auth', 'React-Query'],
      back: ['SpringBoot', 'JPA', 'MYSQL'],
      deploy: ['AWS EC2', 'AWS RDS', 'AWS S3', 'AWS ROUTE53'],
      git: { href: 'https://github.com/bell-ho/my-blog', title: 'MY-BLOG' },
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
