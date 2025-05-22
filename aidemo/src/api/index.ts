import applicant from "./applicant";
export const send= async(message:string)=>{
  const res= await  applicant.post("/api",{
        data:message
    })
    return res.data;
}
