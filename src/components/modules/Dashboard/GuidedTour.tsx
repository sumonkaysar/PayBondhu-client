import useGuideTour from "@/hooks/useGuideTour";
import React from "react";
import Joyride, { type CallBackProps, STATUS, type Step } from "react-joyride";

const steps: Step[] = [
  {
    target: "#nav-menu",
    content:
      "Use this menu to navigate between different sections of the dashboard.",
    disableBeacon: true,
  },
  {
    target: "#sidebar-toggle",
    content: "Open or close the sidebar menu for a better visualization.",
  },
  {
    target: "#theme-toggle",
    content: "Switch between light and dark mode for a better experience.",
  },
  {
    target: "#logout-btn",
    content: "You can logout using this button.",
  },
  // {
  //   target: "#dashboard-stats",
  //   content: "Here you can quickly view key performance stats at a glance.",
  // },
  {
    target: "#charts-section",
    content: "This area shows visual insights and trends using graphs.",
  },
  // {
  //   target: "#table-search",
  //   content:
  //     "Use the search & filter options to quickly find specific records.",
  // },
];

const GuidedTour: React.FC = () => {
  const { run, setRun } = useGuideTour();

  const handleCallback = (data: CallBackProps) => {
    const { status } = data;
    const finishedStatuses: Array<CallBackProps["status"]> = [
      STATUS.FINISHED,
      STATUS.SKIPPED,
    ];

    if (finishedStatuses.includes(status)) {
      setRun(false);
    }
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      showProgress
      showSkipButton
      hideCloseButton
      disableScrolling={false}
      spotlightPadding={8}
      styles={{
        options: {
          zIndex: 10000,
          primaryColor: "#4f46e5", // Indigo for modern feel
          backgroundColor: "#1f2937", // Dark tooltip
          textColor: "#fff",
        },
        tooltip: {
          borderRadius: "12px",
          padding: "16px",
        },
        buttonNext: {
          backgroundColor: "#4f46e5",
          borderRadius: "6px",
        },
        buttonBack: {
          color: "#9ca3af",
        },
      }}
      callback={handleCallback}
    />
  );
};

export default GuidedTour;
