//confirm(출력메시지) => Yes, No 버튼 : 리턴타입 boolean
        // function confirmTest() {
        //     confirm('회원가입을 하시겠습니까?');
        // }

        //confirm() => 확인(true), 취소(false) : boolean
        function register() {
            if( confirm('회원가입을 하시겠습니까?')) {
                location.href = "https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/";
            }           
        }

        //DELETE FROM member WHERE id = ?;
        function memberDelete(id) {
           if(confirm(id + '번 사원의 정보를 정말 삭제하시겠습니까?\n삭제하신 정보는 복구할 수 없습니다.')) {
            //DELETE FROM member WHERE id = ?;
            location.href = "https://daum.net";
           }
        }