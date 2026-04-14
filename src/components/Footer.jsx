export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">Home Together</div>
          <div className="footer-contact">
            <div>전화: <a href="tel:010-4587-9428">010-4587-9428</a></div>
            <div>인스타그램: <a href="https://instagram.com/home.tgr" target="_blank" rel="noreferrer">@home.tgr</a></div>
            <div>카카오 채널: <a href="https://pf.kakao.com/_BKlhX" target="_blank" rel="noreferrer">홈투게더</a></div>
          </div>
          <div className="footer-social">
            <a href="https://pf.kakao.com/_BKlhX" target="_blank" rel="noreferrer">카카오톡</a>
            <a href="https://instagram.com/home.tgr" target="_blank" rel="noreferrer">인스타그램</a>
            <a href="tel:010-4587-9428">전화 문의</a>
          </div>
        </div>
        <div style={{ color: '#4a5568', fontSize: '13px', lineHeight: '1.6' }}>
          © 2025 홈투게더. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
