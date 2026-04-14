import { useNavigate, useLocation } from 'react-router-dom'

export default function Nav() {
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className="nav">
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => navigate('/')}>
          Home Together
        </button>
        {isHome ? (
          <div className="nav-links">
            <button className="nav-link" onClick={() => {
              document.getElementById('service-intro')?.scrollIntoView({ behavior: 'smooth' })
            }}>서비스 소개</button>
            <button className="nav-link" onClick={() => navigate('/host')}>방으로 수익 만들기</button>
            <button className="nav-link" onClick={() => navigate('/guest')}>저렴한 방 찾기</button>
          </div>
        ) : (
          <button className="nav-back" onClick={() => navigate(-1)}>
            ← 홈으로
          </button>
        )}
      </div>
    </nav>
  )
}
