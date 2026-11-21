import type { Profile } from "./types";

export const profile: Profile = {
  name: "장무현",
  role: "iOS · 앱 개발",
  tagline: "함께 만들고, 함께 다음으로. 문제를 화면과 기능으로 구현하고 출시까지 책임집니다.",
  birthYear: 2002,
  university: "아주대학교",
  department: "소프트웨어학과",
  portrait: "/profile/portrait.jpeg",
  about:
    "저는 앱에서 문제가 생긴 원인을 찾고, 해결 방식을 선택한 이유를 팀에 설명할 수 있는 개발자가 되고 싶습니다. 가족 소통 앱 ‘하루한번’을 팀 리더로 이끌며 Flutter로 핵심 화면과 기능을 구현하고, 팀원들과 함께 iOS 앱 출시까지 경험했습니다. 디자이너·백엔드와 협업하며 실제 기기에서의 사용 경험을 다듬었고, AI를 활용해 문제 해결과 학습 속도를 높여 왔습니다. 넥스터즈에서 팀과 함께 iOS 앱을 만들며, 맡은 역할과 결과에 책임지는 개발자로 성장하고 싶습니다.",
  strengths: [
    {
      title: "원인 파악과 선택의 근거",
      description:
        "React Native에서 Flutter로 전환한 이유처럼, 문제를 진단하고 기술·구조 선택에 대한 근거를 팀에 설명할 수 있습니다.",
    },
    {
      title: "출시까지 밀어붙이는 책임감",
      description:
        "팀 리더로서 앱 구조를 개편하고, 핵심 기능을 구현·배포해 Android / iOS 스토어 출시까지 책임졌습니다.",
    },
    {
      title: "다른 직군과의 협업",
      description:
        "디자이너·센터 관계자와 의견을 맞추며 화면과 기능을 다듬고, 배운 점과 경험을 팀과 나눠 왔습니다.",
    },
  ],
  achievements: [
    {
      kind: "award",
      title: "공중화장실 혁신 아이디어 공모전 · 협회장상",
      description:
        "공중화장실 혁신 아이디어 공모전에서 협회장상을 수상했습니다.",
    },
    {
      kind: "cert",
      title: "SQLD",
      description:
        "SQL 개발자 자격증을 보유하고 있으며, 데이터 조회·모델링 관점에서 문제를 구조화하는 데 활용합니다.",
    },
  ],
  techStacks: [
    {
      category: "Mobile · iOS",
      items: ["Flutter", "Dart", "React Native", "iOS 배포"],
    },
    {
      category: "Frontend",
      items: ["TypeScript", "React", "Next.js"],
    },
    {
      category: "Backend · Cloud",
      items: ["NestJS", "Node.js", "Java", "Spring Boot", "AWS EC2", "AWS RDS", "AWS S3"],
    },
    {
      category: "AI · 협업",
      items: ["OpenAI API", "SQL", "Notion", "Jira", "Confluence"],
    },
  ],
  contactEmail: "dnsfl2313@gmail.com",
  contactPhone: "010-5309-8813",
  links: [],
};
