import { useState } from 'react'
import './index.css'
import { submitToGoogleSheets } from './services/GoogleSheetsService'
import { HiMenu, HiX } from 'react-icons/hi'
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [userType, setUserType] = useState('init')   // | 'init' | 'ask' | 'guest' | 'host'
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [university, setUniversity] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isModified, setIsModified] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // 신청 완료 시 저장된 원본 값 (수정 감지용)
  const [savedData, setSavedData] = useState(null)

  // 현재 입력값이 저장된 원본과 다른지 확인
  const checkModified = (newPhone, newName, newUniversity) => {
    if (!savedData) return false
    return (
      newPhone !== savedData.phone ||
      newName !== savedData.name ||
      newUniversity !== savedData.university
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const data = userType === 'guest'
        ? { role: 'guest', school: university, name, phone, modified: isModified ? '수정됨' : '' }
        : { role: 'host', name, phone, modified: isModified ? '수정됨' : '' }

      await submitToGoogleSheets(data)
      // 현재 입력값을 원본으로 저장
      setSavedData({ phone, name, university })
      setSubmitted(true)
      setIsModified(false)
      if (submitted) {
        alert('수정이 완료되었습니다.')
      } else {
        alert('신청이 완료되었습니다.\n입력하신 정보로 확인 후 연락드리겠습니다.\n잘못 입력하셨다면 다시 신청해주세요.')
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  // ── 서비스 혜택 카드 데이터 ──────────────────────────────────
  const guestCards = [
    {
      title: '검증된 주거 환경',
      img: '/images/icon_home_3D__299x253.png',
      bg: 'linear-gradient(180deg,#9DBAFF 1%,#779AEF 100%)',
    },
    {
      title: '생활 규칙 사전 협의',
      img: '/images/icon_paper_3D_196x270.png',
      bg: 'linear-gradient(180deg,#7EA4FD 0%,#4574E2 100%)',
    },
    {
      title: '분쟁 예방/조정 프로세스 운영',
      img: '/images/icon_check_3D_268x199.png',
      bg: 'linear-gradient(180deg,#FFC26C 0%,#FDA62C 100%)',
    }
  ]

  const hostCards = [
    {
      title: '생활 규칙 사전 합의 & 정기 체크인',
      img: '/images/___4_2_196x270.png',
      bg: 'linear-gradient(180deg,#84F184 0%,#599B59 100%)',
    },
    {
      title: '신원 검증 기반 입주자 연결',
      img: '/images/icon_people_3D_228x205.png',
      bg: 'linear-gradient(180deg,#DCBBFF 0%,#845FAC 100%)',
    },
    {
      title: '분쟁 예방/조정 프로세스 운영',
      img: '/images/___5_2_268x199.png',
      bg: 'linear-gradient(180deg,#FFC26C 0%,#FDA62C 100%)',
    },
  ]

  const cards = userType === 'guest' ? guestCards : hostCards

  // ── 진행 절차 ─────────────────────────────────────────────
  const steps = [
    { num: '1', title: '1차 상담', sub: '상황 및 희망 조건 확인' },
    { num: '2', title: '간단 신청', sub: '전화번호 및 유형 선택' },
    { num: '3', title: '검증 절차', sub: '필요 항목 확인 및 인터뷰' },
    { num: '4', title: '생활 매칭', sub: '패턴 및 규칙 조율' },
    { num: '5', title: '입주 시작', sub: '안심 동거 프로세스 가동' },
    { num: '6', title: '상시 운영 관리', sub: '체크인 및 이슈 대응' },
  ]

  // ── 핵심 가치 5개 ─────────────────────────────────────────
  const coreValues = [
    { title: '신원 검증', desc: '기본 확인 절차를 통한\n안심 가능한 연결' },
    { title: '생활 매칭', desc: '생활 리듬, 선호,\n기본 규칙을 사전 정리' },
    { title: '거주 관리', desc: '입주 후 정기\n체크인과 운영 지원' },
    { title: '분쟁 예방', desc: '사전 기준 수립 및\n중재 프로세스 제공' },
    { title: '안전 관리', desc: '위험 신호를\n놓치지 않는 운영 체계' },
  ]

  const scrollTo = (id) => {
    setIsMenuOpen(false)
    // 조건부 렌더링 섹션이 DOM에 나타난 뒤 스크롤
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
  }

  return (
    <div>
      {/* ═══════════ NAV ═══════════ */}
      <nav className="nav">
        <div className="nav-inner">
          <button className="nav-logo" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}>
            Home-Together
          </button>

          <button className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>

          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <a href="#service" onClick={(e) => { e.preventDefault(); scrollTo('intro') }}>서비스 소개</a>
            {userType !== 'init' && (
              <a href="#process" onClick={(e) => { e.preventDefault(); scrollTo('process') }}>진행절차</a>
            )}
            <a href="#contact" onClick={(e) => { e.preventDefault(); setUserType('guest'); scrollTo('contact') }}>문의하기</a>
            {/* <a href="#selector" onClick={(e) => { e.preventDefault(); scrollTo('selector') }}>내 상황 선택하기</a> */}

          </div>
        </div>
      </nav>

      {/* ═══════════ HERO ═══════════ */}
      <section className="hero">
        <div className="hero-content">
          <h2 style={{ fontWeight: 600, marginBottom: 30, fontSize: "25px" }}>Home-together</h2>

          <h1>남는 방은 안전하게, 필요한 방은 합리적으로.</h1>
          <p className="hero-sub">아파트 빈방과 청년 주거를 연결하고, 거주 과정까지 관리합니다.</p>
          <div className="hero-btn-group">
            <button
              className="btn-hero-primary"
              onClick={() => { setUserType('guest'); scrollTo('contact') }}
            >
              바로 문의하기
            </button>
            <button
              className="btn-hero-secondary"
              onClick={() => scrollTo('selector')}
            >
              내 상황 선택하기
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════ INTRO ═══════════ */}
      <section id="intro" className="intro">
        <div className="intro-section">
          <p>
            홈투게더는 아파트에 거주하는{' '}
            <span className="hl">중장년/고령자의 남는 방</span>과<br />
            주거가 필요한{' '}
            <span className="hl">청년·학생·사회초년생을 연결</span>하고,<br />
            입주 전–거주 중–퇴거까지 전 과정을 운영 관리하는 주거 서비스입니다.
          </p>
        </div>
      </section>

      {/* ═══════════ TAGLINE BAR ═══════════ */}
      <div className="tagline-bar">
        신원 검증 · 생활 매칭 · 거주 관리 · 분쟁 예방 · 안전 관리를 한 번에.
      </div>

      {/* ═══════════ SITUATION SELECTOR ═══════════ */}
      <section id="selector" className="selector-section">
        <div className="selector-inner">
          <h2>당신은 누구인가요?</h2>
          <p className="sub">
            홈투게더는 두 사람의 '만남'보다, 함께 사는 '
            <strong>과정</strong>'을 더 중요하게 봅니다.<br />
            아래에서 본인 상황을 선택해 주세요.
          </p>
          <div className="selector-cards">
            <button
              className={`selector-card${userType === 'guest' ? ' active' : ''}`}
              onClick={() => setUserType(userType === 'guest' ? 'init' : 'guest')}
            >
              <span>게스트</span>
              <p>집을 구하고 있어요!</p>
            </button>
            <button
              className={`selector-card${userType === 'host' ? ' active' : ''}`}
              onClick={() => setUserType(userType === 'host' ? 'init' : 'host')}
            >
              <span>집주인</span>
              <p>집에 남는 방이 있어요!</p>
            </button>
          </div>
        </div>
      </section>

      {((userType == 'guest') || (userType == 'host')) && (
        <>

          {/* ═══════════ SERVICE INTRO ═══════════ */}
          <section className="service-section">
            <div className="service-inner">
              {userType === 'guest' && (
                <>
                  <h2>
                    집을 구하는{' '}
                    <span className="hl">청년</span>이신가요?
                  </h2>
                  <p style={{ textAlign: "center", fontWeight: "bold", marginBottom: 10 }}>
                    서울 평균 월세 60만원 시대, 관리비 포함 월세 40만원대로 아파트에서 거주하세요.
                  </p>

                  <p className="service-desc">
                    서울 원룸 월세 부담, 보증금 압박…<br />
                    "조건 괜찮은 집"보다 믿을 수 있는 주거 환경이 더 어려운 시기입니다.
                  </p>
                </>
              )}
              {userType === 'host' && (
                <>
                  <h2>
                    집에{' '}
                    <span className="hl">남는 방</span>이 있으신가요?
                  </h2>
                  <p className="service-desc">
                    혼자 지내는 시간이 길어질수록 집 안의 빈방은
                    공간의 낭비가 아니라 불안 요소가 되기도 합니다.<br />
                    홈투게더는 "누구든 받는" 방식이 아니라 검증과 관리가 전제된 운영으로 연결합니다.
                  </p>
                </>
              )}


              {/* 서비스 혜택 카드 3개 */}
              <div className="service-cards">
                {cards.map((c, i) => (
                  <article key={i} className="service-card" style={{ background: c.bg }}>
                    <img src={c.img} alt={c.title} />
                    <h3>{c.title}</h3>
                  </article>
                ))}
              </div>

              {/* 상담 신청 박스 */}

              {userType === 'guest' && (
                <>
                  <div className="service-form-box">
                    <img src="/images/Rectangle_116_753x545.png" alt="홈투게더 아파트 빈방 사진" />
                    <div className="text-content">
                      <span style={{ color: '#333333', fontSize: 36, fontFamily: 'Pretendard Variable', fontWeight: '600', lineHeight: 1.4, wordWrap: 'break-word', display: 'block' }}>
                        아파트에서 원룸보다 <br />15만원 이상 저렴한 <br />가격으로 거주하세요!<br />
                      </span>
                      <span style={{ color: '#555555', fontSize: 24, fontFamily: 'Pretendard Variable', fontWeight: '600', lineHeight: 1.4, wordWrap: 'break-word', display: 'block', marginTop: 12 }}>
                        (보증금 100만원 미만)
                      </span>
                    </div>
                  </div>
                </>
              )
              }
              {/* {userType === 'guest' ? (
              <>
                <label className="form-label" htmlFor="university-inline">대학교명</label>
                <input
                  id="university-inline"
                  type="text"
                  className="form-input"
                  placeholder="서울과학기술대학교"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                />
              </>
            ) : (
              <p style={{ fontSize: 22, color: '#555', marginBottom: 24 }}>
                자녀가 대신 신청하고 상담받을 수 있습니다.
              </p>
            )} */}
              {/* <label className="form-label" htmlFor="phone-inline">전화번호</label>
            <input
              id="phone-inline"
              type="tel"
              className="form-input"
              placeholder="010-1234-5678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="apply-cta-wrap">
              <button className="btn-apply" onClick={() => scrollTo('contact')}>
                {userType === 'guest' ? '지금 상담 신청하기' : '남는 방 상담 신청'}
              </button>
            </div> */}
              <div className="apply-cta-wrap">
                <button className="btn-apply" onClick={() => scrollTo('contact')}>
                  {userType === 'guest' ? '청년/학생 상담 신청' : '남는 방 상담 신청'}
                  <br />
                  <p style={{ fontWeight: "normal", fontSize: 25, marginTop: 10 }}>{userType === 'guest' ? '내 주변 지역 홈투게더 신청하기' : '자녀가 대신 신청하고 상담받을 수 있습니다.'}
                  </p>
                </button>
              </div>
            </div>
          </section>

          {/* ═══════════ PROBLEM ANALYSIS ═══════════ */}
          <section id="service" className="problem-section">
            <div className="problem-inner">
              <h2 className="problem-title">주거 문제와 세대 문제는 따로 오지 않습니다. 함께 옵니다.</h2>
              <div className="problem-cards">
                <div className="problem-card">

                  {/* Problem 1: 청년 주거비 상승 */}
                  <div className="problem-item problem-item--horizontal">
                    <img src="/images/money.svg" alt="청년 아이콘" className="problem-card-icon" />
                    <div className="problem-card-content">
                      <h3 className="problem-card-title--blue"><strong>청년 주거비 상승</strong></h3>
                      <p>
                        월세 부담은 커지고, 선택지는 줄어듭니다.<br />
                        청년들은 잠만 자는 방이 아니라, 숨을 쉬는 집이 필요합니다.
                      </p>
                    </div>
                  </div>


                  {/* Problem 2: 고령자 1인가구의 증가와 고립 */}
                  <div className="problem-item problem-item--horizontal">
                    <img src="/images/lonely.svg" alt="고령자 아이콘" className="problem-card-icon" />
                    <div className="problem-card-content">
                      <h3 className="problem-card-title--blue"><strong>고령자 1인가구의 증가와 고립</strong></h3>
                      <p>
                        혼자 사는 시간이 길어질수록<br />
                        안전·정서·일상 관리의 공백이 생깁니다.
                      </p>
                    </div>
                  </div>

                  {/* Problem 3: 아파트 빈방 증가 */}
                  <div className="problem-item problem-item--horizontal">
                    <img src="/images/apartment.svg" alt="빈방 아이콘" className="problem-card-icon" />
                    <div className="problem-card-content">
                      <h3 className="problem-card-title--blue"><strong>아파트 빈방 증가</strong></h3>
                      <p>
                        실제 거주 공간은 남는데,
                        활용될 구조가 없어 비어 있습니다.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
              <p className="problem-footer">
                홈투게더는 남는 공간을 사회적 자원으로, 필요한 주거를 안정적인 일상으로 바꿉니다.
              </p>
            </div>
          </section>

          {/* ═══════════ CORE VALUES ═══════════ */}
          <section className="core-section">
            <img src="/images/Group 18.png" style={{ width: "100vw", margin: 0, maxWidth: '100%' }} alt="핵심 가치" />
          </section>

          {/* ═══════════ PROCESS ═══════════ */}
          <section id="process" className="process-section">
            <img src="/images/Group 19.png" style={{ width: "100vw", margin: 0, maxWidth: '100%' }} alt="진행 절차" />
          </section>

        </>
      )}
      {( (userType == 'guest') || (userType == 'host')) && (
        <>
          {/* ═══════════ CONTACT FORM ═══════════ */}
          <section id="contact" className="contact-section">
            <h2 style={{ textAlign: "center", marginBottom: "50px", marginTop: "50px" }}>전화번호만 남기면, 홈투게더가 지금 상황에 맞는 방법을 1:1로 알려드릴게요.</h2>
            <div className="contact-box">
              <p className="contact-desc">
                아래에 전화번호를 남기시면, 홈투게더가 담당자가 서비스 이용 가능 여부 / 진행방식 / 필요한 준비를 안내드립니다.
              </p>
              <form className="contact-form" onSubmit={handleSubmit}>
                {/* 유형 선택 */}
                <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
                  <button
                    type="button"
                    className="selector-card"
                    style={{
                      width: '50%', height: 60, borderRadius: 16, fontSize: 20,
                      background: userType === 'guest' ? '#4574E2' : '#F1F1F1',
                      color: userType === 'guest' ? '#fff' : '#222',
                    }}
                    onClick={() => setUserType(userType === 'guest' ? 'ask' : 'guest')}
                  >
                    게스트(청년)
                  </button>
                  <button
                    type="button"
                    className="selector-card"
                    style={{
                      width: '50%', height: 60, borderRadius: 16, fontSize: 20,
                      background: userType === 'host' ? '#4574E2' : '#F1F1F1',
                      color: userType === 'host' ? '#fff' : '#222',
                    }}
                    onClick={() => setUserType(userType === 'host' ? 'ask' : 'host')}
                  >
                    호스트(집주인)
                  </button>
                </div>

                {userType === 'guest' && (
                  <>
                    <label className="form-label" htmlFor="university">대학교명</label>
                    <input
                      id="university"
                      type="text"
                      className="form-input"
                      placeholder="대학교명을 입력해 주세요."
                      value={university}
                      onChange={(e) => {
                        setUniversity(e.target.value)
                        if (submitted) setIsModified(checkModified(phone, name, e.target.value))
                      }}
                      required
                    />
                  </>
                )}
                <label className="form-label" htmlFor="name">이름</label>
                <input
                  id="name"
                  type="text"
                  className="form-input"
                  placeholder="이름을 입력해 주세요."
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    if (submitted) setIsModified(checkModified(phone, e.target.value, university))
                  }}
                  required
                />
                <label className="form-label" htmlFor="phone">전화번호</label>
                <input
                  id="phone"
                  type="tel"
                  className="form-input"
                  placeholder="전화번호를 입력해 주세요."
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value)
                    if (submitted) setIsModified(checkModified(e.target.value, name, university))
                  }}
                  required
                />
                <button
                  type="submit"
                  className="btn-submit"
                  disabled={loading}
                >
                  {loading ? '처리 중...' : (submitted && isModified) ? '수정하기' : submitted ? '신청 완료 ✓' : '신청하기'}
                </button>
              </form>
              <p style={{ marginTop: 20, fontSize: 15, color: '#aaa', textAlign: 'center' }}>
                전화번호는 상담 목적 외 사용하지 않습니다. 원하시면 언제든 삭제 요청이 가능합니다.<br />
                무리한 권유 없이, 가능 여부부터 투명하게 안내드립니다.
              </p>
            </div>
          </section>
        </>
      )}

      {/* ═══════════ FOOTER ═══════════ */}
      <footer>
        <p className="footer-contact">
          카카오 채널 -{' '}
          <a href="https://pf.kakao.com/_BKlhX" target="_blank" rel="noreferrer">
            https://pf.kakao.com/_BKlhX
          </a>
          <br />
          인스타그램 - @home.tgr<br />
          전화 - 010-4587-9428
        </p>
        <p className="copyright">© 2026 Home-Together.</p>
      </footer>

      <Analytics />
    </div>
  )
}

export default App
