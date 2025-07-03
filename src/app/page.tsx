import {Suspense} from "react";
import ClientHome from "@/components/ClientHome/ClientHome";


export default function Home() {

  return (
      <>
          <Suspense fallback={<p>Loading users...</p>}>
              <ClientHome />
          </Suspense>
      </>
  );
}
