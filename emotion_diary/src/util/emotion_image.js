import emotion1 from './../assets/emotion1.png';
import emotion2 from './../assets/emotion2.png';
import emotion3 from './../assets/emotion3.png';
import emotion4 from './../assets/emotion4.png';
import emotion5 from './../assets/emotion5.png';

export function getEmotionImage(emotionId){
  switch(emotionId){
    case 1:
      return {
        src:emotion1,
        alt:'완전 좋음'
      };
    case 2:
      return {
        src:emotion2,
        alt:'좋음'
      };
    case 3:
      return {
        src:emotion3,
        alt:'보통'
      };
    case 4:
      return {
        src:emotion4,
        alt:'나쁨'
      };
    case 5:
      return {
        src:emotion5,
        alt:'끔찍함'
      };
    default : 
    return null;
  }
}