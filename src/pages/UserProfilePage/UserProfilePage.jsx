import { useUserProfile } from "../../layouts/BaseLayout";

export default function UserProfilePage(){
   const user = useUserProfile()
   return (
      <>
         {console.log(user)}
      </>
   )
}