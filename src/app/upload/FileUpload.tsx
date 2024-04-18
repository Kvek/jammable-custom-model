"use client";

import { Trash2Icon } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { v4 as uuidv4 } from "uuid";

import { updateStepsState } from "@redux/steps/slice";
import { useAppDispatch } from "@redux/store";

import { ToolTipButton } from "@components/ui/button";
import { ScrollArea } from "@components/ui/scroll-area";

import { cn } from "@lib/utils";

export const FileUpload = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [files, setFiles] = useState<Array<{ name: string; key: string; type: string }>>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((f) => [...f, ...acceptedFiles.map(({ name, type }) => ({ key: uuidv4(), name, type }))]);

    dispatch(updateStepsState({ complete: true, title: "upload" }));
  }, []);

  const { getInputProps, getRootProps } = useDropzone({
    accept: { "audio/mp4": [".m4a"], "audio/mpeg": [".mp3"], "audio/wav": [".wav"] },
    onDrop,
  });

  const deleteVoiceHandler = (fKey: string): void => {
    setFiles((files) => {
      const filteredFiles = files.filter(({ key }) => key !== fKey);
      dispatch(updateStepsState({ complete: !!filteredFiles.length, title: "upload" }));

      return filteredFiles;
    });
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div
        className={cn(
          "flex h-full w-full flex-col items-center rounded-primary max-md:space-y-4 md:h-[45dvh] md:max-w-[65vw] md:flex-row md:justify-center md:space-x-4",
        )}>
        <div
          className={cn(
            "h-full transition-[max-height] duration-500 max-sm:w-full md:w-[45vw]",
            files.length ? "max-sm:max-h-[20dvh]" : "max-sm:max-h-full",
          )}>
          <div
            className="flex h-full w-full cursor-pointer items-center justify-center rounded-primary bg-primary bg-borderPattern p-4 hover:bg-primary/10"
            {...getRootProps({ "aria-label": "drag and drop area" })}>
            <div className="flex h-full w-full items-end justify-center bg-[url('/files.svg')] bg-center bg-no-repeat max-sm:bg-[length:40%]">
              <p className="text-foreground/60 md:py-10">Drop your dataset or click to select files</p>

              <input multiple name="file" type="file" {...getInputProps()} />
            </div>
          </div>
        </div>

        <div
          className={cn(
            "flex w-full flex-col overflow-hidden transition-[max-height,_max-width] duration-500 md:h-full",
            files.length ? "h-full rounded-primary border max-md:max-h-[60dvh] md:max-w-[40vw]" : "max-h-0 md:max-w-0",
          )}>
          <h3 className="flex items-center justify-center border-b bg-primary p-5 text-xl font-semibold">
            Your added tracks
          </h3>
          <ScrollArea className="min-w-auto bg-background">
            {files.map(({ key, name, type }) => (
              <div className="group flex h-16 select-none items-center border-b px-4 hover:bg-primary" key={key}>
                <div className="flex h-full w-[calc(100%-16px)] items-center space-x-2">
                  <Image alt={key} height={25} src={`/${type}.svg`} width={25} />
                  <span className="truncate">{name}</span>
                </div>
                <ToolTipButton
                  buttonProps={{
                    "aria-label": "delete voice",
                    onClick: () => {
                      deleteVoiceHandler(key);
                    },
                    size: "icon",
                    variant: "shell",
                  }}
                  tooltipContent="Delete voice">
                  <Trash2Icon
                    absoluteStrokeWidth
                    className="m-2 hidden cursor-pointer opacity-80 hover:opacity-100 group-hover:flex"
                    height={20}
                    strokeWidth={1.5}
                    width={20}
                  />
                </ToolTipButton>
              </div>
            ))}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};
