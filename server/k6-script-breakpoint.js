import http from "k6/http";

// const abortOnFail = true;
const abortOnFail = false;
const delayAbortEval = "10s";

export const options = {
  discardResponseBodies: true,

  scenarios: {
    rps_breakpoint: {
      executor: "ramping-arrival-rate",
      // startRate: 300, // Start iterations per `timeUnit`
      // timeUnit: '1m', // Start `startRate` iterations per minute
      preAllocatedVUs: 10000,
      stages: [
        { target: 80000, duration: "5m" }, // ssr
        // { target: 150000, duration: "5m" }, // json 1x1
        // { target: 80000, duration: "5m" }, // json 2x3
        // { target: 400, duration: "5m" }, // json 3x10
      ],
    },
  },
  thresholds: {
    http_req_duration: [
      { threshold: "p(90) < 200", abortOnFail, delayAbortEval },
      { threshold: "p(95) < 200", abortOnFail, delayAbortEval },
      { threshold: "max < 500", abortOnFail, delayAbortEval },
    ],
    http_req_failed: [
      { threshold: "rate < 0.001", abortOnFail, delayAbortEval },
    ],
  },
};

// See https://grafana.com/docs/k6/latest/examples/get-started-with-k6/ to learn more about authoring k6 scripts
export default function () {
  http.get("http://localhost:3001");
}
