"use client";

import { selectPurchaseModalState } from "@redux/purchase-modal/selector";
import { setModalDisplayState } from "@redux/purchase-modal/slice";
import { useAppDispatch, useAppSelector } from "@redux/store";

import Modal from "@components/ui/modal";
import { RadioGroup, RadioGroupItem } from "@components/ui/radio-group";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PurchaseModal = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const showModal = useAppSelector(selectPurchaseModalState);

  return (
    <Modal showModal={showModal}>
      <div className="relative flex h-[55vh] w-[30vw] flex-col justify-between bg-primary/[3%] p-4">
        <Tabs defaultValue="passes">
          <TabsList className="mb-10 grid w-full grid-cols-2 rounded-full">
            <TabsTrigger className="rounded-full" value="passes">
              Passes
            </TabsTrigger>
            <TabsTrigger className="rounded-full" value="membership">
              Membership
            </TabsTrigger>
          </TabsList>

          <TabsContent value="passes">
            <Card className="border-none bg-transparent">
              <CardContent className="p-0">
                <RadioGroup className="space-y-2" defaultValue="comfortable">
                  <div className="flex h-16 w-full cursor-pointer items-center space-x-2 rounded-primary border border-[#A269DB] bg-[#A269DB]/20 p-2 hover:bg-[#A269DB]/85">
                    <RadioGroupItem id="p1" value="default" />
                    <div className="flex w-full">
                      <span className="flex w-full flex-col justify-center space-y-1">
                        <Label htmlFor="p1">1 Voice Pass</Label>
                        <Label className="text-sm font-semibold opacity-50" htmlFor="p1">
                          £6.99
                        </Label>
                      </span>

                      <span className="flex items-center text-xs font-semibold opacity-50">£6.99/pass</span>
                    </div>
                  </div>
                  <div className="flex h-16 w-full cursor-pointer items-center space-x-2 rounded-primary border border-[#A269DB] bg-[#A269DB]/20 p-2 hover:bg-[#A269DB]/85">
                    <RadioGroupItem id="p3" value="default" />
                    <div className="flex w-full">
                      <span className="flex w-full flex-col justify-center space-y-1">
                        <Label htmlFor="p3">3 Voice Passes</Label>
                        <Label className="text-sm font-semibold opacity-50" htmlFor="p3">
                          <span className="line-through">£20</span> £14.99
                        </Label>
                      </span>

                      <span className="flex items-center text-xs font-semibold opacity-50">£4.99/pass</span>
                    </div>
                  </div>
                  <div className="flex h-16 w-full cursor-pointer items-center space-x-2 rounded-primary border border-[#A269DB] bg-[#A269DB]/20 p-2 hover:bg-[#A269DB]/85">
                    <RadioGroupItem id="p10" value="default" />
                    <div className="flex w-full">
                      <span className="flex w-full flex-col justify-center space-y-1">
                        <Label htmlFor="p10">1 Voice Pass</Label>
                        <Label className="text-sm font-semibold opacity-50" htmlFor="p10">
                          £50
                        </Label>
                      </span>

                      <span className="flex items-center text-xs font-semibold opacity-50">£5.00/pass</span>
                    </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="membership">
            <Card className="border-none bg-transparent">
              <CardContent className="p-0">
                <RadioGroup className="space-y-2" defaultValue="comfortable">
                  <div className="flex h-16 w-full cursor-pointer items-center space-x-2 rounded-primary border border-[#A269DB] bg-[#A269DB]/20 p-2 hover:bg-[#A269DB]/85">
                    <RadioGroupItem id="sm" value="default" />
                    <div className="flex w-full">
                      <span className="flex w-full flex-col justify-center space-y-2">
                        <Label htmlFor="sm">Starter</Label>
                        <Label className="opacity-50" htmlFor="sm">
                          <span className="line-through">£7.99</span> £1.99
                        </Label>
                      </span>

                      <span className="flex items-center text-xs font-semibold opacity-50">£1.99/month</span>
                    </div>
                  </div>{" "}
                  <div className="flex h-16 w-full cursor-pointer items-center space-x-2 rounded-primary border border-[#A269DB] bg-[#A269DB]/20 p-2 hover:bg-[#A269DB]/85">
                    <RadioGroupItem id="cm" value="default" />
                    <div className="flex w-full">
                      <span className="flex w-full flex-col justify-center space-y-2">
                        <Label htmlFor="cm">Creator</Label>
                        <Label className="opacity-50" htmlFor="cm">
                          <span className="line-through">£24.99</span> £9.99
                        </Label>
                      </span>

                      <span className="flex items-center text-xs font-semibold opacity-50">£9.99/month</span>
                    </div>
                  </div>{" "}
                  <div className="flex h-16 w-full cursor-pointer items-center space-x-2 rounded-primary border border-[#A269DB] bg-[#A269DB]/20 p-2 hover:bg-[#A269DB]/85">
                    <RadioGroupItem id="pu" value="default" />
                    <div className="flex w-full">
                      <span className="flex w-full flex-col justify-center space-y-2">
                        <Label htmlFor="pu">Power User</Label>
                        <Label className="opacity-50" htmlFor="pu">
                          £89.99
                        </Label>
                      </span>

                      <span className="flex items-center text-xs font-semibold opacity-50">£89.99/pass</span>
                    </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className=" w-full">
          <div className="flex h-10 w-full items-end justify-evenly space-x-5 md:justify-end">
            <Button
              className="min-w-40 max-sm:w-full"
              onClick={() => dispatch(setModalDisplayState(false))}
              size={"lg"}
              variant="secondary">
              Cancel
            </Button>

            <Button
              className="min-w-40 bg-[#A269DB]/90 hover:bg-[#A269DB]/100 max-sm:w-full"
              onClick={() => dispatch(setModalDisplayState(false))}
              size={"lg"}
              variant={"shell"}>
              Purchase
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PurchaseModal;
