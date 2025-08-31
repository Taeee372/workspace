import React, { useEffect, useRef, useState } from 'react'
import styles from './CartList.module.css'
import Button from '../common/Button'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs'
import Input from '../common/Input'

const CartList = () => {
  //장바구니 목록 데이터를 조회하는 useEffect를 재실행하기 위한 변수
  const [reload, setReload] = useState(0);

  const nav = useNavigate();

  //장바구니 목록 저장할 state 변수
  const [cartList, setCartList] = useState([]);

  //선택한 체크박스 값을 저장할 state 변수
  //모든 체크박스가 선택된 채로 화면이 나오려면 조회한 모든 cartNum이 초기값으로 세팅되어야 함
  const [checkData, setCheckData] = useState([]); 

  //전체 체크박스의 체크여부를 저장할 state 변수
  const [isChecked, setIsChecked] = useState(true);

  //최종 구매 가격을 저장할 state 변수
  const [finalPrice, setFinalPrice] = useState(0);

  //조회한 장바구니 목록의 모든 cartNum을 저장할 배열
  //arr 변수는 화면에 보여줄 데이터가 아니기 때문에 state 변수로 줄 필요가 없다.
  //근데! state 변수가 아니면 리렌더링 됐을 때 arr이 초기화 돼버리는 문제가 있다..
  //굳이 state 변수로 주지 않아도 되는데 위의 문제점 하나 때문에 state 변수로 주긴 아싑... 리렌더링이 많을 수록 성능이 저하되니까

  //so 우리가 원하는 건
  // 1. 변수의 값이 초기화되지 않아야 한다. 
  // 2. 값이 변해도 리렌더링 할 필요는 없다.
  // => 이 두 조건을 만족하기 위해서는 useRef로 변수를 선언해준다. (useRef : 리렌더링되어도 값이 초기화되지 않는다.)
  // useRef를 사용하면 초기값이 current라는 키의 value로 저장된다.
  const arr = useRef([]); //arr = {current : []}

   // console.log(checkData);

  //조회한 장바구니 목록 전체 가격의 합을 저장할 변수
  let price = useRef(0); //price = {current : 0}

  //장바구니 목록 가져오기
  useEffect(() => {
    //장바구니 페이지에 들어왔는데, 만약 로그인 되어있지 않으면
    //강제로 상품 목록 페이지로 이동시키기
    const loginInfo = sessionStorage.getItem('loginInfo');

    if(loginInfo === null){
      alert('접근 권한이 없습니다.')
      nav('/')
      return ;
    }

    //JSON -> 객체 변환
    const memId = JSON.parse(loginInfo).memId
    axios.get(`/api/carts/${memId}`)
    .then(res => {
      setCartList(res.data)
      // console.log(res.data)
    
      //체크박스 초기값 세팅
      for(const e of res.data){
        arr.current.push(e.cartNum); //arr = {current : []} => arr 객체 안에 있는 current 안에 있는 배열에 접근해서 cartNum push
      }
      
      setCheckData(arr.current); 
      //useRef & current를 씀으로써 arr이 배열이 아닌 객체가 됐으니, 넣는 것도 배열을 갖고 있는 arr 안의 current를 넣으면 된다

      //총 구매 가격 세팅
      //장바구니 목록을 조회할 때마다 총 가격은 0으로 초기화 후 계산
      //price는 useRef로 정의돼있기 때문에 직접 초기화해주지 않으면 값이 계속 누적된 상태
      //1000 + 2000 = 3000 , 1000 상품 삭제 => 3000값 그대로 남아있는 상태에서 리로드 => 3000 + 2000 = 5000
      //초기화시키지 않으면 이런 사태가 벌어져버린다...
      price.current = 0;
      for(const e of res.data){
        price.current = price.current + e.totalPrice //price = {current : 총 가격}
      }
      setFinalPrice(price.current);
    })
    .catch(e => console.log(e));
  }, [reload])

  //체크박스 값 변경 시 실행 함수
  const handleCheckbox = (e) => {
    //체크가 됐다면...
    //cartNum을 숫자로 변환해서 저장  parseInt(문자열)
    if(e.target.checked){
      setCheckData([...checkData, parseInt(e.target.value)]);
    }

    //체크가 해제 됐다면...
    else{
      const result = checkData.filter((cartNum) => {return cartNum != e.target.value})
      setCheckData(result);
    }
  }

  //제목 줄의 체크박스가 변할 때, 총 구매 가격을 변경하는 함수
  const handleFinalPriceAtTitle = (e) => {
    if(e.target.checked){
      setFinalPrice(price.current);
    }
    else{
      setFinalPrice(0);
    }
  }

  //내용 줄의 체크박스가 변할 때, 총 구매 가격을 변경하는 함수
  const handleFinalPrice = (price, e) => { //매개변수로 넘어온 cart.totalPrice를 price로 받아오기, 이벤트 정보인 e를 e로 받아오기
    //체크가 됐다면 => 총 가격 = 총 가격 + 체크한 가격
    if(e.target.checked){
      // finalPrice = finalPrice + price;
      setFinalPrice(finalPrice + price) //state 변경함수를 const로 선언해놨기 때문에 setFinalPrice를 호출해서 변경해줘야 함
    }
    //체크가 해제됐다면 => 총 가격 = 총 가격 - 체크한 가격
    else{
      // finalPrice = finalPrice - price;
      setFinalPrice(finalPrice - price)
    }
  }


  //장바구니 삭제
  const deleteCart = (cartNum) => {
    confirm('선택한 상품을 장바구니에서 비우시겠습니까?');

    if(result){
       axios.delete(`/api/carts/${cartNum}`)
      .then(res => {
        alert('상품을 장바구니에서 삭제했습니다.');
        //reload 값이 바뀌면서 useEffect 안의 장바구니 목록 조회가 재실행
        setReload(reload + 1)
      })
      .catch(e => console.log(e))
    }
  }


  //수량 변경 함수
  const updateCart = (e, cartNum, bookNum) => {
    axios.put('/api/carts', {
      'cartCnt' : e.target.value,
      'bookNum' : bookNum,
      'cartNum' : cartNum
    })
    .then(res => setReload(reload + 1))
    .catch(e => console.log(e));
  }

  return (
    <div className={styles.container}>
      <div className={styles.cart_list_table}>
        <table>
          <colgroup>
            <col width='4%'/>
            <col width='4%'/>
            <col width='*'/>
            <col width='10%'/>
            <col width='19%'/>
            <col width='10%'/>
            <col width='15%'/>
            <col width='10%'/>
          </colgroup>
          <thead>
            <tr>
              <td>
                <input 
                  type="checkbox"
                  checked={isChecked}   
                  onChange={e => {
                    //전체 체크박스가 체크되면 -> 모든 체크박스 체크
                    //전체 체크박스가 해제되면 -> 모든 체크박스 체크 해제  => 체크박스 총괄 관리
                    e.target.checked ? setCheckData(arr.current) : setCheckData([]);

                    //제목줄의 체크박스 체크 여부를 결정
                    setIsChecked(!isChecked);

                    //제목줄의 체크 여부에 따라 총 구매 가격 변경
                    handleFinalPriceAtTitle(e);
                    }}/>
              </td>
              <td>No</td>
              <td>상품정보</td>
              <td>가격</td>
              <td>수량</td>
              <td>총 가격</td>
              <td>등록일</td>
              <td>삭제</td>
            </tr>
          </thead>
          <tbody>
            {
              cartList.length === 0 
              ? 
              <tr>
                <td colSpan={8}>장바구니에 담은 도서가 없습니다.</td>
              </tr>
              : 
              cartList.map((cart, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <input 
                        type="checkbox"
                        checked={checkData.includes(cart.cartNum)}
                        value={cart.cartNum}
                        onChange={e => {
                          //내용줄의 체크박스 체크여부를 결정
                          handleCheckbox(e);
                          
                          //내용줄의 체크박스 체크여부에 따른 총 구매 가격 변경
                          handleFinalPrice(cart.totalPrice, e); //한 줄의 총 가격, 이벤트 정보인 e를 handleFinalPrice에 매개변수로 전달
                        }}
                      />
                    </td>
                    <td>{cartList.length - i}</td>
                    <td>
                     <div className={styles.item_info}>
                        <div>
                          <img src={`http://localhost:8080/upload/${cart.bookDTO.imgList[0].attachedImgName}`} width={'50px'}/>
                        </div>
                        <div>{cart.bookDTO.title}</div>
                     </div>
                    </td>
                    <td>{cart.bookDTO.price.toLocaleString()}</td>
                    <td>
                      <div className={styles.cnt_div}>
                        {/* 
                          인풋 태그의 value와 onChange는 한 쌍이다.
                          정상 작동을 위해서는 value에 사용하는 데이터와 onChange에서 컨트롤하는 데이터는 동일해야 한다!
                          만약 value와 onChange에서 사용하는 데이터가 다르면 input태그에 입력한 내용이 화면에 반영되지 않는다.

                          결론1. value와 onChange에 사용하는 데이터는 동일하게 사용하자

                          하지만 value와 onChange의 코드를 작성하면 두 곳에서 사용하는 데이터가 다른 경우도 존재한다.
                          ( ex) cart-setCart 쌍이 아닌, cart-updateCnt 쌍이 되어버리는 경우)

                          이럴 경우에는, 
                          결론2. value 대신 defaultValue를 사용한다.
                           defultValue : onChange와 한 쌍이 아니어도 됨
                           그치만 남용하면 데이터 관리가 어려워지니, 가능하다면 결론1을 사용하도록 하자..
                        */} 
                        <Input 
                          size='100%' 
                          type="number" 
                          // value={cart.cartCnt} 
                          defaultValue={cart.cartCnt}
                          onChange={e => {
                            updateCart(e, cart.cartNum, cart.bookNum);
                          }}

                          /* 미완성 코드

                          // onKeyDown이 onChange보다 먼저 실행됨
                          onKeyDown={e => {
                            //키보드를 눌렀을 때 입력한 값이 숫자가 아니면 더 이상 이벤트를 진행하지 않겠다.

                            //기본 이벤트를 막겠다.
                            e.preventDefault();
                          }}

                              미완성  코드    */ 

                        />
                      </div>
                    </td>
                    <td>{cart.totalPrice.toLocaleString()}</td>
                    <td>{dayjs(cart.cartDate).format('YYYY-MM-DD HH:mm')}</td>
                    <td>
                      <Button size='100%' title='삭제' color='gray' onClick={e => deleteCart(cart.cartNum)}/>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div className={styles.buy_div}>
        <p>구매가격 : {finalPrice.toLocaleString() + '원'}</p>
        <Button title='선택 구매'/>
      </div>
    </div>
  )
}

export default CartList