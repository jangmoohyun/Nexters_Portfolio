import { profile } from "../data/profile";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="About" title="소개" />
        </Reveal>

        <Reveal>
          <div className={styles.intro}>
            <div className={styles.portraitBlock}>
              <figure className={styles.portrait}>
                <img src={profile.portrait} alt={`${profile.name} 증명사진`} />
              </figure>
              <p className={styles.identity}>{profile.name}</p>
              <p className={styles.birthYear}>{profile.birthYear}</p>
              <p className={styles.school}>
                {profile.university}
                <br />
                {profile.department}
              </p>
            </div>
            <div className={styles.introCopy}>
              <p className={`${styles.bio} ${styles.bioLead}`}>
                저는 앱에서 문제가 생긴{" "}
                <strong className={styles.emphasis}>원인</strong>을 찾고, 해결
                방식을{" "}
                <strong className={styles.emphasis}>선택한 이유</strong>를 팀에
                설명할 수 있는 개발자가 되고 싶습니다.
              </p>
              <p className={styles.bio}>
                가족 소통 앱 ‘
                <strong className={styles.emphasis}>하루한번</strong>
                ’을{" "}
                <strong className={styles.emphasis}>팀 리더</strong>로 이끌며{" "}
                <strong className={styles.emphasis}>Flutter</strong>로 핵심
                화면과 기능을 구현하고,
                <br />
                팀원들과 함께{" "}
                <strong className={styles.emphasis}>iOS 앱 출시</strong>까지
                경험했습니다.
              </p>
              <p className={`${styles.bio} ${styles.bioOneLine}`}>
                디자이너·백엔드와 협업하며{" "}
                <strong className={styles.emphasis}>실제 기기</strong>에서의
                사용 경험을 다듬었고,{" "}
                <strong className={styles.emphasis}>AI</strong>를 활용해 문제
                해결과 학습 속도를 높여 왔습니다.
              </p>
              <p className={`${styles.bio} ${styles.bioClose}`}>
                넥스터즈에서 팀과 함께{" "}
                <strong className={styles.emphasis}>iOS 앱</strong>을 만들며,
                맡은 역할과 결과에 책임지는 개발자로 성장하고 싶습니다.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className={styles.strengths}>
            <div className={styles.cards}>
              {profile.strengths.map((item) => (
                <article key={item.title} className={styles.card}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className={styles.achievements}>
            <h3 className={styles.subheading}>수상 · 자격</h3>
            <div className={styles.achieveGrid}>
              {profile.achievements.map((item) => (
                <article key={item.title} className={styles.achieveCard}>
                  <p className={styles.achieveKind}>
                    {item.kind === "award" ? "Award" : "Certificate"}
                  </p>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
