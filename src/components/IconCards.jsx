// 로컬 저장된 아이콘 카드 이미지 자산
const ID_PROFILE       = '/images/verify-profile.svg'
const ID_LINE_T        = '/images/verify-line-thick.svg'
const ID_LINE_S        = '/images/verify-line-thin.svg'
const ID_DOT           = '/images/verify-dot.svg'

const GH_PEOPLE        = '/images/gender-host-people.svg'
const GH_HEAD          = '/images/gender-host-head.svg'
const GH_SYMBOL        = '/images/gender-host-symbol.svg'
const GH_SMALLC        = '/images/gender-host-small.svg'

const HAND_1           = '/images/manage-host-hand1.svg'
const HAND_2           = '/images/manage-host-hand2.svg'

const GG_PEOPLE        = '/images/gender-guest-people.svg'
const GG_HEAD          = '/images/gender-guest-head.svg'
const GG_SYMBOL        = '/images/gender-guest-symbol.svg'
const GG_SMALLC        = '/images/gender-guest-small.svg'

const HOST_PERSON      = '/images/verify-guest-person.svg'

const HAND_1G          = '/images/manage-guest-hand1.svg'
const HAND_2G          = '/images/manage-guest-hand2.svg'

const HOUSE_ROOF       = '/images/house-roof.svg'
const HOUSE_DOOR       = '/images/house-door.svg'
const HOUSE_KNOB       = '/images/house-knob.svg'

/* 300x300을 240x240으로 스케일 — 그림자를 위한 여백 포함 */
const SHADOW_PAD = 16

function CardWrapper({ children }) {
  return (
    <div style={{
      width: `${240 + SHADOW_PAD * 2}px`,
      height: `${240 + SHADOW_PAD * 2}px`,
      position: 'relative',
      flexShrink: 0,
    }}>
      <div style={{
        width: '300px',
        height: '300px',
        transform: 'scale(0.8)',
        transformOrigin: 'top left',
        position: 'absolute',
        top: `${SHADOW_PAD}px`,
        left: `${SHADOW_PAD}px`,
      }}>
        {children}
      </div>
    </div>
  )
}

const cardBase = {
  background: 'white',
  borderRadius: '25.5px',
  boxShadow: '0px 8.5px 25.5px 0px rgba(0,0,0,0.25)',
  width: '300px',
  height: '300px',
  position: 'relative',
  overflow: 'hidden',
}

/* ══ 신원 검증 카드 (Host) ══ */
export function IconVerifyCard() {
  return (
    <CardWrapper>
      <div style={cardBase}>
        <div style={{ position:'absolute', background:'#d9d9d9', left:'37px', top:'86px', width:'225.7px', height:'128.5px', borderRadius:'26px', boxShadow:'0 8.7px 8.7px rgba(0,0,0,0.25)' }} />
        <div style={{ position:'absolute', background:'white', left:'162.9px', top:'109.4px', width:'84.2px', height:'84.2px', borderRadius:'17.4px' }} />
        <div style={{ position:'absolute', left:'191.5px', top:'122.5px', width:'26.9px', height:'26.9px' }}>
          <img alt="" src={ID_PROFILE} style={{ position:'absolute', inset:0, width:'100%', height:'100%' }} />
        </div>
        <div style={{ position:'absolute', background:'#3182f6', left:'179.4px', top:'152px', width:'51.2px', height:'26px', borderRadius:'26px 26px 0 0' }} />
        {[60.4, 72.6, 84.75].map((x, i) => (
          <div key={i} style={{ position:'absolute', left:`${x}px`, top:'109.4px', width:'8.7px', height:'8.7px' }}>
            <img alt="" src={ID_DOT} style={{ position:'absolute', inset:0, width:'100%', height:'100%' }} />
          </div>
        ))}
        <div style={{ position:'absolute', left:'59.6px', top:'126.8px', width:'67.7px', height:'0' }}>
          <div style={{ position:'absolute', inset:'-2.6px 0 0 0' }}>
            <img alt="" src={ID_LINE_T} style={{ display:'block', width:'100%', height:'100%', maxWidth:'none' }} />
          </div>
        </div>
        {[173.7, 165, 182.4, 191].map((y, i) => (
          <div key={i} style={{ position:'absolute', left:'60.4px', top:`${y}px`, width:'77.3px', height:'0' }}>
            <div style={{ position:'absolute', inset:'-1.74px 0 0 0' }}>
              <img alt="" src={ID_LINE_S} style={{ display:'block', width:'100%', height:'100%', maxWidth:'none' }} />
            </div>
          </div>
        ))}
      </div>
    </CardWrapper>
  )
}

/* ══ 같은 성별 카드 공통 ══ */
function GenderCardInner({ PEOPLE, HEAD, SYMBOL, SMALLC }) {
  return (
    <div style={cardBase}>
      <div style={{ position:'absolute', left:'52px', top:'91px', width:'195px', height:'118.8px' }}>
        <div style={{ position:'absolute', inset:'0 -4.12% -13.51% -4.12%' }}>
          <img alt="" src={PEOPLE} style={{ display:'block', width:'100%', height:'100%', maxWidth:'none' }} />
        </div>
      </div>
      <div style={{ position:'absolute', left:'80.9px', top:'130.3px', width:'19.3px', height:'19.3px' }}>
        <img alt="" src={HEAD} style={{ position:'absolute', inset:0, width:'100%', height:'100%' }} />
      </div>
      <div style={{ position:'absolute', background:'white', left:'72.1px', top:'152px', width:'36.9px', height:'18.5px', borderRadius:'24px 24px 0 0' }} />
      <div style={{ position:'absolute', left:'197.3px', top:'130.3px', width:'19.3px', height:'19.3px' }}>
        <img alt="" src={HEAD} style={{ position:'absolute', inset:0, width:'100%', height:'100%' }} />
      </div>
      <div style={{ position:'absolute', background:'white', left:'188.4px', top:'152px', width:'36.9px', height:'18.5px', borderRadius:'24px 24px 0 0' }} />
      <div style={{ position:'absolute', background:'#4e5968', left:'142.9px', top:'148.8px', width:'1.5px', height:'13.8px', borderRadius:'3.8px' }} />
      <div style={{ position:'absolute', background:'#4e5968', left:'154.1px', top:'142.2px', width:'1.5px', height:'13.8px' }} />
      <div style={{ position:'absolute', left:'151.8px', top:'141.8px', width:'6.1px', height:'3.5px' }}>
        <div style={{ position:'absolute', inset:'-33.45% -12.5% -22.22% -12.5%' }}>
          <img alt="" src={SYMBOL} style={{ display:'block', width:'100%', height:'100%', maxWidth:'none' }} />
        </div>
      </div>
      <div style={{ position:'absolute', left:'137.9px', top:'140.8px', width:'11.5px', height:'11.5px' }}>
        <img alt="" src={SMALLC} style={{ position:'absolute', inset:0, width:'100%', height:'100%' }} />
      </div>
      <div style={{ position:'absolute', left:'149.1px', top:'151.4px', width:'11.5px', height:'11.5px' }}>
        <img alt="" src={SMALLC} style={{ position:'absolute', inset:0, width:'100%', height:'100%' }} />
      </div>
    </div>
  )
}

export function IconGenderCardHost() {
  return (
    <CardWrapper>
      <GenderCardInner PEOPLE={GH_PEOPLE} HEAD={GH_HEAD} SYMBOL={GH_SYMBOL} SMALLC={GH_SMALLC} />
    </CardWrapper>
  )
}

export function IconGenderCardGuest() {
  return (
    <CardWrapper>
      <GenderCardInner PEOPLE={GG_PEOPLE} HEAD={GG_HEAD} SYMBOL={GG_SYMBOL} SMALLC={GG_SMALLC} />
    </CardWrapper>
  )
}

/* ══ 악수/관리 카드 ══ */
function HandCardInner({ V1, V2 }) {
  return (
    <div style={cardBase}>
      <div style={{ position:'absolute', left:'73px', top:'114.4px', width:'138.6px', height:'115px' }}>
        <div style={{ position:'absolute', inset:'0 2.95% 3.3% 0' }}>
          <img alt="" src={V1} style={{ display:'block', width:'100%', height:'100%', maxWidth:'none' }} />
        </div>
      </div>
      <div style={{ position:'absolute', left:'100.7px', top:'98px', width:'126.3px', height:'65.7px' }}>
        <div style={{ position:'absolute', inset:'1.61% 0 0 5.3%' }}>
          <img alt="" src={V2} style={{ display:'block', width:'100%', height:'100%', maxWidth:'none' }} />
        </div>
      </div>
    </div>
  )
}

export function IconManageCardHost() {
  return (
    <CardWrapper>
      <HandCardInner V1={HAND_1} V2={HAND_2} />
    </CardWrapper>
  )
}

export function IconManageCardGuest() {
  return (
    <CardWrapper>
      <HandCardInner V1={HAND_1G} V2={HAND_2G} />
    </CardWrapper>
  )
}

/* ══ 집주인 사전 검증 카드 (Guest) ══ */
export function IconHostVerifyCard() {
  return (
    <CardWrapper>
      <div style={cardBase}>
        <div style={{ position:'absolute', left:'43px', top:'56px', width:'213.4px', height:'188.5px' }}>
          <div style={{ position:'absolute', inset:'-2.22% 0 -5.19% 0' }}>
            <img alt="" src={HOST_PERSON} style={{ display:'block', width:'100%', height:'100%', maxWidth:'none' }} />
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}

/* ══ 집 일러스트 카드 (Host 수익 섹션) ══ */
export function HouseCard() {
  const sc = 300 / 390
  return (
    <div style={{
      width: `${240 + SHADOW_PAD * 2}px`,
      height: `${240 + SHADOW_PAD * 2}px`,
      position: 'relative',
      flexShrink: 0,
    }}>
      <div style={{
        width: '300px',
        height: '300px',
        transform: 'scale(0.8)',
        transformOrigin: 'top left',
        position: 'absolute',
        top: `${SHADOW_PAD}px`,
        left: `${SHADOW_PAD}px`,
      }}>
        <div style={{ background:'white', borderRadius:'25.5px', boxShadow:'0px 8.5px 25.5px 0px rgba(0,0,0,0.25)', width:'300px', height:'300px', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', background:'#d9d9d9', left:`${103.89*sc}px`, top:`${161.79*sc}px`, width:`${181.38*sc}px`, height:`${178.82*sc}px`, borderRadius:`${12.8*sc}px`, boxShadow:`0 ${8.5*sc}px ${17*sc}px rgba(0,0,0,0.25)` }} />
          <div style={{ position:'absolute', left:`${30.66*sc}px`, top:`${43.43*sc}px`, width:`${328.69*sc}px`, height:`${192.45*sc}px` }}>
            <div style={{ position:'absolute', inset:'-2.55% 5.11% 11.73% 5.11%' }}>
              <img alt="" src={HOUSE_ROOF} style={{ display:'block', width:'100%', height:'100%', maxWidth:'none' }} />
            </div>
          </div>
          <div style={{ position:'absolute', left:`${160.94*sc}px`, top:`${235.87*sc}px`, width:`${67.27*sc}px`, height:`${104.74*sc}px` }}>
            <img alt="" src={HOUSE_DOOR} style={{ position:'absolute', inset:0, width:'100%', height:'100%' }} />
          </div>
          <div style={{ position:'absolute', left:`${209.48*sc}px`, top:`${284.41*sc}px`, width:`${10.22*sc}px`, height:`${10.22*sc}px` }}>
            <img alt="" src={HOUSE_KNOB} style={{ position:'absolute', inset:0, width:'100%', height:'100%' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
