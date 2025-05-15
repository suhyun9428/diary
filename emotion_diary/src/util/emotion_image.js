import emotion1 from './../assets/image__happy.png';
import emotion2 from './../assets/image__good.png';
import emotion3 from './../assets/image__peace.png';
import emotion4 from './../assets/image__soso.png';
import emotion5 from './../assets/image__bad.png';

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