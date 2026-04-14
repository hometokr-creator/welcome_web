import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { IconGenderCardGuest, IconHostVerifyCard, IconManageCardGuest } from '../components/IconCards'

// 아파트 사진 (로컬 이미지)
const imgApartment   = '/images/apt-photo.jpg'

// 피그마 349:79 기반 아파트 블록 일러스트 (390→300 스케일)
function ApartmentIllustration() {
  const s = (n) => `${(n * 300 / 390).toFixed(1)}px`
  const bldg = (l, t, w, h, extra = {}) => ({
    position: 'absolute', background: '#d9d9d9', borderRadius: '8px',
    left: s(l), top: s(t), width: s(w), height: s(h), ...extra,
  })
  const win = (l, t) => ({
    position: 'absolute', background: 'white', borderRadius: '4px',
    left: s(l), top: s(t), width: s(45), height: s(31),
  })
  const arch = (l, t, w, h) => ({
    position: 'absolute', background: '#3182f6',
    borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
    left: s(l), top: s(t), width: s(w), height: s(h),
  })
  return (
    <div style={{ position: 'relative', width: '300px', height: '300px', flexShrink: 0 }}>
      {/* 작은 상단 건물 */}
      <div style={bldg(102, 75, 58, 64, { borderRadius: '8px 8px 0 0' })} />
      {/* 왼쪽 중간 건물 */}
      <div style={bldg(85, 142, 130, 200)} />
      {/* 오른쪽 높은 건물 */}
      <div style={bldg(164, 50, 130, 292)} />
      {/* 왼쪽 건물 창문 */}
      {[[100,158],[155,158],[100,195],[155,195],[100,232],[155,232]].map(([x,y],i) => (
        <div key={`wl${i}`} style={win(x, y)} />
      ))}
      {/* 오른쪽 건물 창문 */}
      {[[179,75],[234,75],[179,113],[234,113],[234,150],[234,188],[234,226]].map(([x,y],i) => (
        <div key={`wr${i}`} style={win(x, y)} />
      ))}
      {/* 파란 덤불 (왼쪽) */}
      <div style={arch(68, 313, 77, 29)} />
      {/* 파란 덤불 (오른쪽) */}
      <div style={arch(193, 294, 128, 48)} />
    </div>
  )
}

export default function GuestPage() {
  return (
    <>
      <Nav />
      <div style={{ paddingTop: '64px' }}>

        {/* ── 1. 아직도 비싼 원룸 사세요? ── */}
        <section className="intro-section">
          <div className="container">
            <div className="two-col">
              <div>
                <div className="sec-header">
                  <div className="section-label">guest</div>
                  <h2 className="sec-title">아직도 비싼 원룸 사세요?</h2>
                </div>
                <div className="intro-text-group">
                  <p className="intro-text">좁고 비싼 원룸 대신</p>
                  <p className="intro-text">아파트에서</p>
                  <p className="intro-text">더 넓고 안전하게</p>
                </div>
              </div>
              <div>
                <img
                  className="apt-photo"
                  src={imgApartment}
                  alt="아파트 단지"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. 이미 시작하신 분들이 있습니다 ── */}
        <section className="bubbles-section">
          <div className="container">
            <div className="bubbles-container">
              <div className="sec-header" style={{ marginBottom: '12px' }}>
                <div className="section-label">guest</div>
                <h2 className="sec-title">이미 시작하신 분들이 있습니다.</h2>
              </div>
              <div className="bubble-stats">
                <p className="bubble-stat-sub">서울과학기술대학교 학생 30명이 이용 중</p>
                <p className="bubble-apartments">
                  동부아파트, 한보아파트, 삼익포레스트, 동신아파트, 하계장미아파트, 현대아파트
                </p>
              </div>
              <div className="bubbles-list">
                <div className="bubble blue">
                  "가격, 위치, 안정감까지 다 좋아요."
                  <div className="bubble-meta">-서울과학기술대학교, 2학년 학생-</div>
                </div>
                <div className="bubble white">
                  "요즘 원룸 너무 비싼데 관리비 포함 40만원대로<br />살 수 있어 좋고 학교 앞이라 생활하기 너무 편해요."
                </div>
                <div className="bubble white">
                  "홈투게더에서 중간 관리해줘서 같이 살아도 불편하지 않고<br />독립적인 생활이 가능해요."
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. 홈투게더는 다릅니다 ── */}
        <section className="benefit-section">
          <div className="container">
            <div className="two-col">
              <div>
                <div className="sec-header">
                  <div className="section-label">guest</div>
                  <h2 className="sec-title">홈투게더는 다릅니다.<br />부담없는 거주 시작해보세요.</h2>
                </div>
                <div className="benefit-bullets">
                  <p className="benefit-bullet">아파트 거주</p>
                  <p className="benefit-bullet">단기 거주 가능</p>
                  <p className="benefit-bullet">보증금 부담없이</p>
                </div>
                <p className="benefit-desc">
                  원룸보다 넓은 아파트에서 거주할 수 있으며<br />
                  학기 단위로 단기 거주가 가능합니다.
                </p>
              </div>
              <div className="benefit-icon" style={{ background: '#f9fafb' }}>
                <ApartmentIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. 월 40만원 대 가격 ── */}
        <section className="price-section">
          <div className="container" style={{ textAlign: 'center' }}>
            <p className="price-main">월 40만원 대, 보증금 100만원 미만</p>
            <p className="price-main">부담없는 가격으로</p>
            <p className="price-note">(매물마다 차이 존재)</p>
          </div>
        </section>

        {/* ── 5. 이런 걱정 있으신가요? ── */}
        <section className="concern-section">
          <div className="container">
            <div className="sec-header">
              <div className="section-label">guest</div>
              <h2 className="sec-title">이런 걱정 있으신가요?</h2>
            </div>
            <div className="concerns-list">
              <div className="bubble white" style={{ maxWidth: '70%', alignSelf: 'flex-start' }}>
                집주인과 같이 사는게 불편할까봐 걱정돼요.
              </div>
              <div className="bubble white" style={{ maxWidth: '60%', alignSelf: 'flex-end' }}>
                같이 살다 문제 생길까 걱정돼요.
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. 홈투게더가 해결합니다 ── */}
        <section className="solution-section">
          <div className="container">
            <div className="sec-header">
              <div className="section-label">guest</div>
              <h2 className="sec-title">홈투게더가 해결합니다.</h2>
            </div>
            <div className="solution-cards">
              <div className="solution-card">
                <IconGenderCardGuest />
                <p className="solution-label">같은 성별 매칭</p>
              </div>
              <div className="solution-card">
                <IconHostVerifyCard />
                <p className="solution-label">집주인 사전 검증</p>
              </div>
              <div className="solution-card">
                <IconManageCardGuest />
                <p className="solution-label">중간관리로<br />문제 발생 시 대응</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. 주거 신청하기 CTA ── */}
        <div className="cta-btn-center">
          <div className="container" style={{ textAlign: 'center' }}>
            <p className="cta-title-center">주거 신청하기</p>
            <a
              className="cta-btn"
              href="https://smore.im/form/S9qcizY9E2"
              target="_blank"
              rel="noreferrer"
            >
              홈투게더 서비스 신청
            </a>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}
