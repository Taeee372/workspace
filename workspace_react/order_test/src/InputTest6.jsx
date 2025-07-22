import React from 'react'
import './InputTest6.css'

const InputTest6 = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td colSpan={2}>회원 기본 정보</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>아이디</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td>비밀번호 확인</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td>메일주소</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td>이름</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td colSpan={2}>개인 신상 정보</td>
          </tr>
          <tr>
            <td>주민등록번호</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td>생일</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td>주소</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td>자기소개</td>
            <td><input type="text" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default InputTest6