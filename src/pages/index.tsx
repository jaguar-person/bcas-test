import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Center, Loader } from "@mantine/core";

export default function Loading() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      void router.push("/app", undefined, {
        unstable_skipClientCache: true,
      });
    }, 2000);
  }, []);

  return (
    <>
      <Link href="/app" prefetch />

      <Center h="100vh" bg="#121417">
        <Loader color="#293038" type="dots" />
      </Center>
    </>
  );
}
