import { notFound } from 'next/navigation';
import SceneReview from './SceneReview';

export default function ReviewPage(){
  if(process.env.NODE_ENV!=='development')notFound();
  return <SceneReview/>;
}
