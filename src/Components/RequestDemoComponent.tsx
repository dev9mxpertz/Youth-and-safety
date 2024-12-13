"use client";

import { useRouter } from "next/navigation";
import React from "react";

function RequestDemoComponent() {
  const router = useRouter();
  return (
    <div>
      <div className="flex items-center gap-1">
        <p className="text-[#757575] text-sm font-normal">
          Not a customer yet?
        </p>
        <button
          type="button"
          onClick={() => router.push("/RequestDemo/stepOne")}
          className="text-[#0F67B1] text-sm font-medium"
        >
          Request a free demo
        </button>
      </div>
    </div>
  );
}

export default RequestDemoComponent;
