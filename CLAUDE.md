# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

홈투게더(Home-Together) 랜딩 페이지 — 청년(게스트)과 중장년(호스트) 간 주거 매칭 서비스의 마케팅/문의 수집 사이트. React 19 + Vite 7 SPA.

## Commands

```bash
npm run dev      # Vite 개발 서버 (HMR)
npm run build    # 프로덕션 빌드 → dist/
npm run preview  # 빌드 결과 로컬 프리뷰
npm run lint     # ESLint (flat config, .js/.jsx)
```

## Architecture

**단일 컴포넌트 구조:** `src/App.jsx`에 전체 UI와 상태 관리가 포함된 모놀리식 구조.

**주요 흐름:**
- `src/main.jsx` → `src/App.jsx` (전체 페이지 렌더링)
- `src/services/GoogleSheetsService.js` → Google Apps Script Web App으로 폼 데이터 전송
- `GoogleAppsScript.gs` — 서버 측 스크립트 (Google Sheets에 데이터 기록)

**상태 (useState):**
- `userType`: `'guest'` | `'host'` — 게스트/호스트 전환
- `phone`, `university` — 문의 폼 입력값
- `loading`, `submitted` — 폼 제출 상태

**스타일링:**
- `src/index.css` (전역, 733줄) + `src/App.css` (최소)
- Pretendard Variable 폰트 (CDN)
- 주 색상: `#4574E2` (파란), `#124BD5` (진파란)
- 모바일 브레이크포인트: 900px
- `clamp()` 기반 반응형 타이포그래피

**정적 에셋:** `public/images/` — Figma에서 export한 이미지들

## ESLint Rules

- `no-unused-vars`: 대문자/언더스코어로 시작하는 변수는 허용 (`varsIgnorePattern: '^[A-Z_]'`)
- React Hooks 규칙 + React Refresh 규칙 적용

## Data Flow

사용자 폼 제출 → `GoogleSheetsService.submitToGoogleSheets()` → Google Apps Script (fetch POST, no-cors) → Google Sheets 기록. 스크립트 URL 미설정 시 개발 모드 시뮬레이션.
