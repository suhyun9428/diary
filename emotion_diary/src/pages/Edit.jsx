import { useParams } from "react-router-dom";
const Edit = ()=>{
    const params = useParams();
    return <p>Edit : {params.id}번 일기</p>
}
export default Edit;