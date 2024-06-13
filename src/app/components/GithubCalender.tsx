import React from "react";
import GitHubCalendar from "react-github-calendar";

export const GithubCalender = () => {
  return (
    <>
      <h1 className="text-center text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2 md:py-4">
                Github Calender
            </h1>

<div className="pb-10"></div>
        <GitHubCalendar
          username="siddanth-6365"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          colorScheme="dark"
          style={{ color: "white" }}
        />
    </>
  );
};
