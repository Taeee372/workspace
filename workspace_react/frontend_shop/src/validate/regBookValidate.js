export const handleErrorMsg = (e) => {
  let errorStr = '';

  switch(e.target.name){
    case 'category' :
      if(e.target.value === ''){
        errorStr = '카테고리를 선택해주세요.';
      }
      else{
        errorStr = '';
      }
      break;
    case 'title' :
      if(e.target.value === ''){
        errorStr = '도서명을 입력해주세요.'
      }
      else{
        errorStr = ''
      }
      break;
    case 'publisher' :
      if(e.target.value === ''){
        errorStr = '출판사를 입력해주세요.'
      }
      else{
        errorStr = ''
      }
      break;
    case 'price' :
      if(e.target.value === ''){
        errorStr = '가격을 입력해주세요.'
      }
      else{
        errorStr = ''
      }
      break;
  }
  return errorStr;
}