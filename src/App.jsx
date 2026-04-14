import { Routes, Route, useNavigate } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import HostPage from './pages/HostPage'
import GuestPage from './pages/GuestPage'

// 파트너 로고 (로컬 이미지)
const imgOffer     = '/images/partner-offer.png'
const imgPplEdu    = '/images/partner-ppledu.png'
const imgSinol     = '/images/partner-sinol.png'
const imgSeoulTech = '/images/partner-seoultech.png'

function Landing() {
  const navigate = useNavigate()

  return (
    <>
      <Nav />

      {/* ── Hero Split ── */}
      <div className="hero-split">
        <div className="hero-panel host-panel">
          <div className="hero-tag">Host</div>
          <h1 className="hero-title">
            거주하는 댁에<br />비어있는 방이<br />있으신가요?
          </h1>
          <p className="hero-subtitle">
            밥 챙겨주지 않아도 되는<br />하숙으로 재테크 시작하세요!
          </p>
          <button className="hero-btn" onClick={() => navigate('/host')}>
            더 알아보기
          </button>
        </div>

        <div className="hero-panel guest-panel">
          <div className="hero-tag">Guest</div>
          <h1 className="hero-title">
            집을<br />구하고<br />계신가요?
          </h1>
          <p className="hero-subtitle">
            원룸보다 저렴하게<br />아파트에서 거주하세요!
          </p>
          <button className="hero-btn" onClick={() => navigate('/guest')}>
            더 알아보기
          </button>
        </div>
      </div>

      {/* ── 서비스 소개 ── */}
      <section className="service-intro" id="service-intro">
        <div className="container">
          <h2 className="service-intro-title">홈투게더는 이런 서비스입니다.</h2>
          <p className="service-intro-desc">
            아파트에 거주하는 어르신의 남는 방을 주변 대학생과 연결하고 관리합니다.<br />
            단순 서비스가 아니라, 검증 + 매칭 + 중간 관리까지 제공합니다.
          </p>
        </div>
      </section>

      {/* ── 파트너 ── */}
      <section className="partners">
        <div className="container">
          <h2 className="partners-title">홈투게더 파트너</h2>
          <p className="partners-desc">
            더 안전하고 따뜻한 연결을 위해,<br />홈투게더는 검증된 파트너들과 함께합니다.
          </p>
          <div className="partners-logos">
            <img src={imgOffer}     alt="Offer"             height="120" />
            <img src={imgPplEdu}    alt="피플에듀"            height="48" />
            <img src={imgSinol}     alt="시눌"               height="44" />
            <img src={imgSeoulTech} alt="서울과기대 창업지원단" height="32" />
          </div>
        </div>
      </section>

      <Footer />
      <Analytics />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/"      element={<Landing />}  />
      <Route path="/host"  element={<HostPage />}  />
      <Route path="/guest" element={<GuestPage />} />
    </Routes>
  )
}
