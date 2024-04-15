import { useRouter } from "next/navigation";

import { Button } from "@components/ui/button";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export const NavButtons = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="flex space-x-4">
      <Button
        className="rounded-full"
        onClick={() => {
          router.back();
        }}
        size={"icon"}
        variant={"secondary"}>
        <ChevronLeftIcon height={15} width={15} />
      </Button>

      <Button
        className="rounded-full"
        onClick={() => {
          router.forward();
        }}
        size={"icon"}
        variant={"secondary"}>
        <ChevronRightIcon height={15} width={15} />
      </Button>
    </div>
  );
};
