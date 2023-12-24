import SignUpModal from "../../../_component/SignUpModal"

/**
 * <Link/>를 통해서 /i/flow/login 경로로 접근하면
 * (.)i/flow/login 인터셉터 라우터가 작동해서 -> @modal/i/flow/login 폴더안에 내용이 그려진다.
 *
 * url 직접 입력 접근 시 본 파일 실행됨.
 *
 * @param props
 * @returns
 */
function SignUpModal_() {
  return <SignUpModal />
}

export default SignUpModal_
