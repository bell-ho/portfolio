function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const back = [
  `https://img.shields.io/badge/JAVA-${getRandomColor()}?style=for-the-badge&logo=java&logoColor=white`,
  `https://img.shields.io/badge/Spring-${getRandomColor()}?style=for-the-badge&logo=Spring&logoColor=white`,
  `https://img.shields.io/badge/Spring Boot-${getRandomColor()}?style=for-the-badge&logo=Spring Boot&logoColor=white`,
  `https://img.shields.io/badge/JPA-${getRandomColor()}?style=for-the-badge&logo=JPA&logoColor=white`,
  `https://img.shields.io/badge/oracle-${getRandomColor()}?style=for-the-badge&logo=oracle&logoColor=white`,
  `https://img.shields.io/badge/mysql-${getRandomColor()}?style=for-the-badge&logo=mysql&logoColor=white`,
  `https://img.shields.io/badge/mariaDB-${getRandomColor()}?style=for-the-badge&logo=mariaDB&logoColor=white`,
];

export const front = [
  `https://img.shields.io/badge/html-${getRandomColor()}?style=for-the-badge&logo=html5&logoColor=white`,
  `https://img.shields.io/badge/css-${getRandomColor()}?style=for-the-badge&logo=css3&logoColor=white`,
  `https://img.shields.io/badge/javascript-${getRandomColor()}?style=for-the-badge&logo=javascript&logoColor=white`,
  `https://img.shields.io/badge/bootstrap-${getRandomColor()}?style=for-the-badge&logo=bootstrap&logoColor=white`,
  `https://img.shields.io/badge/mui-${getRandomColor()}?style=for-the-badge&logo=mui&logoColor=white`,
  `https://img.shields.io/badge/react-${getRandomColor()}?style=for-the-badge&logo=react&logoColor=black`,
  `https://img.shields.io/badge/React Query-${getRandomColor()}?style=for-the-badge&logo=React Query&logoColor=black`,
  `https://img.shields.io/badge/Redux Saga-${getRandomColor()}?style=for-the-badge&logo=Redux Saga&logoColor=black`,
  `https://img.shields.io/badge/next.js-${getRandomColor()}?style=for-the-badge&logo=next.js&logoColor=white`,
  `https://img.shields.io/badge/vue.js-${getRandomColor()}?style=for-the-badge&logo=vue.js&logoColor=white`,
];

export const versionControl = [
  `https://img.shields.io/badge/github-${getRandomColor()}?style=for-the-badge&logo=github&logoColor=white`,
  `https://img.shields.io/badge/gitlab-${getRandomColor()}?style=for-the-badge&logo=gitlab&logoColor=white`,
];
export const communication = [
  `https://img.shields.io/badge/jira-${getRandomColor()}?style=for-the-badge&logo=jira&logoColor=white`,
  `https://img.shields.io/badge/figma-${getRandomColor()}?style=for-the-badge&logo=figma&logoColor=white`,
];
export const certificate = [
  `https://img.shields.io/badge/정보처리기사-${getRandomColor()}?style=for-the-badge&logo=정보처리기사&logoColor=white`,
];
export const deployment = [
  `https://img.shields.io/badge/Amazon AWS-${getRandomColor()}?style=for-the-badge&logo=Amazon AWS&logoColor=white`,
  `https://img.shields.io/badge/Amazon S3-${getRandomColor()}?style=for-the-badge&logo=Amazon S3&logoColor=white`,
  `https://img.shields.io/badge/AWS Lambda-${getRandomColor()}?style=for-the-badge&logo=AWS Lambda&logoColor=white`,
  `https://img.shields.io/badge/Amazon RDS-${getRandomColor()}?style=for-the-badge&logo=Amazon RDS&logoColor=white`,
];
