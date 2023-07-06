"use client";

import Colors from "../_lib/colors";
import { useJobs } from "../_hooks/useJobs";

export default function Jobs() {
  const { jobs, isLoading } = useJobs(null, null, "", null, "");

  // console.log("jobs:", jobs);

  return (
    <main>
      {isLoading ? (
        <h1 style={{ margin: "0", textAlign: "center", color: Colors.primary }}>
          Loading jobs...
        </h1>
      ) : (
        <h1 style={{ margin: "0", textAlign: "center", color: Colors.primary }}>
          This is the Hiredly jobs page.
        </h1>
      )}
    </main>
  );
}
