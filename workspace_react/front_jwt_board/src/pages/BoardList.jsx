import React, { useEffect, useState } from 'react'
import ListTable from '../components/ListTable'
import * as boardApi from '../apis/board/board_api.js'
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';


const BoardList = () => {
  const nav = useNavigate();

  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    changeBoardList();
  }, [])

  //조회 후 목록 데이터 세팅 함수(getBoardListApi() 자체는 비동기 함수이기 때문에)
  //result에 동기로 확실하게 데이터를 넣은 후 set으로 boardList에 데이터 넣어주기
  const changeBoardList = async () => {
    const result = await boardApi.getBoardListApi();
    setBoardList(result);
  }

  return (
    <div>
      <div>
        <ListTable>
          <thead>
            <tr>
              <td>No</td>
              <td>제목</td>
              <td>작성자</td>
              <td>작성일</td>
              <td>조회수</td>
            </tr>
          </thead>
          <tbody>
            {
              boardList.length == 0
              ?
              <tr>
                <td colSpan={5}>조회된 데이터가 없습니다</td>
              </tr>
              :
              boardList.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{boardList.length - i}</td>
                    <td>
                      <span onClick={() => nav(`/detail/${data.boardNum}`)}>{data.title}</span>
                    </td>
                    <td>{data.writer}</td>
                    <td>{dayjs(data.createDate).format('YYYY-MM-DD')}</td>
                    <td>{data.readCnt}</td>
                  </tr>
                ) 
              })
            }
          </tbody>
        </ListTable>
      </div>
      <div>
        <button type='button' onClick={() => nav('/write')}>글쓰기</button>
      </div>
    </div>
  )
}

export default BoardList