import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 10, // The number of virtual users to run concurrently
  duration: "30s",
};

// See https://grafana.com/docs/k6/latest/examples/get-started-with-k6/ to learn more about authoring k6 scripts
export default function () {
  http.get("http://localhost:3001");
  sleep(1);
}
