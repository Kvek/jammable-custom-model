import { Ticket } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from "@components/ui/tooltip";

import { SketchLogoIcon } from "@radix-ui/react-icons";

const UserBlock = (): JSX.Element => (
  <div className="flex h-[250px] w-full items-center justify-between space-x-5 rounded-primary bg-primary px-4">
    <Avatar className="h-28 w-28 cursor-auto select-none border-2 border-foreground">
      <AvatarImage alt="profile avatar" src="https://github.com/shadcn.png" />
      <AvatarFallback>P</AvatarFallback>
    </Avatar>
    <div className="flex h-28 flex-col justify-center space-y-4 text-end text-foreground">
      <h2 className="text-2xl font-semibold">Vivek Kaveripatnam</h2>

      <div className=" flex flex-col items-end space-y-1">
        <span className="text-xs text-primary/90">vkavek@gmail.com</span>
        <div className="flex space-x-3 text-xs text-primary/60">
          <Tooltip>
            <TooltipTrigger>
              <div className="flex space-x-0.5 text-xs hover:text-primary/100">
                <span>95</span>
                <Ticket height={15} width={15} />
              </div>
            </TooltipTrigger>

            <TooltipContent>
              <p>You have 95 passes remaining</p>
              <TooltipArrow className="fill-foreground" />
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <div className="flex space-x-0.5 text-xs hover:text-primary/100">
                <span>15</span>
                <SketchLogoIcon height={15} width={15} />
              </div>
            </TooltipTrigger>

            <TooltipContent>
              <p>You have 15 credits remaining</p>
              <TooltipArrow className="fill-foreground" />
            </TooltipContent>
          </Tooltip>

          <span>Member since 2022</span>
        </div>
      </div>
    </div>
  </div>
);

export default UserBlock;
