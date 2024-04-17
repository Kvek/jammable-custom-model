"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Checkbox } from "@components/ui/checkbox";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil1Icon } from "@radix-ui/react-icons";

const formSchema = z.object({
  name: z.string().min(5).max(50),
  removeInstrumentals: z.boolean().default(false).optional(),
  removeReverbs: z.boolean().default(false).optional(),
  termsAgreement: z.boolean().default(false),
  voicePublic: z.boolean().default(false).optional(),
});

export const FileConfig = (): JSX.Element => {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: "",
      removeInstrumentals: false,
      removeReverbs: false,
      termsAgreement: false,
      voicePublic: false,
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>): void => {
    console.log(values);
  };

  return (
    <div className="flex h-full w-full flex-col justify-between space-y-3 rounded-primary border bg-primary p-2 md:p-4">
      <h3 className="flex items-center justify-center p-2 text-xl font-semibold md:p-5">Configure your voice</h3>

      <Form {...form}>
        <form className="h-full p-2 md:space-y-10 md:p-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex space-x-4">
            <div className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-[url('/profile.jpeg')] bg-cover bg-center bg-no-repeat">
              <Pencil1Icon className="absolute z-[2] hidden cursor-pointer group-hover:flex" height={20} width={20} />
              <span className="absolute hidden h-full w-full cursor-pointer bg-background/40  group-hover:flex" />
            </div>

            <div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-semibold">Voice Name</FormLabel>
                    <FormControl>
                      <Input placeholder="name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="font-semibold">Advanced settings</h2>
            <div className="flex flex-col space-y-3 p-4">
              <FormField
                control={form.control}
                name="removeInstrumentals"
                render={({ field }) => (
                  <FormItem className="flex space-x-4 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Remove instrumentals</FormLabel>
                      <FormDescription>Select this if your dataset contains instrumentals</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="removeReverbs"
                render={({ field }) => (
                  <FormItem className="flex space-x-4 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Remove reverb</FormLabel>
                      <FormDescription>Select this if your dataset contains lots of reverb</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="font-semibold">Terms of use</h2>
            <div className="flex flex-col space-y-3 p-4">
              <FormField
                control={form.control}
                name="voicePublic"
                render={({ field }) => (
                  <FormItem className="flex space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Make voice <span className="text-button-pink">public</span>
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="termsAgreement"
                render={({ field }) => (
                  <FormItem className="flex space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I agree to the <span className="text-button-pink">Terms of use</span> and{" "}
                        <span className="text-button-pink">DMCA policy</span>
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </form>
      </Form>

      <div className="flex h-full w-full flex-col justify-between">
        <h2 className="flex justify-center text-sm font-semibold md:m-5">
          By continuing you confirm that the uploaded content is your original vocals/song and does not contain third
          party copyright material.
        </h2>

        <div className="w-full">
          <div className="flex h-20 w-full items-end justify-evenly space-x-2 md:justify-end">
            <Button className="min-w-40 max-sm:w-full" size={"lg"} variant="secondary">
              Cancel
            </Button>

            <Button className="min-w-40 bg-button-pink max-sm:w-full" size={"lg"} variant={"shell"}>
              Configure your voices
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
