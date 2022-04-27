(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{618:function(a,t,e){"use strict";e.r(t);var o=e(1),s=Object(o.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"코스모스-허브-3-업그레이드-매뉴얼"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#코스모스-허브-3-업그레이드-매뉴얼"}},[a._v("#")]),a._v(" 코스모스 허브 3 업그레이드 매뉴얼")]),a._v(" "),e("p",[a._v("이 문서는 풀노드 운영자가 "),e("code",[a._v("cosmoshub-3")]),a._v("에서 "),e("code",[a._v("cosmoshub-4")]),a._v(" 업그레이드를 진행하기 위한 과정을 설명합니다.\n텐더민트 팀이 공식적인 업데이트된 제네시스 파일을 업로드할 예정이나, 각 검증인이 해당 제네시스 파일을 각자 검증할 것을 권장합니다.")]),a._v(" "),e("p",[a._v("현재 "),e("code",[a._v("cosmoshub-3")]),a._v("에서는 "),e("code",[a._v("Cosmos Hub 4 Upgrade Proposal")]),a._v("에 대한 사회적 합의가 도달된 것으로 판단됩니다.\n프로포절 #"),e("a",{attrs:{href:"https://www.mintscan.io/cosmos/proposals/27",target:"_blank",rel:"noopener noreferrer"}},[a._v("27"),e("OutboundLink")],1),a._v(", #"),e("a",{attrs:{href:"https://www.mintscan.io/cosmos/proposals/35",target:"_blank",rel:"noopener noreferrer"}},[a._v("35"),e("OutboundLink")],1),a._v(" and #"),e("a",{attrs:{href:"https://www.mintscan.io/cosmos/proposals/36",target:"_blank",rel:"noopener noreferrer"}},[a._v("36"),e("OutboundLink")],1),a._v("의 내용에 따라 업그레이드 과정은 "),e("code",[a._v("2021년 2월 18일, 06:00 UTC")]),a._v("에 진행될 예정입니다.")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%EB%A7%88%EC%9D%B4%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%85%98"}},[a._v("마이그레이션")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%EC%82%AC%EC%A0%84-%EC%A0%95%EB%B3%B4"}},[a._v("사전 정보")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%EC%A3%BC%EC%9A%94-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8"}},[a._v("주요 업데이트")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%EC%9C%84%ED%97%98-%EA%B3%A0%EC%A7%80"}},[a._v("위험 고지")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%EB%B3%B5%EA%B5%AC"}},[a._v("복구")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%EC%97%85%EA%B7%B8%EB%A0%88%EC%9D%B4%EB%93%9C-%EC%A0%88%EC%B0%A8"}},[a._v("업그레이드 절차")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%A0%9C%EA%B3%B5%EC%9E%90%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B3%B5%EC%A7%80"}},[a._v("서비스 제공자에 대한 공지")])])]),a._v(" "),e("h1",{attrs:{id:"마이그레이션"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#마이그레이션"}},[a._v("#")]),a._v(" 마이그레이션")]),a._v(" "),e("p",[a._v("다음 항목들은 애플리케이션 및 모듈을 코스모스 v0.41 스타게이트로 마이그레이션 하는 절차를 정보를 포함하고 있습니다.")]),a._v(" "),e("p",[a._v("만약 코스모스 허브 또는 코스모스 생태계 블록체인의 블록 익스플로러, 지갑, 거래소, 검증인, 등 서비스 (예, 커스터디 제공자)를 운영하시는 경우, 이번 업그레이드에서 상당한 변경사항이 있음으로 꼭 다음 정보를 참고하십시오.")]),a._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/migrations/app_and_modules.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("앱 및 모듈 마이그레이션"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/migrations/chain-upgrade-guide-040.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("코스모스 v0.40 체인 업그레이드 가이드"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/migrations/rest.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("REST 엔드포인트 마이그레이션"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("RouterLink",{attrs:{to:"/migration/breaking_changes.html"}},[a._v("각 버전 체인지로그의 breaking change 모음")])],1),a._v(" "),e("li",[e("a",{attrs:{href:"https://figment.network/resources/cosmos-stargate-upgrade-overview/#ibc",target:"_blank",rel:"noopener noreferrer"}},[a._v("Inter-Blockchain Communication (IBC)– 체인간 트랜잭션"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://figment.network/resources/cosmos-stargate-upgrade-overview/#proto",target:"_blank",rel:"noopener noreferrer"}},[a._v("Protobuf 마이그레이션 – 블록체인 성능 및 개발 과정 개선"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://figment.network/resources/cosmos-stargate-upgrade-overview/#sync",target:"_blank",rel:"noopener noreferrer"}},[a._v("State Sync – 몇 분 내에 완료되는 노드 동기화"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://figment.network/resources/cosmos-stargate-upgrade-overview/#light",target:"_blank",rel:"noopener noreferrer"}},[a._v("강력한 기능을 포함한 라이트 클라이언트"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://figment.network/resources/cosmos-stargate-upgrade-overview/#upgrade",target:"_blank",rel:"noopener noreferrer"}},[a._v("체인 업그레이드 모듈 – 업그레이드 자동화"),e("OutboundLink")],1)])]),a._v(" "),e("p",[a._v("만약 2월 18일 전에 업그레이드 과정을 미리 테스트 진행을 희망하시는 경우 "),e("a",{attrs:{href:"https://github.com/cosmos/gaia/issues/569#issuecomment-767910963",target:"_blank",rel:"noopener noreferrer"}},[a._v("이 글"),e("OutboundLink")],1),a._v("을 참고하세요")]),a._v(" "),e("h2",{attrs:{id:"사전-정보"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사전-정보"}},[a._v("#")]),a._v(" 사전 정보")]),a._v(" "),e("p",[a._v("지난 코스모스 허브 업그레이드("),e("code",[a._v("cosmoshub-3")]),a._v(") 이후 코스모스 SDK와 Gaia 애플리케이션에 상당한 양의 변경사항이 적용되었습니다.\n변경사항에는 신규 기능, 프로토콜 변경사항, 애플리케이션 구조 변경 등이 포함되었으며, 애플리케이션 개발 과정의 개선이 기대됩니다.")]),a._v(" "),e("p",[a._v("우선, "),e("a",{attrs:{href:"https://github.com/cosmos/ics#ibc-quick-references",target:"_blank",rel:"noopener noreferrer"}},[a._v("인터체인 표준"),e("OutboundLink")],1),a._v("를 따른 "),e("a",{attrs:{href:"https://docs.cosmos.network/main/ibc/overview.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("IBC"),e("OutboundLink")],1),a._v("이 활성화될 예정입니다. 또한 효율성, 노드 동기화, 추후 블록체인 업데이트 과정이 개선됩니다. 자세한 내용은 "),e("a",{attrs:{href:"https://stargate.cosmos.network/",target:"_blank",rel:"noopener noreferrer"}},[a._v("스타게이트 웹사이트"),e("OutboundLink")],1),a._v("를 참고하세요.")]),a._v(" "),e("p",[a._v("__이번 업그레이드에서 풀 노드 운영자 업그레이드를 진행하는 것은 "),e("a",{attrs:{href:"https://github.com/cosmos/gaia",target:"_blank",rel:"noopener noreferrer"}},[a._v("Gaia"),e("OutboundLink")],1),a._v(" 애플리케이션 v4.0.0입니다. 이번 버전의 Gaia 애플리케이션은 코스모스 SDK v0.41.0 그리고 텐더민트 v0.34.3 기반으로 빌드되었습니다.")]),a._v(" "),e("h2",{attrs:{id:"주요-업데이트"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#주요-업데이트"}},[a._v("#")]),a._v(" 주요 업데이트")]),a._v(" "),e("p",[a._v("이번 SDK의 릴리즈에서는 다수의 기능 및 변경사항이 적용되어 있습니다. 이에 대한 설명은 "),e("a",{attrs:{href:"https://github.com/cosmos/stargate",target:"_blank",rel:"noopener noreferrer"}},[a._v("여기"),e("OutboundLink")],1),a._v("에서 확인하실 수 있습니다.")]),a._v(" "),e("p",[a._v("개발자 또는 클라이언트로서 참고해야할 점은 다음과 같습니다:")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("프로토콜 버퍼(Protocol BufferS)")]),a._v(": 이전 버전의 코스모스 SDK에서는 인코딩 및 디코딩 과정에서 아미노 코덱을 사용했습니다.\n이번 코스모스 SDK 버전에서는 프로토콜 버퍼가 내장되어있습니다. 프로토콜 버퍼를 통해 애플리케이션은 속도, 가독성, 편의성, 프로그래밍 언어 간 상호호환성 등의 부분에서 상당한 개선이 있을 것으로 기대됩니다. "),e("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/migrations/app_and_modules.md#protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[a._v("더 읽기"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("strong",[a._v("CLI")]),a._v(": 이전 버전의 코스모스 SDK에서는 블록체인의 CLI와 데몬은 별도의 바이너리로 구성되었으며, 실행하는 블록체인 인터랙션에 따라 "),e("code",[a._v("gaiad")]),a._v("와 "),e("code",[a._v("gaiacli")]),a._v(" 바이너리가 구분되었습니다. 이번 버전의 코스모스 SDK에서는 두 바이너리가 하나의 "),e("code",[a._v("gaiad")]),a._v(" 바이너리로 통합되었으며 해당 바이너리 내에서 기존에 "),e("code",[a._v("gaiacli")]),a._v("에서 사용했던 명령어를 지원합니다.")]),a._v(" "),e("li",[e("strong",[a._v("노드 구성")]),a._v(": 이전 버전의 코스모스 SDK에서는 블록체인 데이터와 노드 설정이 "),e("code",[a._v("~/.gaia/")]),a._v("에 저장되었지만, 이번 버전에서는 해당 정보다 "),e("code",[a._v("~/.gaia/")]),a._v(" 디렉토리에 보관됩니다. 만약 블록체인 데이터 또는 노드 설정을 관리하는 스크립트를 사용하시는 경우 해당 스크립트에서 패스를 변경해야합니다.")])]),a._v(" "),e("h2",{attrs:{id:"위험-고지"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#위험-고지"}},[a._v("#")]),a._v(" 위험 고지")]),a._v(" "),e("p",[a._v("검증인이 컨센서스 노드 업그레이드를 진행하는 절차에서 이중서명에 따른 슬래싱의 위험이 존재합니다. 이 과정에서 가장 중요한 것은 검증인을 가동하고 서명을 시작하기 전 소프트웨어 버전을 확인하고 제네시스 파일의 해시를 확인하시기를 바랍니다.")]),a._v(" "),e("p",[a._v("블록체인 검증인이 할 수 있는 가장 위험한 행동은 네트워크 시작 과정에서 존재했던 실수를 인지하고 업그레이드 과정을 처음부터 다시 시작하는 것입니다. 만약 업그레이드 과정에서 실수가 발생했다면 네트워크가 시작되는 것을 기다린 후에 실수를 고치는 것을 권장합니다. 만약 네트워크가 중단되었고 본인의 검증인을 실제 시작된 네트워크가 아닌 다른 제네시스 파일로 가동한 경우, 검증인을 리셋하는 과정에 대해 텐더민트 검증인으로 부터 조언을 구할 것을 권장합니다.")]),a._v(" "),e("h2",{attrs:{id:"복구"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#복구"}},[a._v("#")]),a._v(" 복구")]),a._v(" "),e("p",[a._v("각 검증인은 "),e("code",[a._v("cosmoshub-3")]),a._v(" 상태를 내보내기(export) 전에 내보내는 블록 하이트의 풀 데이터 스냅샷을 진행할 것을 권장합니다. 스냅샷 과정은 각 검증인의 인프라에 따라 다를 수 있지만, 통상 "),e("code",[a._v(".gaia")]),a._v(" 디렉토리를 백업하는 것으로 진행합니다.")]),a._v(" "),e("p",[e("code",[a._v("gaiad")]),a._v(" 프로세스를 멈춘 후 "),e("code",[a._v(".gaia/data/priv_validator_state.json")]),a._v(" 파일을 백업하는 것은 매우 중요합니다. 이 파일은 검증인이 컨센서스 라운드에 참여할 때마다 업데이트됩니다. 만약 업그레이드 과정이 실패하여 이전 체인을 다시 시작해야되는 경우 검증인의 이중서명을 방지하기 위해서 이 파일은 필수입니다.")]),a._v(" "),e("p",[a._v("만약 업그레이드 과정이 실패하는 경우, 검증인과 노드 운영자는 gaia v2.0.15(코스모스 SDK v0.37.15 기반)으로 다운그레이드를 진행하고 가장 최근 진행했던 스냅샷을 복구한 이후에 노드를 시작해야합니다.")]),a._v(" "),e("h2",{attrs:{id:"업그레이드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#업그레이드"}},[a._v("#")]),a._v(" 업그레이드")]),a._v(" "),e("p",[e("strong",[a._v("참고")]),a._v(": 이 가이드는 코스모스 SDK의 v0.37.15 기반의 gaia v2.0.15를 운영한다는 가정에 작성된 가이드입니다.")]),a._v(" "),e("p",[a._v("Gaia v2.0.15의 버전/커밋 해시값: "),e("code",[a._v("89cf7e6fc166eaabf47ad2755c443d455feda02e")])]),a._v(" "),e("ol",[e("li",[e("p",[a._v("올바른 "),e("em",[a._v("gaiad")]),a._v(" 버전 (v2.0.15)를 운영하고 있는 것을 확인하세요:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ICQgZ2FpYWQgdmVyc2lvbiAtLWxvbmcKIG5hbWU6IGdhaWEKIHNlcnZlcl9uYW1lOiBnYWlhZAogY2xpZW50X25hbWU6IGdhaWFjbGkKIHZlcnNpb246IDIuMC4xNQogY29tbWl0OiA4OWNmN2U2ZmMxNjZlYWFiZjQ3YWQyNzU1YzQ0M2Q0NTVmZWRhMDJlCiBidWlsZF90YWdzOiBuZXRnbyxsZWRnZXIKIGdvOiBnbyB2ZXJzaW9uIGdvMS4xNSBkYXJ3aW4vYW1kNjQK"}})],1),a._v(" "),e("li",[e("p",[a._v("체인이 올바른 날짜와 시간에 멈추도록 설정하세요:")]),a._v(" "),e("p",[a._v("2021년 2월 18일 06:00 UTC의 UNIX seconds 시간 값: "),e("code",[a._v("1613628000")])]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGVybCAtaSAtcGUgJ3MvXmhhbHQtdGltZSA9LiovaGFsdC10aW1lID0gMTYxMzYyODAwMC8nIH4vLmdhaWEvY29uZmlnL2FwcC50b21sCg=="}})],1),a._v(" "),e("li",[e("p",[a._v("체인이 멈춘 후 "),e("code",[a._v(".gaia")]),a._v(" 디렉토리를 백업하세요")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bXYgfi8uZ2FpYSAuL2dhaWFkX2JhY2t1cAo="}}),a._v(" "),e("p",[e("strong",[a._v("참고")]),a._v(": 업그레이드 과정이 예상 외로 실패하거나 합의된 시간 내에 새로운 체인에 충분한 보팅 파워가 참여하지 않는 경우를 대비해 검증인과 노드 운영자는 export height의 풀 데이터 스냅샷을 진행하는 것을 권장합니다. 이 경우에는 체인 업그레이드 과정은 보류되고 "),e("code",[a._v("cosmoshub-3")]),a._v("의 운영이 재개됩니다. 해당 과정에 대해서는 "),e("a",{attrs:{href:"#%EB%B3%B5%EA%B5%AC"}},[a._v("복구")]),a._v(" 항목을 참고하세요.")])],1),a._v(" "),e("li",[e("p",[a._v("기존 "),e("code",[a._v("cosmoshub-3")]),a._v("의 상태를 내보내기:")]),a._v(" "),e("p",[a._v("다음 명령어를 사용하여 상태를 내보내기 전 "),e("code",[a._v("gaiad")]),a._v(" 바이너리가 꼭 멈춰있어야 합니다!\n검증인으로서 가장 최근 생성된 블록은 "),e("code",[a._v("~/.gaia/config/data/priv_validator_state.json")]),a._v("에서 확인하실 수 있습니다 (또는 이전 과정에서 백업을 진행한 경우 "),e("code",[a._v("gaiad_backup")]),a._v("). 블록 높이는 다음과 같이 확인하세요")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2F0IH4vLmdhaWEvY29uZmlnL2RhdGEvcHJpdl92YWxpZGF0b3Jfc3RhdGUuanNvbiB8IGpxICcuaGVpZ2h0Jwo="}}),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBnYWlhZCBleHBvcnQgLS1mb3ItemVyby1oZWlnaHQgLS1oZWlnaHQ9Jmx0O2hlaWdodCZndDsgJmd0OyBjb3Ntb3NodWJfM19nZW5lc2lzX2V4cG9ydC5qc29uCg=="}}),a._v(" "),e("p",[e("em",[a._v("이 과정은 상당한 시간이 (약 1시간) 소요될 수 있습니다")])])],1),a._v(" "),e("li",[e("p",[a._v("내보낸 제네시스 파일의 SHA256 값을 검증하세요:")]),a._v(" "),e("p",[a._v("본인의 제네시스 파일의 값을 네트워크 내 다른 검증인 / 풀 노드 운영자와 비교하세요.\n이 후 과정에서는 모든 인원이 동일한 제네시스 파일을 생성하는 것이 상당이 중요합니다.")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBqcSAtUyAtYyAtTSAnJyBjb3Ntb3NodWJfM19nZW5lc2lzX2V4cG9ydC5qc29uIHwgc2hhc3VtIC1hIDI1NgpbU0hBMjU2X1ZBTFVFXSAgY29zbW9zaHViXzNfZ2VuZXNpc19leHBvcnQuanNvbgo="}})],1),a._v(" "),e("li",[e("p",[a._v("이 단계 까지 오셨다면 올바른 제네시스 상태를 내보내셨습니다! 이후 과정부터는 "),e("a",{attrs:{href:"https://github.com/cosmos/gaia",target:"_blank",rel:"noopener noreferrer"}},[a._v("Gaia"),e("OutboundLink")],1),a._v(" v4.0.0을 필요로 합니다. 그룹 채팅 방의 다른 검증인들/피어와 새로운 제네시스 파일의 해시를 비교/검증하세요.")]),a._v(" "),e("p",[e("strong",[a._v("참고")]),a._v(": Go "),e("a",{attrs:{href:"https://golang.org/dl/",target:"_blank",rel:"noopener noreferrer"}},[a._v("1.15+"),e("OutboundLink")],1),a._v(" 버전이 설치되어야 합니다!")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9nYWlhLmdpdCAmYW1wOyZhbXA7IGNkIGdhaWEgJmFtcDsmYW1wOyBnaXQgY2hlY2tvdXQgdjQuMC4wOyBtYWtlIGluc3RhbGwK"}})],1),a._v(" "),e("li",[e("p",[a._v("_Gaia_의 올바른 버전(v4.0.0)을 운영하고 있는 것을 확인하세요:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ICQgZ2FpYWQgdmVyc2lvbiAtLWxvbmcKIG5hbWU6IGdhaWEKIHNlcnZlcl9uYW1lOiBnYWlhZAogdmVyc2lvbjogNC4wLjAKIGNvbW1pdDogMmJiMDQyNjYyNjY1ODY0NjgyNzFjNGFiMzIyMzY3YWNiZjQxMTg4ZgogYnVpbGRfdGFnczogbmV0Z28sbGVkZ2VyCiBnbzogZ28gdmVyc2lvbiBnbzEuMTUgZGFyd2luL2FtZDY0CiBidWlsZF9kZXBzOgogLi4uCg=="}}),a._v(" "),e("p",[a._v("Gaia v4.0.0 버전/커밋 해시 : "),e("code",[a._v("2bb04266266586468271c4ab322367acbf41188f")])])],1),a._v(" "),e("li",[e("p",[a._v("내보낸 상태를 기존 v2.0.15 버전에서 v4.0.0 버전으로 마이그레이션 하세요:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBnYWlhZCBtaWdyYXRlIGNvc21vc2h1Yl8zX2dlbmVzaXNfZXhwb3J0Lmpzb24gLS1jaGFpbi1pZD1jb3Ntb3NodWItNCAtLWluaXRpYWwtaGVpZ2h0IFtsYXN0X2Nvc21vc2h1Yi0zX2Jsb2NrKzFdICZndDsgZ2VuZXNpcy5qc29uCg=="}}),a._v(" "),e("p",[a._v("이 과정은 이전 체인에서 내보낸 상태를 기반으로 "),e("code",[a._v("cosmoshub-4")]),a._v("로 시작하기 위한 "),e("code",[a._v("genesis.json")]),a._v(" 파일을 생성합니다.")])],1),a._v(" "),e("li",[e("p",[a._v("최종 제네시스 JSON의 SHA256 해시 값을 검증하세요:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBqcSAtUyAtYyAtTSAnJyBnZW5lc2lzLmpzb24gfCBzaGFzdW0gLWEgMjU2CltTSEEyNTZfVkFMVUVdICBnZW5lc2lzLmpzb24K"}}),a._v(" "),e("p",[a._v("해당 값을 네트워크의 다른 검증인 / 풀 노드 운영자와 비교하세요.\n과정에서 모든 참여자가 같은 genesis.json 파일을 생성하는 것이 중요합니다.")])],1),a._v(" "),e("li",[e("p",[a._v("상태 리셋:")]),a._v(" "),e("p",[e("strong",[a._v("참고")]),a._v(": 이 과정을 진행하기 전에 꼭 노드의 상태를 백업하세요. 백업 과정은 "),e("a",{attrs:{href:"#%EB%B3%B5%EA%B5%AC"}},[a._v("복구")]),a._v(" 항복을 참고하세요")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBnYWlhZCB1bnNhZmUtcmVzZXQtYWxsCg=="}})],1),a._v(" "),e("li",[e("p",[a._v("새로운 "),e("code",[a._v("genesis.json")]),a._v("을 "),e("code",[a._v(".gaia/config/")]),a._v(" 디렉토리로 옮기세요:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3AgZ2VuZXNpcy5qc29uIH4vLmdhaWEvY29uZmlnLwo="}})],1),a._v(" "),e("li",[e("p",[a._v("블록체인을 가동하세요")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQK"}}),a._v(" "),e("p",[a._v("Crisis 모듈의 제네시스 상태 자동 검증은 30-120분 소요될 수 있습니다. 해당 기능은 "),e("code",[a._v("gaiad start --x-crisis-skip-assert-invariants")]),a._v("로 비활성화할 수 있습니다.")])],1)]),a._v(" "),e("h2",{attrs:{id:"서비스-제공자를-위한-정보"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#서비스-제공자를-위한-정보"}},[a._v("#")]),a._v(" 서비스 제공자를 위한 정보")]),a._v(" "),e("h1",{attrs:{id:"rest-서버"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rest-서버"}},[a._v("#")]),a._v(" REST 서버")]),a._v(" "),e("p",[a._v("만약 이전까지 "),e("code",[a._v("gaiacli rest-server")]),a._v(" 명령어로 REST 서버를 구동하신 경우, 해당 명령어는 이번 버전부터 비활성화 됩니다. API 서버는 데몬 내에서 활성화되며, "),e("code",[a._v(".gaia/config/app.toml")]),a._v(" 설정 내에서 활성화됩니다:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"W2FwaV0KIyBFbmFibGUgZGVmaW5lcyBpZiB0aGUgQVBJIHNlcnZlciBzaG91bGQgYmUgZW5hYmxlZC4KZW5hYmxlID0gZmFsc2UKIyBTd2FnZ2VyIGRlZmluZXMgaWYgc3dhZ2dlciBkb2N1bWVudGF0aW9uIHNob3VsZCBhdXRvbWF0aWNhbGx5IGJlIHJlZ2lzdGVyZWQuCnN3YWdnZXIgPSBmYWxzZQo="}}),a._v(" "),e("p",[e("code",[a._v("swagger")]),a._v(" 설정은 Swagger 문서 API를 활성화/비활성화 하는 여부를 관리합니다 (예, /swagger/ API 엔드포인트)")]),a._v(" "),e("h1",{attrs:{id:"grpc-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grpc-설정"}},[a._v("#")]),a._v(" gRPC 설정")]),a._v(" "),e("p",[a._v("gRPC 설정은 "),e("code",[a._v(".gaia/config/app.toml")]),a._v("에 있습니다.")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"yaml",base64:"W2dycGNdCiMgRW5hYmxlIGRlZmluZXMgaWYgdGhlIGdSUEMgc2VydmVyIHNob3VsZCBiZSBlbmFibGVkLgplbmFibGUgPSB0cnVlCiMgQWRkcmVzcyBkZWZpbmVzIHRoZSBnUlBDIHNlcnZlciBhZGRyZXNzIHRvIGJpbmQgdG8uCmFkZHJlc3MgPSAmcXVvdDswLjAuMC4wOjkwOTAmcXVvdDsK"}}),a._v(" "),e("h1",{attrs:{id:"스테이트-싱크"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#스테이트-싱크"}},[a._v("#")]),a._v(" 스테이트 싱크")]),a._v(" "),e("p",[a._v("스테이트 싱크 설정은 "),e("code",[a._v(".gaia/config/app.toml")]),a._v("에 있습니다.")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"yaml",base64:"IyBTdGF0ZSBzeW5jIHNuYXBzaG90cyBhbGxvdyBvdGhlciBub2RlcyB0byByYXBpZGx5IGpvaW4gdGhlIG5ldHdvcmsgd2l0aG91dCByZXBsYXlpbmcgaGlzdG9yaWNhbAojIGJsb2NrcywgaW5zdGVhZCBkb3dubG9hZGluZyBhbmQgYXBwbHlpbmcgYSBzbmFwc2hvdCBvZiB0aGUgYXBwbGljYXRpb24gc3RhdGUgYXQgYSBnaXZlbiBoZWlnaHQuCltzdGF0ZS1zeW5jXQojIHNuYXBzaG90LWludGVydmFsIHNwZWNpZmllcyB0aGUgYmxvY2sgaW50ZXJ2YWwgYXQgd2hpY2ggbG9jYWwgc3RhdGUgc3luYyBzbmFwc2hvdHMgYXJlCiMgdGFrZW4gKDAgdG8gZGlzYWJsZSkuIE11c3QgYmUgYSBtdWx0aXBsZSBvZiBwcnVuaW5nLWtlZXAtZXZlcnkuCnNuYXBzaG90LWludGVydmFsID0gMAojIHNuYXBzaG90LWtlZXAtcmVjZW50IHNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHJlY2VudCBzbmFwc2hvdHMgdG8ga2VlcCBhbmQgc2VydmUgKDAgdG8ga2VlcCBhbGwpLgpzbmFwc2hvdC1rZWVwLXJlY2VudCA9IDIK"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);