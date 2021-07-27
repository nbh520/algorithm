// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。


/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  var arr = [];
  if(s.length === 1)
      return false;
  for(var i of s){
      if(i === '[' || i === '{' || i === '('){
          arr.push(i);
      }else{
          if(arr.length === 0){
              return false;
          }
          if( arr[arr.length -1] === '{' && i !== '}'){
              return false;
          }if( arr[arr.length -1] === '(' && i !== ')'){
              return false;
          }if( arr[arr.length -1] === '[' && i !== ']'){
              return false;
          }else{
              arr.pop();
          }
      }
  }
  if(arr.length !== 0){
      return false;
  }
  return true;
 }