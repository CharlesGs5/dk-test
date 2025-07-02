import { getUser } from "@/services/api";
import UserList from "@/components/UserList/page";

const response = await getUser(1);
const users = response.data;

export default function Home() {
  return (
      <>
          <UserList users={users}/>
      </>
  );
}
