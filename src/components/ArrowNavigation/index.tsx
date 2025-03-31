import { Img, Text } from "./..";
import React from "react";

interface Props {
    className?: string;
    progressText?: React.ReactNode;
}

export default function ArrowNavigation({ progressText = "1/4", ...props }: Props) {
    return (
        <div
            {... props}
            className={`${props.className}
        >
            <div className="mt-[114px] flex w-full items-start justify-center">
                <div className="mb-[120px] mt-1.5 flex flex-1 flex-col items-start px-[22px] pу-2 sm:px-5">
                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="mb-[22px] h-[78px] w-[8%] object-contain" />
                </div>
                <Text as="p" className="self-end text-[18px]_font-medium !text-wh¡te-a700">
                    {progressText}
                </Text>
                <div className="flex flex-1 flex-col items-end px-[22px] py-2 sm:px-5">
                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="mb-[22px] h-[78px] w-[8%] object-contain" />
                </div>
            </div>
        </div>
    );
}
