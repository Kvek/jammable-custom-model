import { useRouter } from "next/navigation";

import { Button } from "@components/ui/button";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export const NavButtons = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="flex space-x-4">
      <Button
        aria-label="page navigation back button"
        className="rounded-full"
        id="page-navigation-back-button"
        onClick={() => {
          router.back();
        }}
        size={"icon"}
        variant={"secondary"}>
        <ChevronLeftIcon height={15} width={15} />
      </Button>

      <Button
        aria-label="page navigation forward button"
        className="rounded-full"
        id="page-navigation-forward-button"
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
