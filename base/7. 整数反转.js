

// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

// 假设环境不允许存储 64 位整数（有符号或无符号）。
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  if(x > Math.pow(2,31) - 1){
       return 0;
   }
   var b = 1;
   if(x < 0){
       b = -1;
       x = Math.abs(x);
   }
   x = x.toString();
   var a = '';
   for(var i = 0 ; i < x.length ; i++){
       a = a + x.charAt(x.length - i - 1);
   }
   if(a > Math.pow(2,31) - 1){
       return 0;
   }
   return a * b;

};