import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { IconVerifyCard, IconGenderCardHost, IconManageCardHost, HouseCard } from '../components/IconCards'

export default function HostPage() {
  return (
    <>
      <Nav />
      <div style={{ paddingTop: '64px' }}>

        {/* ── 1. 옛날 하숙, 기억나세요? ── */}
        <section className="intro-section">
          <div className="container">
            <div className="sec-header">
              <div className="section-label">host</div>
              <h2 className="sec-title">옛날 하숙, 기억나세요?</h2>
            </div>
            <div className="intro-text-group">
              <p className="intro-text">밥도 챙겨야 하고, 학생도 직접 구해야 했던 하숙</p>
              <p className="intro-text">지금은 그럴 필요 없습니다.</p>
              <p className="intro-text">홈투게더로 해결하세요.</p>
              <div className="intro-spacer" />
              <p className="intro-text">밥 제공 없이 방 한 칸만으로도 충분합니다.</p>
              <p className="intro-text">학생은 홈투게더가 관리합니다.</p>
              <div className="intro-spacer" />
              <button
                className="cta-btn"
                onClick={() => document.getElementById('host-cta').scrollIntoView({ behavior: 'smooth' })}
              >
                문의하기
              </button>
            </div>
          </div>
        </section>

        {/* ── 2. 이미 시작하신 분들이 있습니다 ── */}
        <section className="bubbles-section">
          <div className="container">
            <div className="bubbles-container">
              <div className="sec-header" style={{ marginBottom: '12px' }}>
                <div className="section-label">host</div>
                <h2 className="sec-title">이미 시작하신 분들이 있습니다.</h2>
              </div>
              <div className="bubble-stats">
                <p className="bubble-stat-sub">현재 집주인 30명 이용 중</p>
                <p className="bubble-apartments">
                  동부아파트, 한보아파트, 삼익포레스트, 동신아파트, 하계 장미아파트, 현대아파트
                </p>
              </div>
              <div className="bubbles-list">
                <div className="bubble blue">
                  "용돈도 생기고, 혼자 있는 느낌이 아니에요."
                  <div className="bubble-meta">-동부아파트 거주, 70대 여성-</div>
                </div>
                <div className="bubble white">
                  "남는 방이 아까워서 시작했는데<br />매달 용돈도 생기고 도움이 많이 됩니다."
                </div>
                <div className="bubble blue">
                  "같이 지내는 학생이 무거운 것도 들어주고<br />말동무도 되어줘서 혼자 있는 느낌이 덜해요."
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. 남는 방 아깝지 않으세요? ── */}
        <section className="benefit-section">
          <div className="container">
            <div className="two-col">
              <div>
                <div className="sec-header">
                  <div className="section-label">host</div>
                  <h2 className="sec-title">남는 방 아깝지 않으세요?<br />거주하는 집에 남는 방 하나로 매달 수익</h2>
                </div>
                <div className="benefit-bullets">
                  <p className="benefit-bullet">별도 투자 없음</p>
                  <p className="benefit-bullet">비어있는 방 활용</p>
                  <p className="benefit-bullet">연 600만원 추가 수입</p>
                </div>
                <p className="benefit-desc">
                  의미 없던 빈 공간이 매달 수입을 만들어주고,<br />
                  학생들에게는 새로운 주거공간을 만들어줍니다.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <HouseCard />
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. 이런 걱정 있으신가요? ── */}
        <section className="concern-section">
          <div className="container">
            <div className="sec-header">
              <div className="section-label">host</div>
              <h2 className="sec-title">이런 걱정 있으신가요?</h2>
            </div>
            <div className="concerns-list">
              <div className="bubble white" style={{ maxWidth: '65%', alignSelf: 'flex-start' }}>
                모르는 사람이라 불안해요.
              </div>
              <div className="bubble white" style={{ maxWidth: '65%', alignSelf: 'flex-end' }}>
                같이 살다 문제 생길까 걱정돼요.
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. 홈투게더가 해결합니다 ── */}
        <section className="solution-section">
          <div className="container">
            <div className="sec-header">
              <div className="section-label">host</div>
              <h2 className="sec-title">홈투게더가 해결합니다.</h2>
            </div>
            <div className="solution-cards">
              <div className="solution-card">
                <IconVerifyCard />
                <p className="solution-label">대학생 신원 검증 및<br />인증 후 연결</p>
              </div>
              <div className="solution-card">
                <IconGenderCardHost />
                <p className="solution-label">같은 성별만 입주</p>
              </div>
              <div className="solution-card">
                <IconManageCardHost />
                <p className="solution-label">생활 규칙 관리 및<br />중간 조율</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. 단순 연결이 아니라 관리까지 ── */}
        <div className="management-banner">
          <div className="container">
            <p className="management-banner-text">단순 연결이 아니라 관리까지</p>
          </div>
        </div>

        {/* ── 7. 상담 안내 / CTA ── */}
        <section className="cta-section" id="host-cta">
          <div className="container">
            <div className="cta-inner">
              <div className="cta-info">
                <p className="cta-heading">상담안내</p>
                <p className="cta-phone">010-4587-9428</p>
                <p className="cta-desc">전화로 바로 문의가 가능합니다.</p>
              </div>
              <a
                className="cta-btn"
                href="https://smore.im/form/ylJRnHRtlq"
                target="_blank"
                rel="noreferrer"
              >
                호스트 상담 신청하기
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}
